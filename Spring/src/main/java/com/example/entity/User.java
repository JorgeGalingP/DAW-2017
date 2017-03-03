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

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	
	
	
	
	
	private String 	Name;
	private String Username;
	private String Direccion1;
	private String Direccion2;
	private String Country;
	private String City;
	private int postalCode;
	private String password;
	private int creditNumber;
	private int CVV;
	private String email;
	private int telefono;
	private String descripcion;
	
	@ElementCollection(fetch =FetchType.EAGER)
	private List<String>roles;
	
	protected User(){
		
	}

	public User(Integer id, String name, String username, String direccion1, String direccion2, String country,
			String city, int postalCode, String password, int creditNumber, int cVV, String email, int telefono,
			String descripcion,String roles) {
		super();
		this.id = id;
		Name = name;
		Username = username;
		Direccion1 = direccion1;
		Direccion2 = direccion2;
		Country = country;
		City = city;
		this.postalCode = postalCode;
		this.password = password;
		this.creditNumber = creditNumber;
		CVV = cVV;
		this.email = email;
		this.telefono = telefono;
		this.descripcion = descripcion;
		this.roles= new ArrayList<>(Arrays.asList(roles));
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getUsername() {
		return Username;
	}

	public void setUsername(String username) {
		Username = username;
	}

	public String getDireccion1() {
		return Direccion1;
	}

	public void setDireccion1(String direccion1) {
		Direccion1 = direccion1;
	}

	public String getDireccion2() {
		return Direccion2;
	}

	public void setDireccion2(String direccion2) {
		Direccion2 = direccion2;
	}

	public String getCountry() {
		return Country;
	}

	public void setCountry(String country) {
		Country = country;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public int getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(int postalCode) {
		this.postalCode = postalCode;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getCreditNumber() {
		return creditNumber;
	}

	public void setCreditNumber(int creditNumber) {
		this.creditNumber = creditNumber;
	}

	public int getCVV() {
		return CVV;
	}

	public void setCVV(int cVV) {
		CVV = cVV;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getTelefono() {
		return telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
	
	
	

}
