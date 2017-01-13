package com.objectpartners.plummer.service_schemas.dtos

class ExtendedForecast(override var id: Long,
                       var forecasts: MutableList<WeatherForecast>,
                       var confidence: Confidence) : ForecastServiceDto<Long> {
}