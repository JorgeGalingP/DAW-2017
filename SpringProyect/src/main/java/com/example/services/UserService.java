package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.User;
import com.example.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User findOne(int id){
		return userRepository.findOne(id);
		
	}
	public List<User>findAll(){
		return userRepository.findAll();
	}
	
	
		
		
	
	
	public User findByName(String name){
		return userRepository.findByName(name);
		
	}
	public void save(User user){
		userRepository.save(user);
		
	}
	public void delete (User user){
		userRepository.delete(user);
		
	}
	public void delete(int id){
		userRepository.delete(id);
		
	}






	
	

}
