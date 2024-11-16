package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import io.micrometer.common.lang.NonNull;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings( @NonNull CorsRegistry registry) {
        registry.addMapping("/**")  // Allow CORS for all endpoints
                .allowedOrigins("http://localhost:4200")  // Allow specific frontend URL
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow specific methods
                .allowedHeaders("*");  // Allow all header ng // Allow credentials (optional)
    }
}
