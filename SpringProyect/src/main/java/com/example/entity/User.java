package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
	private String contraseña;
	private int postalCode;
	private String avatar;
	
	
	protected User(){}
	
	


	public User(String name, String surname, String email, String pais, String descripcion, String telephone, String contraseña,
			int postalCode) {
		
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.pais = pais;
		this.descripcion = descripcion;
		this.telephone = telephone;
		this.contraseña = contraseña;
		this.postalCode = postalCode;
		this.avatar = "avatar.png";
	}

     
	


	
	
	public String getAvatar() {
		return avatar;
	}




	public void setAvatar(String avatar) {
		this.avatar = avatar;
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




	public String getContraseña() {
		return contraseña;
	}




	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}
	
	public String toString(){
		return "User"+this.getId()+"name"+this.name+"surname"+this.surname+"street1"+this.contraseña;
	}
	
	
	
	
	
	

}
