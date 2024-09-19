package com.technician.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technician.dto.LoginResponse;
import com.technician.entities.Technician;
import com.technician.repo.TechnicianLoginRepo;

@Service
public class TechnicianLoginService {

	@Autowired
	TechnicianLoginRepo technicianLoginRepo;
	

    public Optional<LoginResponse> login(String email) {
        Optional<Technician> existingUser = technicianLoginRepo.findById(email);
        if (existingUser.isPresent()) {
        	Technician user = existingUser.get();
            LoginResponse loginResponse = new LoginResponse(user.getEmail(), user.getPassword());
            return Optional.of(loginResponse);
        } else {
            return Optional.empty();
        }
    }
}
