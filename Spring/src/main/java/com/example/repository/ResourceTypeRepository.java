package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Resource;
import com.example.entity.ResourceType;

public interface ResourceTypeRepository extends JpaRepository<Resource,Integer> {
	
	ResourceType findOneByName(String name);

}
