package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Oferta;
import com.example.entity.PurchaseOrder;
import com.example.repository.PurchaseOrderRepository;

@Service
public class PurchaseService {
	
	@Autowired
	 
	private PurchaseOrderRepository purchaseOrderRepository;
	
	public PurchaseOrder findOne(Integer id){
		
		return purchaseOrderRepository.findOne(id);
		
	}
	
	public PurchaseOrder findByCode(String code){
		
		return purchaseOrderRepository.findByCode(code);
	}
	
	public void save (PurchaseOrder purchaseOrder){
		purchaseOrderRepository.save(purchaseOrder);
	}
	
	public void delete (Integer id){
		purchaseOrderRepository.delete(id);
	}
	
	public void delete (PurchaseOrder purchaseOrder){
		purchaseOrderRepository.delete(purchaseOrder);
	}
	
	public List<PurchaseOrder>findAll(){
		return purchaseOrderRepository.findAll();
	}
	
	
	

}
