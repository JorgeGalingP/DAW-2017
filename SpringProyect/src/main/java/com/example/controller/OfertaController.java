package com.example.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.example.entity.Oferta;
import com.example.entity.OfertaDescuento;
import com.example.entity.Resource;
import com.example.repository.OfertaDescuentoRepository;
import com.example.repository.OfertaRepository;





@Controller
public class OfertaController {
	
@Autowired
	
	private OfertaRepository ofertaRepository;

@Autowired
	private OfertaDescuentoRepository ofertaDescuentoRepository;
	
	
	@PostConstruct
	public void init(){
		Oferta oferta1 = new Oferta ("2x1",1234,"LLevate 2 y paga 1",2,1,"2x1.jpg");
		ofertaRepository.save(oferta1);
		Oferta oferta2 = new Oferta ("3x2",1233,"LLevate 3 y paga 2",3,2,"3x2.jpg");
		ofertaRepository.save(oferta2);
		Oferta oferta3 = new Oferta ("7x5",1235,"LLevate 7 y paga 5",7,5,"7x5.jpg");
		ofertaRepository.save(oferta3);
		Oferta oferta4 = new Oferta ("10x7",1232,"LLevate 10 y paga 7",10,7,"10x7.jpg");
		ofertaRepository.save(oferta4);
	
		
	
	}
	
	/*@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public String oferta (Model model ,@PathVariable Integer id){
	
	        Oferta oferta=  ofertaRepository.findOne(id);
	        model.addAttribute("oferta",oferta);
	        
	        return "ofertas";
	}*/
	
	
	
	
	
	
	
	
	//metodo para crear una oferta desde el form
	@RequestMapping("/nuevaOferta")
	public String nuevaOferta(Model model, Oferta oferta) {

		ofertaRepository.save(oferta);
		return "ofertas";
		
		}
	
	//metodo para borrar una oferta desde el form
	@RequestMapping("/borrarPromocion")
	public String borrarPromocion(Model model, Oferta oferta) {
		
		
		
		Oferta promocion = ofertaRepository.findByCode(oferta.getCode());
		ofertaRepository.delete(promocion);
		
		OfertaDescuento promociondescuento = ofertaDescuentoRepository.findByCode(oferta.getCode());
		ofertaDescuentoRepository.delete(promociondescuento);
		
		
		return "ofertas";
		
		}
	
	
	
	
	/*@RequestMapping("/ofertas")
	public String verOfertas(Model model, @PathVariable long id) {
		
		Oferta oferta = ofertaRepository.findOne((int) id);

		model.addAttribute("oferta", oferta);

		return "ofertas";
	}*/
	
	
	
	

	

}
