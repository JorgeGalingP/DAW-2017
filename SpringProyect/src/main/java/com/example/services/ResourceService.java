package com.example.services;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.example.entity.Resource;
import com.example.repository.ResourceRepository;

@Service
public class ResourceService {
	
	
	@Autowired ResourceRepository resourceRepository;
	
	public Resource findOne(int id){
		
		return resourceRepository.findOne(id);
		
	}
	
	public List<Resource>findAll(){
		
		return resourceRepository.findAll();
		
	}
	public Resource findByTitle(String title){
		return resourceRepository.findByTitle(title);
	}
	
	public void save(Resource resource){
		resourceRepository.save(resource);
	}
	public void delete(Integer id){
		resourceRepository.delete(id);
	}
	
	public void delete (Resource resource){
		resourceRepository.delete(resource);
	}
	
	

}
