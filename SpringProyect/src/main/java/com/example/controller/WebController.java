package com.example.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.repository.OfertaDescuentoRepository;
import com.example.repository.OfertaRepository;
import com.example.repository.ResourceRepository;

@Controller
public class WebController {
	
	@Autowired 
	private ResourceRepository repository;
	
@Autowired
	
	private OfertaRepository ofertaRepository;

@Autowired
	private OfertaDescuentoRepository ofertaDescuentoRepository;
	
	
	@RequestMapping("/")
	public String index(Model model){
		model.addAttribute("vinilos", repository.findAll());
		return "index";
	    }
	@RequestMapping("/login")
		public String inicioSesion(){
			return "login";
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
	   public String Ofertas(Model model){
		model.addAttribute("ofertas", ofertaRepository.findAll());
		model.addAttribute("ofertasDescuento", ofertaDescuentoRepository.findAll());
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
	
	


