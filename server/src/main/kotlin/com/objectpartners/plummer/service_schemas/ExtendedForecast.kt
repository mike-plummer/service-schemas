package com.objectpartners.plummer.service_schemas

import java.util.*

class ExtendedForecast(override var id: Long,
                       override var timestamp: Date,
                       forecasts: MutableList<WeatherForecast>,
                       confidence: Confidence) : ForecastServiceDto<Long> {
}