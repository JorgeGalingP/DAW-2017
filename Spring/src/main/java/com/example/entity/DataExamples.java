package com.example.entity;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.repository.OfertaRepository;
import com.example.repository.ResourceRepository;
import com.example.repository.UserRepository;

public class DataExamples {
	@Autowired
	private UserRepository userRepository;
    @Autowired
    private ResourceRepository resourceRepository;
    @Autowired
    private OfertaRepository ofertaRepository;
    
    
    @PostConstruct
    private void initDatabase(){
    	
    	userRepository.save(new User());
    	userRepository.save(new User());
    	
    	
    	
    	//resource
    	
    	Oferta of1,of2,of3;
    	ResourceType rt1,rt2;
    	Resource vinilo1,vinilo2;
    	
    	
    	of1= new Oferta("of1",0001,"dos por uno en vinilos","VINILO_OFER");
    	of2= new Oferta("of2",0002,"vinilos al cincuenta por ciento","VINILO_OFER");
    	of3= new Oferta("of3",0003,"por la compra de un vinilo te descontamos la del siguiente","VINILO_OFER");
    	ofertaRepository.save(of1);
    	ofertaRepository.save(of2);
    	ofertaRepository.save(of3);
    	
    	
    	vinilo1 = new Resource("los Beatles","los Beatles","1952","Buen estado","La vida es bella",4.5,004,"RESOURCE_SONGS");
    	vinilo2 = new Resource("Daddy Cool","Bob Marley","1952","Buen estado","the life",48.9,005,"RESOURCE_SONGS");
    	vinilo1.setOferta(of1);
    	vinilo2.setOferta(of2);
    	
    	
    	
    	
    	
    	
    
    
    
    
    
	
	
    }
}
