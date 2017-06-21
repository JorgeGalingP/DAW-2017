package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.entity.Resource;
import com.example.entity.ResourceFavorito;
import com.example.repository.ResourceFavoritoRepository;
import com.example.repository.ResourceRepository;

@Service
public class ResourceFavoritoService {
	//Hacemos un servicio para que pueda usarse desde el controlador web y el rest
		@Autowired ResourceFavoritoRepository resourceRepository;
		
		public ResourceFavorito findOne(int id){
			
			return resourceRepository.findOne(id);
			
		}
		
		public List<ResourceFavorito>findAll(){
			
			return resourceRepository.findAll();
			
		}
		public Resource findByTitle(String title){
			return resourceRepository.findByTitle(title);
		}
		public List <Resource> findByInterprete(String interprete){
			return resourceRepository.findByInterprete(interprete);
		}
		public List<Resource> findByEstado(String estado){
			return resourceRepository.findByEstado(estado);
		}
		public List<Resource> findByVisto(boolean visto){
			return resourceRepository.findByVisto(visto);
		}
		public void save (ResourceFavorito resourceService){
			resourceRepository.save(resourceService);
		}
		
		
		
		 
		public void delete(Integer id){
			resourceRepository.delete(id);
		}
		
		public void delete (ResourceFavorito resource){
			resourceRepository.delete(resource);
		}

		public Page<ResourceFavorito> findAll(PageRequest pageRequest) {
			// TODO Auto-generated method stub
			return resourceRepository.findAll(pageRequest);
		}

		

		
		
		

}
