package com.example.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.Resource;
import com.example.entity.ResourceFavorito;
import com.example.services.ResourceFavoritoService;
import com.example.services.ResourceService;

@Controller
public class ViniloFavoritoController {
	@Autowired 
	private ResourceFavoritoService repository;
	
	private static final String FILES_FOLDER = ".\\src\\main\\resources\\static\\imagenes";

	private List<String> imageTitles = new ArrayList<>();
	
	
	
	@PostConstruct
	public void init(){
		ResourceFavorito rs1 = new ResourceFavorito ("Catch a fire", "Uno de los mejores","Bob Marley","1973","Nuevo", "Catch a Fire",37,0001, "vfd", "img1.jpg");
		repository.save(rs1);
		ResourceFavorito rs2 = new ResourceFavorito ("Live", "Uno de los mejores","Bob Marley","1975","Nuevo", "live",28,0002, "vfd", "img2.jpg");
		repository.save(rs2);
		ResourceFavorito rs3 = new ResourceFavorito ("Let it be", "¡El primero!","The Beatles","1970","Nuevo", "Let it be",45,0003, "vfd", "img3.jpg");
		repository.save(rs3);
		
	}
	
		@RequestMapping(value="/nuevoViniloFavorito",  method = RequestMethod.POST)
		public String nuevoVinilo(Model model, ResourceFavorito resource, @RequestParam("imageTitle") String imageTitle,
				@RequestParam("file") MultipartFile file) {
			String fileName = imageTitles.size() + ".jpg";
			if (!file.isEmpty()) {
				try {

					File filesFolder = new File(FILES_FOLDER);
					if (!filesFolder.exists()) {
						filesFolder.mkdirs();
					}

					File uploadedFile = new File(filesFolder.getAbsolutePath(), fileName);
					file.transferTo(uploadedFile);

					imageTitles.add(imageTitle);
					
					model.addAttribute("imageTitles", imageTitles);

					resource.setImg(fileName);
					
					repository.save(resource);
					
					return "/";

				} catch (Exception e) {
					
					model.addAttribute("fileName",fileName);
					model.addAttribute("error",
							e.getClass().getName() + ":" + e.getMessage());
					
					return "/";
				}
			} else {
				
				model.addAttribute("error",	"The file is empty");
				
				return "/";
				}
			}
		
		//metodo para borrar un vinilo desde el form
			/*	@RequestMapping("/borrarArticuloFavorito")
				public String borrarVinilo(Model model, ResourceFavorito resource) {
					
					ResourceFavorito vinilo = repository.findByTitle(resource.getTitle());

					repository.delete(vinilo);
					return "/";
					
					}*/
				
			
		/*@RequestMapping("/articulo/addComment")
		public void addComment(Comment comment, @PathVariable int id) {
			
			Resource vinilo = repository.findOne(id);

			vinilo.getComments().add(comment);

			
		}*/

		
		
	
	
		
	

}
