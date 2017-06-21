package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Resource;
import com.example.entity.ResourceFavorito;

public interface ResourceFavoritoRepository extends JpaRepository<ResourceFavorito,Integer> {
	List<Resource> findByInterprete(String interprete);
	List<Resource> findByEstado(String estado);
	List<Resource> findByVisto(boolean visto);
	
	Resource findByTitle(String title);

}
