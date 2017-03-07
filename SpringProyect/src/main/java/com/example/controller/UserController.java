package com.example.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

public class UserController {
	
	@RequestMapping("/miPerfil")
	public String user(Model model){
		return"miPerfil";
	}

}
