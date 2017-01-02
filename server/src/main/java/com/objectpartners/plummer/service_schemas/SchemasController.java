package com.objectpartners.plummer.service_schemas;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

import static com.objectpartners.plummer.service_schemas.SchemasController.RESOURCE_ROOT_URL;

@RestController
@RequestMapping(RESOURCE_ROOT_URL)
public class SchemasController {

    public static final String RESOURCE_ROOT_URL = "/schemas";

    @Inject
    protected SchemaService schemaService;

    @RequestMapping(method = RequestMethod.GET)
    public void getSchema() {

    }
}