package com.example.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.entity.Oferta;
import com.example.entity.OfertaDescuento;
import com.example.repository.OfertaDescuentoRepository;

@Controller
public class OfertaDescuentoController {
	
	@Autowired
	
	private OfertaDescuentoRepository ofertaDescuentoRepository;
	
	@PostConstruct
	public void init(){
		OfertaDescuento ofertadescuento1 = new OfertaDescuento ("AHORRA 10%",1111,"10% de descuento en todos nuestros productos",10,"10.png");
		ofertaDescuentoRepository.save(ofertadescuento1);
		OfertaDescuento ofertadescuento2 = new OfertaDescuento ("AHORRA 20%",1112,"20% de descuento si te llevas 3 o más artículos",20,"20.jpg");
		ofertaDescuentoRepository.save(ofertadescuento2);
		
		
		
	
	}
	
	/*
	 * Sin comentar da error, hay que revisarlo cuando se necesite
	 * 
	 * @RequestMapping(value="/{id}",method = RequestMethod.GET)
	public String ofertaDescuento (Model model ,@PathVariable Integer id){
	
	        OfertaDescuento ofertaDescuento=  ofertaDescuentoRepository.findOne(id);
	        model.addAttribute("ofertaDescuento",ofertaDescuento);
	        
	        return "ofertaDescuento";
	}*/
	
	
	

	//metodo para crear una oferta descuento desde el form
		@RequestMapping("/nuevaOfertaDescuento")
		public String nuevaOfertaDescuento(Model model, OfertaDescuento ofertaDescuento) {

			ofertaDescuentoRepository.save(ofertaDescuento);
			return "ofertas.html";
			
			}
		
	
	

	

}
