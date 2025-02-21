package com.technician.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technician.dto.LoginResponse;
import com.technician.service.TechnicianLoginService;


//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/technician")
public class TechnicianLoginCotroller {

	@Autowired
	TechnicianLoginService technicianLoginService;
	
	 @GetMapping("/login/{email}")
	    public Optional<LoginResponse> login(@PathVariable String email) {
	        return technicianLoginService.login(email);
	    }
}
