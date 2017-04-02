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

import com.example.entity.PurchaseOrder;

import com.example.entity.Resource;
import com.example.repository.ResourceRepository;
import com.example.services.ResourceService;

@RestController
@RequestMapping("/api/purchaseOrder")
public class PurchaseOrderRestController {
	
	public interface purchaseOrderDetail extends PurchaseOrder.Basic,Resource.Basic{}
	
	@Autowired 
	
    private ResourceService resourceService;
	
	@RequestMapping(value="/",method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Resource postResource(@RequestBody Resource resource){
		
		resourceService.save(resource);
		return resource;
		
		
	}
	@RequestMapping(value="/all",method=  RequestMethod.GET)
	public ResponseEntity<List<Resource>> getResources(){
		List<Resource>resource = resourceService.findAll();
		if(resource!= null){
			    return new ResponseEntity<>(resource,HttpStatus.OK);
		}else{
			    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@RequestMapping(value="/{title}",method= RequestMethod.GET)
	public ResponseEntity<Resource>getResource (@PathVariable String title){
		Resource resource = resourceService.findByTitle(title);
		if(resource!= null){
			return new ResponseEntity<>(resource,HttpStatus.OK);
			
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value="/{id}",method= RequestMethod.GET)
	public ResponseEntity<Resource>getResource (@PathVariable Integer id){
		Resource resource = resourceService.findOne(id);
		if(resource!= null){
			return new ResponseEntity<>(resource,HttpStatus.OK);
			
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value="/{interprete}", method =RequestMethod.GET)
	public ResponseEntity<List<Resource>> getInterprete(@PathVariable String interprete){
		List<Resource>resource = resourceService.findByInterprete(interprete);
		if(resource!= null){
			return new ResponseEntity<>(resource, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@RequestMapping(value="/{title}",method = RequestMethod.DELETE)
	public ResponseEntity<Resource>deleteResource(@PathVariable  String title){
		Resource resource = resourceService.findByTitle(title);
		if(resource!= null){
			resourceService.delete(resource);
			return new ResponseEntity<>(resource,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public ResponseEntity<Resource>deleteResource(@PathVariable Integer id){
		Resource resource = resourceService.findOne(id);
		if(resource!= null){
			resourceService.delete(resource);
			return new ResponseEntity<>(resource,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Resource> putResource(@PathVariable Integer id,@RequestBody Resource resourceModificado){
		Resource resource = resourceService.findOne(id);
		if((resource!= null)&&(resource.getId()== resourceModificado.getId())){
			resourceService.save(resource);
			return new ResponseEntity<>(resourceModificado,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	
	

}
