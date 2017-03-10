package com.example.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.entity.Oferta;
import com.example.entity.Resource;
import com.example.repository.ResourceRepository;



@Controller
public class ViniloController {
	
	@Autowired 
	private ResourceRepository repository;
	
	
	@PostConstruct
	public void init(){
		Resource rs1 = new Resource ("hola", "rfgrg","pep","mayi","hh", "df",89,90, "vfd");
		repository.save(rs1);
		Resource rs2 = new Resource ("dfdsa", "rfdfdgbgrg","p2334p","mayi","hh", "df",455,90, "vfd");
		repository.save(rs2);
	
	}
	
	
	@RequestMapping("/index.html")
	public void tablon( Model model) {
		
		

		model.addAttribute("vinilos", repository.findAll());
		
		

		
	}
	//metodo para crear un vinilo desde el form
		@RequestMapping("/nuevoVinilo")
		public String nuevoVinilo(Model model, Resource resource) {

			repository.save(resource);
			return "index.html";
			
			}

		
		
	
	
		
	

	

}
