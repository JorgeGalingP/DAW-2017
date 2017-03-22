package com.example.controller;


import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.Comment;
import com.example.entity.Oferta;
import com.example.entity.Resource;
import com.example.entity.User;
import com.example.repository.ResourceRepository;
import com.example.repository.UserRepository;


@Controller
public class ViniloController {
	
	@Autowired 
	private ResourceRepository repository;
	
	private static final String FILES_FOLDER = ".\\src\\main\\resources\\static\\imagenes";

	private List<String> imageTitles = new ArrayList<>();
	
	
	
	@PostConstruct
	public void init(){
		Resource rs1 = new Resource ("Catch a fire", "Uno de los mejores vinilos de reggae","Bob Marley & The Wailers","1973","Nuevo", "Catch a Fire",37,0001, "vfd", "img1.jpg");
		rs1.getComments().add(new Comment("Cool"));
		rs1.getComments().add(new Comment("Very cool"));
		repository.save(rs1);
		Resource rs2 = new Resource ("Live", "Uno de los mejores vinilos de reggae","Bob Marley & The Wailers","1975","Seminuevo", "live",28,0002, "vfd", "img2.jpg");
		repository.save(rs2);
		Resource rs3 = new Resource ("Let it be", "¡El primero!","The Beatles","1970","Nuevo", "Let it be",45,0003, "vfd", "img3.jpg");
		repository.save(rs3);
		Resource rs4 = new Resource ("The Beatles Box", "Grandes éxitos","The Beatles","1980","Nuevo", "The beatles Box",15,0004, "vfd", "img4.jpg");
		repository.save(rs4);
		Resource rs5 = new Resource ("Thriller 1982", "El más vendido de todos los tiempos","Michael Jackson","1982","Segunda mano", "Thriller",12,0005, "vfd", "img5.jpg");
		repository.save(rs5);
		Resource rs6 = new Resource ("Invincible", "¡El último!","Michael Jackson","2001","Nuevo", "Invincible",32,0006, "vfd", "img6.jpg");
		repository.save(rs6);
		Resource rs7 = new Resource ("King of Pop", "Lo mejor del mejor","Michael Jackson","2008","Nuevo", "King of Pop",23,0006, "vfd", "img1.jpg");
		repository.save(rs7);
	}
	
		@RequestMapping(value="/nuevoVinilo",  method = RequestMethod.POST)
		public String nuevoVinilo(Model model, Resource resource, @RequestParam("imageTitle") String imageTitle,
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
				@RequestMapping("/borrarArticulo")
				public String borrarVinilo(Model model, Resource resource) {
					
					Resource vinilo = repository.findByTitle(resource.getTitle());

					repository.delete(vinilo);
					return "/";
					
					}
				
				

		
	
		

		/*@RequestMapping("/articulo/addComment")
		public void addComment(Comment comment, @PathVariable int id) {
			
			Resource vinilo = repository.findOne(id);

			vinilo.getComments().add(comment);

			
		}*/

		
		
	
	
		
	

	

}
