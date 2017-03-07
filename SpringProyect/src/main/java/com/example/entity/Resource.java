package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Resource {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private  String title;
	private String interprete;
	private String fecha;
	private String album;
	private double precio;
	private int codigo;
	
	
	
	protected Resource(){
	}



	public Resource(String title, String interprete, String fecha, String album, double precio, int codigo) {
		
		this.title = title;
		this.interprete = interprete;
		this.fecha = fecha;
		this.album = album;
		this.precio = precio;
		this.codigo = codigo;
	}



	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
	}



	public String getInterprete() {
		return interprete;
	}



	public void setInterprete(String interprete) {
		this.interprete = interprete;
	}



	public String getFecha() {
		return fecha;
	}



	public void setFecha(String fecha) {
		this.fecha = fecha;
	}



	public String getAlbum() {
		return album;
	}



	public void setAlbum(String album) {
		this.album = album;
	}



	public double getPrecio() {
		return precio;
	}



	public void setPrecio(double precio) {
		this.precio = precio;
	}



	public int getCodigo() {
		return codigo;
	}



	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	
	
	
	
	
	
	

}
