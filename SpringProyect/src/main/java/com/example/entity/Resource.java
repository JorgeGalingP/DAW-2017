package com.example.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;





@Entity
public class Resource {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private  String title;
	private  String subtitle;
	private String interprete;
	private String fecha;
	private String estado;
	private String album;
	private int precio;
	private int codigo;
	private String tracklist;
	private String img;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Comment> comentarios;
	
	public String getSubtitle() {
		return subtitle;
	}



	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}



	public String getEstado() {
		return estado;
	}



	public void setEstado(String estado) {
		this.estado = estado;
	}



	public String getTracklist() {
		return tracklist;
	}



	public void setTracklist(String tracklist) {
		this.tracklist = tracklist;
	}



	protected Resource(){
	}



	public Resource(String title, String subtitle, String interprete, String fecha, String estado, String album, int precio, int codigo, String tracklist, String img) {
		
		this.title = title;
		this.subtitle=subtitle;
		this.interprete = interprete;
		this.fecha = fecha;
		this.estado=estado;
		this.album = album;
		this.precio = precio;
		this.codigo = codigo;
		this.tracklist=tracklist;
		this.img = img;
		this.comentarios=new ArrayList<Comment>();
		
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



	public int getPrecio() {
		return precio;
	}



	public void setPrecio(int precio) {
		this.precio = precio;
	}



	public int getCodigo() {
		return codigo;
	}



	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	


	public String getImg() {
		return img;
	}



	public void setImg(String img) {
		this.img = img;
	}



	public List<Comment> getComentarios() {
		return comentarios;
	}



	public void setComentarios(List<Comment> comentarios) {
		this.comentarios = comentarios;
	}
	
	
	
	
	

}
