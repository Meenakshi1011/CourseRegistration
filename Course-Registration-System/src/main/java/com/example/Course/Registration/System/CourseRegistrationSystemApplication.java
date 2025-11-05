package com.example.Course.Registration.System;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.example.Course.Registration.System")
@EnableJpaRepositories(basePackages = "com.example.Course.Registration.System.repository")
@EntityScan(basePackages = "com.example.Course.Registration.System.model")
public class CourseRegistrationSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(CourseRegistrationSystemApplication.class, args);
    }
}
