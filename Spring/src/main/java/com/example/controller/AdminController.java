package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.repository.ResourceRepository;
import com.example.repository.UserRepository;

public class AdminController {
	
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ResourceRepository resourceRepository;
	
	@RequestMapping ("/admin/")
	public String home(Model model){
		return "admin/index";
	}
	@RequestMapping ("/admin/users")
	public String users (Model model){
		model.addAttribute("users", userRepository.findAll());
		return"admin/user_management";
		
	}
	
	

}
