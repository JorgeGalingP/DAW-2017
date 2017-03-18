package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RegistroController {
	
	@RequestMapping("/inicio")
	public String miPerfil(Model model, @RequestParam String  name,@RequestParam String surname,@RequestParam String  email, @RequestParam String  telephone,@RequestParam String pais,@RequestParam String codigoPostal,@RequestParam String  descripcion,@RequestParam String inputPassword){
		
		
		model.addAttribute("name",name);
		model.addAttribute("surname",surname);
		model.addAttribute("email",email);
		model.addAttribute("telephone",telephone);
		model.addAttribute("pais",pais);
		model.addAttribute("codigoPostal",codigoPostal);
		model.addAttribute("descripcion", descripcion);
		model.addAttribute("inputPassword",inputPassword);
		


		return "miperfil";	
		
	}
	@RequestMapping("/Modificar")
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
		
	}

}
