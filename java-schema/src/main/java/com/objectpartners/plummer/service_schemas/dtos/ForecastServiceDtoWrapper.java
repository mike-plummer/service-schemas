package com.objectpartners.plummer.service_schemas.dtos;

import com.fasterxml.jackson.annotation.JsonSubTypes;

@JsonSubTypes({
        @JsonSubTypes.Type(WeatherForecast.class),
        @JsonSubTypes.Type(ExtendedForecast.class),
        @JsonSubTypes.Type(City.class)
}
)
interface ForecastServiceDtoWrapper<T> extends ForecastServiceDto<T> {

}