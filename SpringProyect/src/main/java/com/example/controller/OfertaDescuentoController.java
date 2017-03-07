package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.entity.OfertaDescuento;
import com.example.repository.OfertaDescuentoRepository;

public class OfertaDescuentoController {
	
	@Autowired
	
	private OfertaDescuentoRepository ofertaDescuentoRepository;
	
	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public String ofertaDescuento (Model model ,@PathVariable Integer id){
	
	        OfertaDescuento oferta=  ofertaDescuentoRepository.findOne(id);
	        model.addAttribute("oferta",oferta);
	        
	        return "oferta";
	}
	
	
	
	

	

}
