package com.customer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.customer.entities.Customer;
import com.customer.exceptions.CustomerNotFoundException;
import com.customer.repo.CustomerRepo;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepo customerRepo;

    public Customer getCustomerByEmail(String email) {
        return customerRepo.findById(email)
                           .orElseThrow(() -> new CustomerNotFoundException("Customer not found with email: " + email));
    }
}
