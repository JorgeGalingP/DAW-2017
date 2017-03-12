package appSpring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.entity.Resource;



public interface ResourceRepository extends JpaRepository<Resource,Integer> {
		
	
	List<Resource> findByInterprete(String interprete);
	
	Resource findByTitle(String title);

}

