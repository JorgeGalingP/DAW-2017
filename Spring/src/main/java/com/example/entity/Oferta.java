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
public class Oferta {
	
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private Integer id;
	
	private String Nombre;
	private int Codigo;
	private String Description;
	
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String>vinilos;
	
	//Constructor
	protected Oferta(){
		
	}
	public Oferta(String Nombre,int Codigo,String Description,String... vinilos){
		this.Nombre=Nombre;
		this.Codigo=Codigo;
		this.Description=Description;
		this.vinilos= new ArrayList<>(Arrays.asList(vinilos));
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNombre() {
		return Nombre;
	}
	public void setNombre(String nombre) {
		Nombre = nombre;
	}
	public int getCodigo() {
		return Codigo;
	}
	public void setCodigo(int codigo) {
		Codigo = codigo;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public List<String> getVinilos() {
		return vinilos;
	}
	public void setVinilos(List<String> vinilos) {
		this.vinilos = vinilos;
	}
	
	
	

}
