package com.objectpartners.plummer.service_schemas.dtos

import java.util.Date

data class WeatherForecast(override var id: Long,
                           override var timestamp: Date,
                           var dayOfWeek: DayOfWeek,
                           var high: Double,
                           var low: Double,
                           var precipitation: Precipitation,
                           var cloudy: Boolean,
                           var city: City) : ForecastServiceDto<Long> {

}