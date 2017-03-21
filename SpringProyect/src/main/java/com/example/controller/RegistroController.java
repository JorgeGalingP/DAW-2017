package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.entity.User;
import com.example.repository.ResourceRepository;
import com.example.repository.UserRepository;

@Controller
public class RegistroController {
	

	@Autowired 
	private UserRepository userRepository;
	
	@RequestMapping("/registrarse")
	public String Registro( Model model, User user){
		
		
		userRepository.save(user);
		
		
		model.addAttribute("usuario",user);
	


		return "miperfil";	
		
	}
	
	
	/*@RequestMapping("/Modificar")
	public String miPerfil2 (Model model ,@RequestParam String name,@RequestParam String surname,@RequestParam String email,@RequestParam String telephone,@RequestParam String pais,@RequestParam String descripcion,@RequestParam String inputPassword,@RequestParam String codigoPostal){
		
		model.addAttribute("name",name);
		model.addAttribute("surname",surname);
		model.addAttribute("email",email);
		model.addAttribute("telephone",telephone);
		model.addAttribute("pais",pais);
		model.addAttribute("codigoPostal",codigoPostal);
		model.addAttribute("descripcion", descripcion);
		model.addAttribute("inputPassword",inputPassword);
		
		return"miperfil";
		
	}*/

}
