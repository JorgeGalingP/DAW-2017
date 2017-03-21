package com.example.controller;

import java.io.File;
import java.util.ArrayList;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.User;
import com.example.repository.UserRepository;

import ch.qos.logback.core.joran.action.Action;

public class UserController {
	
	
	private UserRepository userRepository;
	
	
	
	
	@RequestMapping("/miperfil/edit{id}")
	public String editmiPerfil(Model model,@PathVariable Integer id,@RequestParam String name,@RequestParam String surname,@RequestParam String email,@RequestParam String telephone,@RequestParam String pais,@RequestParam int postalCode,@RequestParam MultipartFile avatar){
		
	User user = userRepository.findOne(id);
	if(user != null){
		user.setName(name);
		user.setSurname(surname);
		user.setEmail(email);
		user.setTelephone(telephone);
		user.setPais(pais);
		user.setPostalCode(postalCode);
		String avatarName = user.getId().toString()+ ".jpg";
		if(!avatarName.isEmpty()){
			try{
				
				    File filesFolder = new File("src/main/resources/static/imagenes");
				    if(!filesFolder.exists()){
				    	filesFolder.mkdirs();
				    }
				    File uploadedFile = new File(filesFolder.getAbsolutePath(),avatarName);
				    avatar.transferTo(uploadedFile);
			   } catch(Exception e){
				   
			   }
			   user.setAvatar(avatarName);
		}
		userRepository.save(user);
		
		
	}
	return "miperfil";
	
	
	
	
		
	}

}
