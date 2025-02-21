package com.technician.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technician.entities.Technician;
import com.technician.repo.TechnicianSignUpRepo;

@Service
public class TechnicianSignupService {

	@Autowired
	TechnicianSignUpRepo technicianSignUpRepo;

	public String registerNewUser(Technician technician) {
		Optional<Technician> existingUser = technicianSignUpRepo.findByEmail(technician.getEmail());

		if (existingUser.isPresent()) {
			return "Already registered";
		} else {
			technicianSignUpRepo.save(technician);
			return "Registration successful";
		}
	}

	public List<Technician> getAllUsers() {
		return technicianSignUpRepo.findAll();
	}
}
