package com.customer.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.customer.dto.LoginResponse;
import com.customer.service.LoginService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customer")
public class LoginController {

    @Autowired
    LoginService loginService;
    
    @GetMapping("/login/{email}")
    public Optional<LoginResponse> login(@PathVariable String email) {
        return loginService.login(email);
    }
}
