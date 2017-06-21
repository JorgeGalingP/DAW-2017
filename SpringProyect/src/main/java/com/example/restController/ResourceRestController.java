package com.example.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.component.UserComponent;
import com.example.entity.Resource;
import com.example.entity.User;
import com.example.repository.ResourceRepository;
import com.example.services.ResourceService;
import com.fasterxml.jackson.annotation.JsonView;

//Puede que haga falat conseguir un recurso a partir de otro atributo...

@RestController
@RequestMapping("/api/resources")
public class ResourceRestController {
	
	public interface ResourceDetail extends Resource.Basic,Resource.comentarios{}
	
	
	
	@Autowired
	private ResourceService resourceService;
	@Autowired 
	private UserComponent userComponent;
	
	
	
	
	@JsonView(Resource.Basic.class)
	@RequestMapping(value="/", method=RequestMethod.GET)
	public Page<Resource> getResources(@RequestParam(required=false) String page){
		if(page== null){
			return resourceService.findAll(new PageRequest(0,9));
		}
		else{
			int numPage = Integer.parseInt(page);
			return resourceService.findAll(new PageRequest(numPage,9));
		}
	}
	@JsonView(Resource.Basic.class)
	@RequestMapping(value="/recommended", method = RequestMethod.GET)
	public List<Resource> getRecommended(){
		List<Resource> recomendadas = new ArrayList<Resource>();
		int j=0;
		for(Resource res : resourceService.findAll()){
			j++;
			recomendadas.add(res);
			if(j==3){
				   break;
			}
		}
		return recomendadas;
	}
	@JsonView(Resource.Basic.class)
	@RequestMapping(value="/favoritos", method = RequestMethod.GET)
	public List<Resource> getFavourites(){
		List<Resource> favoritos = new ArrayList<Resource>();
		int j=0;
		for(Resource res :resourceService.findAll()){
			j++;
			favoritos.add(res);
			if(j==2){
				break;
			}
			
		}
		return favoritos;
	}
	//Creamos un nuevo recurso
	
	/*@RequestMapping(value="/",method= RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Resource postResource(@RequestBody Resource resource){
		
		resourceService.save(resource);
		return resource;
		
	}*/
	
	@RequestMapping(value ="/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Resource> createResource(@RequestBody Resource resource){
		if(userComponent.isLoggedUser()){
			
			resourceService.save(resource);
			return new ResponseEntity<>(resource, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	//Obtenemos una lista
	/*@JsonView(ResourceDetail.class)
	@RequestMapping(value="/", method= RequestMethod.GET)
	public ResponseEntity<List<Resource>>getAllResource(){
		List<Resource>resources = resourceService.findAll();
		if(resources!=null){
			return new ResponseEntity<>(resources,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	
		
	}*///obtenemos un recurso
	@JsonView(ResourceDetail.class)
	@RequestMapping(value="/{id}", method= RequestMethod.GET)
	public ResponseEntity<Resource>getResource(@PathVariable int id){
		
		Resource resource = resourceService.findOne(id);
		if(resource!= null){
			return new ResponseEntity<>(resource,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	/*@JsonView(ResourceDetail.class)
	@RequestMapping(value="/{titulo}",method = RequestMethod.GET)
	public ResponseEntity<List<Resource>>getResourceByTitle(@PathVariable String interprete){
		
		List<Resource>resources = 
	}*/
	
	
	//eliminamos un recurso
	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Resource> deleteResource(@PathVariable Integer id){
		Resource resourceSelected = resourceService.findOne(id);
		if(resourceSelected != null){
			resourceService.delete(id);
			return new ResponseEntity<>(resourceSelected,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(resourceSelected,HttpStatus.NOT_FOUND);
			
		}
	}
	//añadimos un recurso
	@RequestMapping(value="/{id}", method= RequestMethod.PUT)
	public ResponseEntity<Resource> putResource(@PathVariable Integer id,@RequestBody Resource resourceUpdated){
		
		Resource resource = resourceService.findOne(id);
		if((resource!=null) && (resource.getId() )== resourceUpdated.getId()){
			resourceService.save(resourceUpdated);
			return new ResponseEntity<>(resourceUpdated,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			
		}
	}
	
	
	
	
	

}
