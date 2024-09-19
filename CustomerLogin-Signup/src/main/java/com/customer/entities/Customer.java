package com.customer.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Customer {

//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Id
	String email;
	String password;
	String name;
	Long contact;
	String city;
}
