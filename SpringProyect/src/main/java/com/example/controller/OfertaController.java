package com.example.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.example.entity.Oferta;

import com.example.repository.OfertaRepository;



@Controller
public class OfertaController {
	
	@Autowired
	
	private OfertaRepository ofertaRepository;
	
	@PostConstruct
	public void init(){
		Oferta oferta1 = new Oferta ("2x1",1234,"LLevate 2 y paga 1",2,1);
		ofertaRepository.save(oferta1);
		Oferta oferta2 = new Oferta ("3x2",4321,"LLevate 3 y paga 2",3,2);
		ofertaRepository.save(oferta2);
	
	}
	
	/*@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public String oferta (Model model ,@PathVariable Integer id){
	
	        Oferta oferta=  ofertaRepository.findOne(id);
	        model.addAttribute("oferta",oferta);
	        
	        return "oferta";
	}*/
	
	
	//metodo para crear una oferta desde el form
	@RequestMapping("/nuevaOferta")
	public String nuevaOferta(Model model, Oferta oferta) {

		ofertaRepository.save(oferta);
		return "ofertas";
		
		}
	
	
	
	

	

}
