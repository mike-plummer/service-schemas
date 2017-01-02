package com.objectpartners.plummer.service_schemas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.objectpartners.plummer.service_schemas")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}