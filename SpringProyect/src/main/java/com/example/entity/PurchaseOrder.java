package com.example.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class PurchaseOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private String code;
	private double totalToPay;
	private String description;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Resource> carrito;
	
	public PurchaseOrder(){
		
	}
	
	public PurchaseOrder(String code, double totalToPay, String description, List<Resource> carrito){
		this.code = code;
		this.totalToPay = totalToPay;
		this.description = description;
		this.carrito = carrito;
	}
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public double getTotalToPay() {
		return totalToPay;
	}
	public void setTotalToPay(double totalToPay) {
		this.totalToPay = totalToPay;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Resource> getCarrito() {
		return carrito;
	}
	public void setCarrito(List<Resource> carrito) {
		this.carrito = carrito;
	}
	
	

}
