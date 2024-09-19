package com.technician.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Technician {

	@Id
	String email;
	String password;
	Long contact;
	String city;
	String education;
	String specialization;
	String experience;
	boolean garage;
	String Garage_address;
}
