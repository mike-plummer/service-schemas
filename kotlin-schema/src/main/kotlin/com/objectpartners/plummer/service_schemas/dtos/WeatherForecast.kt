package com.objectpartners.plummer.service_schemas.dtos

data class WeatherForecast(override var id: Long,
                           var dayOfWeek: DayOfWeek,
                           var high: Double,
                           var low: Double,
                           var precipitation: Precipitation,
                           var cloudy: Boolean,
                           var city: City) : ForecastServiceDto<Long> {

}