import { Component, OnInit } from '@angular/core';
import { get, isFunction, values, omitBy, pickBy, times } from 'lodash';
import { AbstractSchemaComponent } from '../AbstractSchemaComponent';

@Component({
    selector: 'kotlin-schema',
    templateUrl: 'kotlin-schema.pug'
})
export class KotlinSchemaComponent extends AbstractSchemaComponent implements OnInit {

    private kotlin: any = require('kotlin');

    public resources: any[];
    public functions: any[];
    public functionResults: any = {};

    ngOnInit(): void {
        const schema: any = require('../../../lib/opi-weather-schema.js');
        const schemaTypes: any = schema.com.objectpartners.plummer.service_schemas.dtos;
        const resourceTypes: any = omitBy(schemaTypes, type => !type.$metadata$);
        const functionTypes: any = pickBy(schemaTypes, type => !type.$metadata$);

        this.resources = values(resourceTypes);
        this.functions = values(functionTypes)
    }

    getFunctionTypeName(functionType: any): string {
        return this.getFunctionDisplayName(functionType.name, functionType);
    }

    invokeFunctionType(functionType: any): any {
        this.functionResults[functionType] = functionType();
    }

    getResourceTypeName(resourceType: any): string {
        return resourceType.name;
    }

    getInheritance(resourceType: any): string {
        const baseClasses: any[] = get(resourceType, '$metadata$.baseClasses') as any[];
        if (baseClasses) {
            const extensions = baseClasses.filter(clazz => get(clazz, '$metadata$.type') === this.kotlin.TYPE.CLASS).map(clazz => clazz.name);
            const implementations = baseClasses.filter(clazz => get(clazz, '$metadata$.type') === this.kotlin.TYPE.TRAIT).map(clazz => clazz.name);

            let value = '';
            if (extensions.length) {
                value += ` extends ${extensions.join(', ')}`;
            }
            if (implementations.length) {
                value += ` implements ${implementations.join(', ')}`;
            }

            return value;
        }

        return '';
    }

    getPropertiesForResourceType(resourceType: any): string[] {
        try {
            // This (I hope) will eventually be the "right" way to do reflection of Kotlin classes in JS
            // Currently you can retrieve the KClass but most KClass methods throw a NotImplementedError
            // const kclass: any = kotlin.getKClass(resourceType);
            // console.log(kclass.qualifiedName);
            // console.log(kclass.supertypes);
            // console.log(kclass.members);

            // Doing it this way is a 'good enough' workaround in pure JS, but isn't perfect
            // and can't supply type information on fields
            const resource = new resourceType();

            if (resource instanceof this.kotlin.kotlin.Enum) {
                return resourceType.values();
            }

            const names: string[] = [];

            let target = resource;
            while (target && target !== Object.prototype) {
                Object.getOwnPropertyNames(target)
                    .filter(member => !/component[0-9]+|constructor|\$/.test(member))
                    .forEach(member => {
                        const value = target[member];

                        if (isFunction(value)) {
                            names.push(this.getFunctionDisplayName(member, value));
                        } else {
                            names.push(member);
                        }
                    });
                target = Object.getPrototypeOf(target);
            }

            return names;
        } catch (err) {
            console.log(err);
        }
    }

    private getFunctionDisplayName(name, fn) {
        return `${name}( ${times(fn.length, () => 'arg').join(', ')} )`;
    }
}