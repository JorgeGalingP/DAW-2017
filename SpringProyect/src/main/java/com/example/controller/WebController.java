package com.example.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
	
	@RequestMapping("/")
	public String index(){
		return "index";
	    }
	@RequestMapping("/inicio_sesion")
		public String inicioSesion(){
			return "inicio_sesion";
	    }
	@RequestMapping("/articulo")
		public String articulo(){
			return("articulo");	
	    }
	@RequestMapping("/carrito")
	    public String carrito(){
		    return("carrito");
	    }
	@RequestMapping("/inicio")
	    public String inicio(){
		      return("inicio");
	    }
	@RequestMapping("/metodo-pago")
	    public String MetodoPago(){
		      return ("metodo_pago");
		}
	@RequestMapping("/miperfil")
	   public String MiPerfil(){
		      return("miperfil");
	    }
	@RequestMapping("/ofertas")
	   public String Ofertas(){
		      return("ofertas");
	}
	
	@RequestMapping("/administrador")
	   public String Administrador(){
		      return("administrador");
	}


	@RequestMapping("/registro")
	public String registro(){
		return("registro");
		
	}
	
	@RequestMapping("/somos")
	public String somos(){
		return"somos";
	}
	@RequestMapping("/validacion-pedidos")
	public String validacion(){
		return"validacion";
	}
}
	
	


