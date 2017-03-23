package com.example.controller;


import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
		
		Resource rs7 = new Resource ("Play Deep", "Lo mejor del mejor","Outfield","2008","Nuevo", "King of Pop",23,0006, "vfd", "img7.jpg");
		repository.save(rs7);
		Resource rs8 = new Resource ("Heart", "Grandes éxitos","Heart","1980","Nuevo", "The beatles Box",15,0004, "vfd", "img8.jpg");
		repository.save(rs8);
		Resource rs9 = new Resource ("The Wall", "El más vendido de todos los tiempos","Pink Floyd","1982","Segunda mano", "Thriller",12,0005, "vfd", "img9.jpg");
		repository.save(rs9);
		Resource rs10 = new Resource ("Aretha Now", "¡El último!","Aretha Franklin","2001","Nuevo", "Invincible",32,0006, "vfd", "img10.jpg");
		repository.save(rs10);
		Resource rs11 = new Resource ("Gold", "Lo mejor del mejor","Lionel Richie","2008","Nuevo", "King of Pop",23,0006, "vfd", "img11.jpg");
		repository.save(rs11);
		Resource rs12 = new Resource ("Who's Next", "Grandes éxitos","The Who","1980","Nuevo", "The beatles Box",15,0004, "vfd", "img12.jpg");
		repository.save(rs12);
		Resource rs13 = new Resource ("Faith", "El más vendido de todos los tiempos","George Michael","1982","Segunda mano", "Thriller",12,0005, "vfd", "img13.jpg");
		repository.save(rs13);
		Resource rs14 = new Resource ("Too Low For Zero", "¡El último!","Elton John","2001","Nuevo", "Invincible",32,0006, "vfd", "img14.jpg");
		repository.save(rs14);
		Resource rs15 = new Resource ("Aces and Kings", "Lo mejor del mejor","Go West","2008","Nuevo", "King of Pop",23,0006, "vfd", "img15.jpg");
		repository.save(rs15);
		Resource rs16 = new Resource ("Ammonia Avenue", "Lo mejor del mejor","The Alan Parsons Project","2008","Nuevo", "King of Pop",23,0006, "vfd", "img16.jpg");
		repository.save(rs16);
		Resource rs17 = new Resource ("Street Talk", "Grandes éxitos","Steve Perry","1980","Nuevo", "The beatles Box",15,0004, "vfd", "img17.jpg");
		repository.save(rs17);
		Resource rs18 = new Resource ("The Very Best of KC", "El más vendido de todos los tiempos","KC and the Sunshine Band","1982","Segunda mano", "Thriller",12,0005, "vfd", "img18.jpg");
		repository.save(rs18);
		Resource rs19 = new Resource ("True Blue", "¡El último!","Madonna","2001","Nuevo", "Invincible",32,0006, "vfd", "img19.jpg");
		repository.save(rs19);
		Resource rs20 = new Resource ("Mirage", "Lo mejor del mejor","Fleetwood Mac","2008","Nuevo", "King of Pop",23,0006, "vfd", "img20.jpg");
		repository.save(rs20);
		Resource rs21 = new Resource ("Boys and Girls", "¡El último!","Steve Ferry","2001","Nuevo", "Invincible",32,0006, "vfd", "img21.jpg");
		repository.save(rs21);
		Resource rs22 = new Resource ("Prince & The Revolution: Purple Rain ", "Lo mejor del mejor","PrincePrince & The Revolution","2008","Nuevo", "King of Pop",23,0006, "vfd", "img22.jpg");
		repository.save(rs22);
		Resource rs23 = new Resource ("Chicago X", "El más vendido de todos los tiempos","Chicago","1982","Segunda mano", "Thriller",12,0005, "vfd", "img23.jpg");
		repository.save(rs23);
		Resource rs24 = new Resource ("Christopher Cross - The Album", "¡El último!","Christopher Cross","2001","Nuevo", "Invincible",32,0006, "vfd", "img24.jpg");
		repository.save(rs24);
		Resource rs25 = new Resource ("The Best of Culture Club", "Lo mejor del mejor","Culture Club","2008","Nuevo", "King of Pop",23,0006, "vfd", "img25.jpg");
		repository.save(rs25);
		Resource rs26 = new Resource ("Time After Time", "Lo mejor del mejor","Cindy Lauper","2008","Nuevo", "King of Pop",23,0006, "vfd", "img26.jpg");
		repository.save(rs26);
		Resource rs27 = new Resource ("Let's Dance", "Grandes éxitos","David Bowie","1980","Nuevo", "The beatles Box",15,0004, "vfd", "img27.jpg");
		repository.save(rs27);
		Resource rs28 = new Resource ("Brothers in Arms", "El más vendido de todos los tiempos","Dire Straits","1982","Segunda mano", "Thriller",12,0005, "vfd", "img28.jpg");
		repository.save(rs28);
		Resource rs29 = new Resource ("4[Expanded]", "¡El último!","Foreigner","2001","Nuevo", "Invincible",32,0006, "vfd", "img29.jpg");
		repository.save(rs29);
		Resource rs30 = new Resource ("Invisible Touch", "Lo mejor del mejor","Genesis","2008","Nuevo", "King of Pop",23,0006, "vfd", "img30.jpg");
		repository.save(rs30);
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
				
				@RequestMapping("/moreVinilos")
				public String vinilos(Model model,@RequestParam int page){
					
					Page<Resource> resources = repository.findAll(new PageRequest(page,12));
					model.addAttribute("items","resources");
					
					return"listItemsPage";

					}
				
		/*@RequestMapping("/articulo/addComment")
		public void addComment(Comment comment, @PathVariable int id) {
			
			Resource vinilo = repository.findOne(id);

			vinilo.getComments().add(comment);

			
		}*/

		
		
	
	
		
	

	

}
