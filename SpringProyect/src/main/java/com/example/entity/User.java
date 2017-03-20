package com.example.entity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String name;
	private String surname;
	private String email;
	private String pais;
	private String descripcion;
	private String telephone;
	private String passwordHash;
	private int postalCode;
	
	
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;
	
	protected User(){}
	
	


	public User(String name, String surname, String email, String pais, String descripcion, String telephone, String password,
			int postalCode, String... roles) {
		
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.pais = pais;
		this.descripcion = descripcion;
		this.telephone = telephone;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.postalCode = postalCode;
		this.roles = new ArrayList <> (Arrays.asList(roles));
	}




	public String getPasswordHash() {
		return passwordHash;
	}




	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}




	public List<String> getRoles() {
		return roles;
	}




	public void setRoles(List<String> roles) {
		this.roles = roles;
	}




	public Integer getId() {
		return id;
	}




	public void setId(Integer id) {
		this.id = id;
	}




	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getSurname() {
		return surname;
	}


	public void setSurname(String username) {
		this.surname = username;
	}


	


	public int getPostalCode() {
		return postalCode;
	}


	public void setPostalCode(int postalCode) {
		this.postalCode = postalCode;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getPais() {
		return pais;
	}




	public void setPais(String pais) {
		this.pais = pais;
	}




	public String getDescripcion() {
		return descripcion;
	}




	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}




	public String getTelephone() {
		return telephone;
	}




	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}




	
	
	
	
	
	

}
