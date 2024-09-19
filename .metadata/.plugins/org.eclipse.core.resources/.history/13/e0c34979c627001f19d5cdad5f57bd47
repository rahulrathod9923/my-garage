package com.technician.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technician.entities.Technician;

public interface TechnicianSignUpRepo extends JpaRepository<Technician, String>{

	Optional<Technician> findByEmail(String email);

}
