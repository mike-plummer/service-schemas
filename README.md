# service-schemas
Demonstration of methods for maintaining client-server schemas for JVM Rest Services.

## Wat?
This project demonstrates three different methods of auto-generating schema definitions from JVM
services for use in JavaScript. Obviously the most common method of provide a schema for Java
services is to build a 'client' JAR that contains the DTO classes. This works great for Java
consumers but is hardly helpful for webapps.

## Schema Types
### Reflection
Simple and flexible. Writing your own reflection-based schema generator gives you the most flexibility
and power, but can be hard to write anything beyond the very basic.

Pros: Simple, very customizable

Cons: Non-standardized, hard to integrate, manual

### JSON Schema
By far the most capable out-of-the-box, JSON Schema is a standard for describing (duh) a schema in JSON.
By default it includes fields and datatypes, and depending on what version & implementation you use, even
handles inheritance and can even parse Jackson annotations.

Pros: Easy, comprehensive

Cons: Can be hard to customize, may tie you to a specific JSON implementation

### Kotlin
This is one of the most exciting capabilities on the horizon. Kotlin is a JVM language like Groovy
or Scala which is cool in its own right, but has a secret superpower - it can compile directly to JavaScript
too.

Pros: Standardized by the compiler, share class *and* utility code!

Cons: KotlinJS limits classes that can be used in domain objects, not yet feature complete

## Requirements
- Java 8
- Gradle 3+
- Node & NPM (tested with Node v7.2.1, NPM v3.10.10)

## Instructions
1. Clone this repo
2. Navigate to `{project root}/client`
3. Execute `npm install`
3. Execute `npm start`
4. NPM will invoke Gradle which will perform the following:
    1. Download dependencies
    2. Compile Kotlin schema
    3. Generate KotlinJS, JSONSchema, and Reflective definitions
    
5. Once Gradle is finished NPM will launch Webpack which will deploy the example webapp
6. Navigate to `http://localhost:8000` to view different schema definitions in action
7. (Optional) Customize the schema
    a. `ctrl-c` to exit Webpack if running
    b. Make an update to the Kotlin files under the `kotlin-schema` project. Add a field to the DTOs or a new package-level function to Utilities.kt
    c. Re-run `npm start` and load webapp - your new change should automatically appear in the schemas
8. To quit type `ctrl-c`

##Licensing
This code is provided under the terms of the MIT license: basically you're free to do whatever you want with it, but no guarantees are made to its validity, stability, or safety. All works referenced by or utilized by this project are the property of their respective copyright holders and retain licensing that may be more restrictive.