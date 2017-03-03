package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Vinilo;

public interface ViniloRepository  extends JpaRepository <Vinilo,Integer>{
	
	List<Vinilo> findByName(String name);
	
	List<Vinilo> findByInterprete(String interprete);
	
	List<Vinilo> findByAlbum(String album);
	
	List<Vinilo> findByPrize(long prize);
	
	List<Vinilo> findByCode (int code);

}
