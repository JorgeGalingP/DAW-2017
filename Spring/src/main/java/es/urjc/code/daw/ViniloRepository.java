package es.urjc.code.daw;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import es.urjc.code.daw.Entidades.Vinilo;

public interface ViniloRepository extends JpaRepository<Vinilo, Long> {

	List<Vinilo> findByInterprete(String Interprete);
	
	List<Vinilo> findByNombre(String Nombre);
	
}