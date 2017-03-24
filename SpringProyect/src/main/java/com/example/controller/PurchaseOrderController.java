package com.example.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.Resource;
import com.example.entity.User;
import com.example.entity.PurchaseOrder;
import com.example.repository.ResourceRepository;
import com.example.repository.UserRepository;
import com.example.repository.PurchaseOrderRepository;

@Controller
public class PurchaseOrderController {
	@Autowired 
	private PurchaseOrderRepository purchaseOrderRepository;
	
	@PostConstruct
	public void init(){
		Resource re1 = new Resource ("Just be", "Lo mejor del mejor","Outfield","2008","Nuevo", "King of Pop",23,0006, "vfd", "img23.jpg");
		Resource re2 = new Resource ("Duke", "Lo mejor del mejor","Outfield","2008","Nuevo", "King of Pop",23,0006, "vfd", "img30.jpg");
		
		List<Resource> carrito = new ArrayList<>();
		carrito.add(re1);
		carrito.add(re2);
		
		PurchaseOrder po1 = new PurchaseOrder("CODE#1234", 45.67, "HOLA", carrito);
		purchaseOrderRepository.save(po1);
	}

}