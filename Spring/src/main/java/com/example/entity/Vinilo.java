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
public class Vinilo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String interprete;
	private String name;
	private String date;
	private String state;
	private String album;
	private long prize;
	private int code;
	
	@ElementCollection(fetch =FetchType.EAGER)
	private  List<String> songs;
	
	
	//Constructor
	protected Vinilo(){
		
	}


	protected Vinilo(Integer id, String name,String interprete, String date, String state, String album, long prize, int code,String songs) {
		super();
		this.id = id;
		this.name = name;
		this.interprete=interprete;
		this.date = date;
		this.state = state;
		this.album = album;
		this.prize = prize;
		this.code = code;
		this.songs= new ArrayList<>(Arrays.asList(songs));
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}
	public String getInterprete(){
		return interprete;
	}
	public void setInterprete(String interprete){
		this.interprete=interprete;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getAlbum() {
		return album;
	}


	public void setAlbum(String album) {
		this.album = album;
	}


	public long getPrize() {
		return prize;
	}


	public void setPrize(long prize) {
		this.prize = prize;
	}


	public int getCode() {
		return code;
	}


	public void setCode(int code) {
		this.code = code;
	}


	public List<String> getSongs() {
		return songs;
	}


	public void setSongs(List<String> songs) {
		this.songs = songs;
	}
	
	

}