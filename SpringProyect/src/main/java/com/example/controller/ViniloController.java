package com.example.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.entity.Resource;
import com.example.repository.ResourceRepository;



@Controller
public class ViniloController {
	
	@Autowired 
	private ResourceRepository repository;
	
	
	@PostConstruct
	public void init(){
		Resource rs1 = new Resource ("hola","pep","mayi","hh",89,90);
		repository.save(rs1);
		Resource rs2 = new Resource ("adios","pop","mayo","hhh",87,77);
		repository.save(rs2);
	
	}
	
		
		
	
	
		
	

	

}
