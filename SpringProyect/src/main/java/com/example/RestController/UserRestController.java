package com.example.restController;



import java.util.List;

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
import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("/")
public class UserRestController {
	
    //Las url he suspuesto que lo añadidos en inicio sesion
	
   public  interface UserDetail extends User.Carrito,User.Roles{}
	
	
	@Autowired UserRepository userRepository;
	
	
	
	//Añade un nuevo usuario
	@RequestMapping(value="/",method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User user(@RequestBody User user){
		userRepository.save(user);
		return user;
		
	}
	
	//Obtiene los usuarios de una lista de usuarios
	@JsonView(UserDetail.class)
	@RequestMapping(value="/miperfil",method=RequestMethod.GET)
	public ResponseEntity<List<User>>getUsers(){
		List<User>users = (List<User>) userRepository.findAll();
		if(users!=null){
			return new ResponseEntity<>(users,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	// Obtiene un usuario a partir de su id
	@JsonView(UserDetail.class)
	@RequestMapping(value="/miperfil/{id}", method= RequestMethod.GET)
	public ResponseEntity<User>getUser(@PathVariable Integer id){
		User user = userRepository.findOne(id);
		if(user!= null){
			return new ResponseEntity<>(user,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(user,HttpStatus.NOT_FOUND);
		}
	}
	//borra un usuario a partir de su id
	@JsonView(UserDetail.class)
	@RequestMapping(value="/miperfil/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<User>deleteUser(@PathVariable Integer id){
		User user = userRepository.findOne(id);
		if(user!= null){
			userRepository.delete(user);
			return new ResponseEntity<>(user,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(user,HttpStatus.NOT_FOUND);
		}
	
		
	}

     //modifica un usuario por otro si no son iguales
	@JsonView(UserDetail.class)
	@RequestMapping(value="/miperfil/{id}", method=RequestMethod.PUT)
	public ResponseEntity<User>putUser(@PathVariable Integer id,@RequestBody User usuarioModificado){
		User user = userRepository.findOne(id);
		if((user!=null) && (user.getId()!= usuarioModificado.getId())){
			userRepository.save(user);
			return new ResponseEntity<>(user,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(user,HttpStatus.NOT_FOUND);
			
		}
	}
	
}

