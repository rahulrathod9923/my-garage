package com.customer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.customer.entities.Customer;
import com.customer.repo.SignUpRepo;

@Service
public class SignUpService {

	@Autowired
	SignUpRepo signUpRepo;
	
	 public String registerNewUser(Customer customer) {
	        Optional<Customer> existingUser = signUpRepo.findByEmail(customer.getEmail());
	        
	        if (existingUser.isPresent()) {
	            return "Already registered";
	        } else {
	            signUpRepo.save(customer);
	            return "Registration successful";
	        }
	    }

	public List<Customer> getAllUsers() {
		return signUpRepo.findAll();
	}

}
