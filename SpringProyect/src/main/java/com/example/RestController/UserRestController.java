package com.example.RestController;



import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.entity.User.Roles;
import com.example.repository.UserRepository;
import com.example.services.UserService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("api/users")
public class UserRestController {
	
    //Las url he suspuesto que lo añadidos en inicio sesion
	
	
   public  interface UserDetail extends User.Roles{}
	
	
	@Autowired UserService userRepository;
	
	
	//@JsonView(UserDetail.class)
	@RequestMapping(value="/", method = RequestMethod.GET)
	public Collection<User> getUsers(){
		return userRepository.findAll();
	}
	
	@RequestMapping(value="/newUser",method=RequestMethod.POST)
	public ResponseEntity<User> newUser(@RequestBody User u)throws Exception{
		u.setName("");
		u.setSurname("");
		u.setEmail("");
		u.setPais("");
		u.setTelephone("");
		u.setDescripcion("");
		u.setPasswordHash("");
		u.setPostalCode(0);
	//	u.setPrecioCarrito(0);
	   // u.setRoles(new ArrayList<>());
	    return new ResponseEntity<>(u,HttpStatus.OK);
		
		
		
	}
	
	
	
	
	
	
	
	
	
	//Añade un nuevo usuario
	@RequestMapping(value="/",method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User user(@RequestBody User user){
		userRepository.save(user);
		return user;
		
	}
	
	
	
	/*//Obtiene los usuarios de una lista de usuarios
	@JsonView(UserDetail.class)
	@RequestMapping(value="/",method=RequestMethod.GET)
	public ResponseEntity<List<User>>getUsers(){
		List<User>users = (List<User>) userRepository.findAll();
		if(users!=null){
			return new ResponseEntity<>(users,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}*/
	
	// Obtiene un usuario a partir de su id
	//@JsonView(UserDetail.class)
	@RequestMapping(value="/{id}", method= RequestMethod.GET)
	public ResponseEntity<User>getUser(@PathVariable  int id){
		User user = userRepository.findOne(id);
		if(user!= null){
			return new ResponseEntity<>(user,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(user,HttpStatus.NOT_FOUND);
		}
	}
	/*@JsonView(UserDetail.class)
	@RequestMapping(value="/{name}", method= RequestMethod.GET)
	public ResponseEntity<User>getUserName(@PathVariable String name){
		User user = userRepository.findByName(name);
		if(user!=null){
			return new ResponseEntity<>(user,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(user,HttpStatus.NOT_FOUND);
		}
	}*/
	//borra un usuario a partir de su id
	@JsonView(UserDetail.class)
	@RequestMapping(value="/{name}", method=RequestMethod.DELETE)
	public ResponseEntity<User>deleteUser(@PathVariable String name){
		User user = userRepository.findByName(name);
		if(user!= null){
			userRepository.delete(user);
			return new ResponseEntity<>(user,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(user,HttpStatus.NOT_FOUND);
		}
	
		
	}

     //modifica un usuario por otro si no son iguales
	@JsonView(UserDetail.class)
	@RequestMapping(value="/{name}", method=RequestMethod.PUT)
	public ResponseEntity<User>putUser(@PathVariable String name,@RequestBody User usuarioModificado){
		User user = userRepository.findByName(name);
		if((user!=null) && (user.getId()!= usuarioModificado.getId())){
			userRepository.save(user);
			return new ResponseEntity<>(user,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(user,HttpStatus.NOT_FOUND);
			
		}
	}
	
	@RequestMapping(value ="/registry", method= RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User createUser(@RequestBody User user){
	    User us = new User(user.getName(),user.getSurname(),user.getEmail(),user.getPais(),user.getTelephone(),user.getDescripcion(),user.getPasswordHash(),user.getPostalCode());
	     userRepository.save(us);
	     return us;
	}
	
}

