package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.example.entity.User;

public interface UserRepository  extends JpaRepository<User,Integer>{
	
	User findByName(String name);
	User findById(int id);
	

}
