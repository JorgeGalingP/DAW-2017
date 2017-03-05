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
public class OfertaController {
	
	@Autowired
	private ResourceRepository resourceRepo;
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
    public String OfertaProfile(Model model, @PathVariable Integer id){
		Resource resource = resourceRepo.findOne(id);
		model.addAttribute("resource",resource);
		return "oferta";
		
		
	}
	
	
	

}
