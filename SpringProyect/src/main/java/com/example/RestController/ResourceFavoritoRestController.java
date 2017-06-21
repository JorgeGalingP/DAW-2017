package com.example.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.RestController.ResourceRestController.ResourceDetail;
import com.example.entity.Resource;
import com.example.entity.ResourceFavorito;
import com.example.services.ResourceFavoritoService;
import com.example.services.ResourceService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("api/favoritos/resources")
public class ResourceFavoritoRestController {
public interface ResourceDetail extends Resource.Basic,Resource.comentarios{}
	
	
	
	@Autowired ResourceFavoritoService resourceService;
	
	//Creamos un nuevo recurso
	
	@JsonView(ResourceDetail.class)
	@RequestMapping(value="/", method= RequestMethod.GET)
	public ResponseEntity<List<ResourceFavorito>>getAllResource(){
		List<ResourceFavorito>resources = resourceService.findAll();
		if(resources!=null){
			return new ResponseEntity<>(resources,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		

		
	
		

	
	
	
	
	


}
}
