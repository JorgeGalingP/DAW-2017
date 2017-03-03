package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Oferta;

public interface OfertaRepository extends JpaRepository<Oferta,Integer> {
	
	List<Oferta> findByNombre(String Nombre);
	
	List<Oferta> findByCodigo(int Codigo);
	
	List<Oferta> findByDescription (String Description);

}
