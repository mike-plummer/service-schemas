package com.objectpartners.plummer.service_schemas.dtos

import java.util.Date

data class City(override var id: String,
                override var timestamp: Date,
                val name: String) : ForecastServiceDto<String> {
}