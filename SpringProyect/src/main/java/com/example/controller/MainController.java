package com.example.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.entity.Resource;
import com.example.repository.ResourceRepository;
import com.example.repository.UserRepository;

@Controller
public class MainController {
	
	@Autowired ResourceRepository resourceRepository;
	
	@Autowired UserRepository userRepository;
	
	
	@RequestMapping("/index")
	public String resources(Model model,HttpServletRequest request){
		
		Page<Resource> vinilos = resourceRepository.findAll(new PageRequest(0,12));
		model.addAttribute("vinilos",vinilos);
		
		return"index";
		
	}
	
	@RequestMapping(value="/moreVinilos")
	public String moreVinilos(Model model ,@RequestParam int page){
		Page<Resource> allVinilos = resourceRepository.findAll(new PageRequest(page,12));
		model.addAttribute("items",allVinilos);
		
		return"listItemsPage";
		
	}
	
	
	
	

}
