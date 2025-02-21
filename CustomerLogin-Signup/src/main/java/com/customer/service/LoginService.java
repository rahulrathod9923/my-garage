package com.customer.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.customer.dto.LoginResponse;
import com.customer.entities.Customer;
import com.customer.repo.LoginRepo;

@Service
public class LoginService {
    
    @Autowired
    LoginRepo loginRepo;

    public Optional<LoginResponse> login(String email) {
        Optional<Customer> existingUser = loginRepo.findById(email);
        if (existingUser.isPresent()) {
            Customer user = existingUser.get();
            LoginResponse loginResponse = new LoginResponse(user.getEmail(), user.getPassword());
            return Optional.of(loginResponse);
        } else {
            return Optional.empty();
        }
    }
}
