package com.customer.repo;



import org.springframework.data.jpa.repository.JpaRepository;

import com.customer.entities.Customer;


public interface LoginRepo extends JpaRepository<Customer, String>{
   
    // Optional<Customer> findById(String email);

}
