package com.technician.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technician.entities.Technician;

public interface TechnicianLoginRepo extends JpaRepository<Technician, String>{

}
