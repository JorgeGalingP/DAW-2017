package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.entity.Oferta;
import com.example.repository.OfertaRepository;

public class OfertaController {
	
	@Autowired
	
	private OfertaRepository ofertaRepository;
	
	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public String oferta (Model model ,@PathVariable Integer id){
	
	        Oferta oferta=  ofertaRepository.findOne(id);
	        model.addAttribute("oferta",oferta);
	        
	        return "oferta";
	}
	
	
	
	

	

}
