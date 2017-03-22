package com.example.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.entity.Resource;
import com.example.entity.User;
import com.example.repository.UserRepository;

@Component
public class DatabaseUsersLoader {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    private void initDatabase() {
    	
		Resource r = new Resource ("ejemplo para carrito1", "Uno de los mejores vinilos de reggae","Bob Marley & The Wailers","1973","Nuevo", "Catch a Fire",37,0001, "vfd", "img2.jpg");
		Resource r1 = new Resource ("ejemplo para carrito2", "Uno de los mejores vinilos de reggae","Bob Marley & The Wailers","1973","Nuevo", "Catch a Fire",37,0001, "vfd", "img2.jpg");
		Resource r2 = new Resource ("ejemplo para carrito3", "Uno de los mejores vinilos de reggae","Bob Marley & The Wailers","1973","Nuevo", "Catch a Fire",37,0001, "vfd", "img2.jpg");

    	
    	userRepository.save(new User("user1", "ramirez","ramirez","ramirez","ramirez","ramirez","pass",1,"ROLE_USER"));
		userRepository.save(new User("admin", "ramirez","ramirez","ramirez","ramirez","ramirez","pass",1, "ROLE_USER", "ROLE_ADMIN"));
		
		User user2 = new User("user2", "ramirez","ramirez","ramirez","ramirez","ramirez","pass",1,"ROLE_USER");
		user2.getCarrito().add(r);
		user2.getCarrito().add(r1);
		user2.getCarrito().add(r2);
		userRepository.save(user2);
    }

}
