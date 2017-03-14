package Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import Entity.Oferta;



public interface OfertaRepository extends JpaRepository<Oferta,Integer> {
	
	
	List<Oferta> findByName(String name);
	
	Oferta findByCode(int code);
	
	
	
	
	
	



}
