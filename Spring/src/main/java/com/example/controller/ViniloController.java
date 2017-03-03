package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.entity.Vinilo;
import com.example.repository.ViniloRepository;

@Controller
public class ViniloController {
	
	@Autowired
	private ViniloRepository viniloRepo;
	@RequestMapping (value="/{id}", method=RequestMethod.GET)
	public String viniloProfile(Model model,@PathVariable Integer id){
	
	     Vinilo vinilo=viniloRepo.findOne(id);
	     model.addAttribute("vinilo",vinilo);
	     
	     return "articulo";
	
	

}

}