package com.objectpartners.plummer.service_schemas

import java.util.Date

class ExtendedForecast(override var id: Long,
                       override var timestamp: Date,
                       var forecasts: MutableList<WeatherForecast>,
                       var confidence: Confidence) : ForecastServiceDto<Long> {
}