package com.example.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.PurchaseOrder;

import com.example.entity.Resource;
import com.example.services.ResourceService;

@RestController
@RequestMapping("/api/purchaseOrder")
public class PurchaseOrderRestController {
	
	public interface purchaseOrderDetail extends PurchaseOrder.Basic,Resource.Basic{}
	
	@Autowired 
	
	ResourceService resourceService;
	
	

}
