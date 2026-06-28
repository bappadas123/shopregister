package com.courtonlinebackend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
public class PublicController {
	 @GetMapping("/api/about")
	    public String about() {
	        return "Welcome to our company. We provide software solutions.";
	    }

	    @GetMapping("/api/contact")
	    public String contact() {
	        return "Email: support@example.com, Phone: 9876543210";
	    }
	

}
