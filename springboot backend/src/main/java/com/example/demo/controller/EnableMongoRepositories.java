package com.example.demo.controller;

import com.example.demo.repository.EmployeeRepository;

public @interface EnableMongoRepositories {

    Class<EmployeeRepository> basePackageClasses();

}