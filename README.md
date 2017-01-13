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
Cons: Least capable, non-standardized, hard to integrate

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

Pros:
Cons: