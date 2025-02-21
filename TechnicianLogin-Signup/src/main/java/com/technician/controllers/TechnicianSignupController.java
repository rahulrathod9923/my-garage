package com.technician.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technician.entities.Technician;
import com.technician.service.TechnicianSignupService;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/technician")
public class TechnicianSignupController {

	@Autowired
	TechnicianSignupService technicianSignupService;
	
	@PostMapping("/signup")
	public String registerNewUser(@RequestBody Technician signUp) {
			return technicianSignupService.registerNewUser(signUp);
	}
	
	@GetMapping()
	public List<Technician> getAllUsers() {
		return technicianSignupService.getAllUsers();
	}
	
}
