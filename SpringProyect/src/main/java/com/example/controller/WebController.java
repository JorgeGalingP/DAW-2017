package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
	@RequestMapping("/")
	public String index(){
		return"index";
	}
	@RequestMapping("/inicio_sesion")
	public String inicio_sesion(){
		return"inicio_sesion";
	}
	@RequestMapping("/articulo")
	public String articulo (){
		return"articulo";
	}
	@RequestMapping("/carrito")
	public String carrito(){
		return"carrito";
	}
	@RequestMapping("/index")
	public String index1(){
		return"index";
	}
	@RequestMapping("/inicio")
	public String inicio(){
		return"inicio";
	}
	@RequestMapping("/metodo-pago")
	public String metodopago(){
		return"metodo-pago";
	}
	@RequestMapping("/miperfil")
	public String miPerfil(){
		return"miperfil";
	}
	@RequestMapping("/ofertas")
	public String ofertas(){
		return"ofertas";
	}
	@RequestMapping("/registro")
	public String registro(){
		return"registro";
	}
	@RequestMapping("/somos")
	public String somos (){
		return"somos";
	}
	@RequestMapping("/validacion-pedidos")
	public String validacionpedidos(){
		return"validacionpedidos";
	}
	
	

}
