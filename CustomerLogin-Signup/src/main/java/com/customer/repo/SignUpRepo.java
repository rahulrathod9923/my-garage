package com.customer.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.customer.entities.Customer;


public interface SignUpRepo extends  JpaRepository<Customer, String>{

	Optional<Customer> findByEmail(String email);

}
