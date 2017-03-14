package Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import Entity.OfertaDescuento;



public interface OfertaDescuentoRepository extends JpaRepository<OfertaDescuento,Integer> {
	
	
	List<OfertaDescuento> findByName(String name);
	
	OfertaDescuento findByCode(int code);
	
	
	
	
	
	



}