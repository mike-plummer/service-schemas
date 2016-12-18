package com.objectpartners.plummer.service_schemas

import java.util.*

interface ForecastServiceDto<T> {
    var id: T
    var timestamp: Date
}