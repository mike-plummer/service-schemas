package com.objectpartners.plummer.service_schemas

import java.util.*

data class WeatherForecast(override var id: Long,
                           override var timestamp: Date,
                           var dayOfWeek: DayOfWeek,
                           var high: Double,
                           var low: Double,
                           var precipitation: Precipitation,
                           var cloudy: Boolean) : ForecastServiceDto<Long> {

}