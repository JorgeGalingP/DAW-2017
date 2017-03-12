package appSpring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.entity.OfertaDescuento;



public interface OfertaDescuentoRepository extends JpaRepository<OfertaDescuento,Integer> {
	
	
	List<OfertaDescuento> findByName(String name);
	
	List<OfertaDescuento> findByCode(int code);
	
	
	
	
	
	



}