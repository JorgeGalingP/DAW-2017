package com.example.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.entity.User;
import com.example.repository.UserRepository;

@Component
public class DatabaseUsersLoader {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    private void initDatabase() {
    	
    	userRepository.save(new User("user1", "ramirez","ramirez","ramirez","ramirez","ramirez","pass",1,"ROLE_USER"));
		userRepository.save(new User("admin", "ramirez","ramirez","ramirez","ramirez","ramirez","pass",1, "ROLE_USER", "ROLE_ADMIN"));
    }

}
