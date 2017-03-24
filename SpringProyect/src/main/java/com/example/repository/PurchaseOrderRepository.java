package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.PurchaseOrder;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder,Integer> {
		
	
	//List<PurchaseOrder> findByCode(String code);
	
	PurchaseOrder findByCode(String code);

}
