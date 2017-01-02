package com.objectpartners.plummer.service_schemas

import java.util.Date

interface ForecastServiceDto<T> {
    var id: T
    var timestamp: Date
}