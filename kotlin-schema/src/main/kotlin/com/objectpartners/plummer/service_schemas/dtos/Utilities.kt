package com.objectpartners.plummer.service_schemas.dtos

object counter {
    var value: Long = 0
}

fun sayHello(name: String = "User"): String {
    return "Hello, $name!"
}

fun incrementCounter(step: Long = 1): Long {
    println("Stepping counter by $step")
    counter.value += step
    return counter.value
}