package com.customer.repo;

import org.springframework.data.repository.CrudRepository;
import com.customer.entities.Customer;

public interface CustomerRepo extends CrudRepository<Customer, String> {
    // Additional query methods if needed
}