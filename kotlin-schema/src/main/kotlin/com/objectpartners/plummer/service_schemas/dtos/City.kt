package com.objectpartners.plummer.service_schemas.dtos

data class City(override var id: String,
                val name: String) : ForecastServiceDto<String> {
}