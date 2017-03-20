package com.example.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.User;
import com.example.repository.UserRepository;

public class UserController {
	
	private UserRepository userRepository;
	
	@RequestMapping("/miPerfil")
	public String user(Model model){
		return"miPerfil";
	}
	
	@RequestMapping("/")
	public String index() {
		return "miperfil";
	}
	
	@RequestMapping(value = "/image/upload", method = RequestMethod.POST)
	public String handleFileUpload(Model model, @PathVariable Integer id,
			@RequestParam("imageTitle") String imageTitle,
			@RequestParam("file") MultipartFile file) {
		
		
		User user = userRepository.findOne(id);

		String avatarName = user + ".jpg";

		if (!file.isEmpty()) {
			try {

				File filesFolder = new File("src/main/resources/static/imagenes/avatar");
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}

				File uploadedFile = new File(filesFolder.getAbsolutePath(), avatarName);
				file.transferTo(uploadedFile);


			} catch (Exception e) {
				
			}
			user.setAvatar(avatarName);
			
		} 
		
		userRepository.save(user);
		
	
	    return"redirect:/miperfil";
}

	
	

}
