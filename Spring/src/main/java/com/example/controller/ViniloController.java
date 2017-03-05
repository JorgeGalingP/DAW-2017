package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.entity.Resource;
import com.example.repository.ResourceRepository;

@Controller
public class ViniloController {
	
	@Autowired
	private ResourceRepository viniloRepo;
	
	
	@RequestMapping (value="/{id}", method=RequestMethod.GET)
	public String viniloProfile(Model model,@PathVariable Integer id){
	
	     Resource vinilo=viniloRepo.findOne(id);
	     model.addAttribute("vinilo",vinilo);
	     
	     return "articulo";
	
	

}

}