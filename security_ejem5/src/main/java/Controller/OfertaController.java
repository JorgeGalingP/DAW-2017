package Controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import Entity.Oferta;
import Entity.OfertaDescuento;
import Repository.OfertaDescuentoRepository;
import Repository.OfertaRepository;


@Controller
public class OfertaController {
	
@Autowired
	
	private OfertaRepository ofertaRepository;

@Autowired
	private OfertaDescuentoRepository ofertaDescuentoRepository;
	
	
	@PostConstruct
	public void init(){
		Oferta oferta1 = new Oferta ("2x1",1234,"LLevate 2 y paga 1",2,1);
		ofertaRepository.save(oferta1);
		Oferta oferta2 = new Oferta ("3x2",1233,"LLevate 3 y paga 2",3,2);
		ofertaRepository.save(oferta2);
		Oferta oferta3 = new Oferta ("7x5",1235,"LLevate 7 y paga 5",7,5);
		ofertaRepository.save(oferta3);
		Oferta oferta4 = new Oferta ("10x7",1232,"LLevate 10 y paga 7",10,7);
		ofertaRepository.save(oferta4);
	
		
	
	}
	
	/*@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public String oferta (Model model ,@PathVariable Integer id){
	
	        Oferta oferta=  ofertaRepository.findOne(id);
	        model.addAttribute("oferta",oferta);
	        
	        return "ofertas";
	}*/
	
	
	@RequestMapping("/ofertas.html")
	public void tablon( Model model) {
		
		

		model.addAttribute("ofertas", ofertaRepository.findAll());
		model.addAttribute("ofertasDescuento", ofertaDescuentoRepository.findAll());
		

		
	}
	
	
	
	
	
	//metodo para crear una oferta desde el form
	@RequestMapping("/nuevaOferta")
	public String nuevaOferta(Model model, Oferta oferta) {

		ofertaRepository.save(oferta);
		return "ofertas.html";
		
		}
	
	//metodo para borrar una oferta desde el form
	@RequestMapping("/borrarPromocion")
	public String borrarPromocion(Model model, Oferta oferta) {
		
		
		
		Oferta promocion = ofertaRepository.findByCode(oferta.getCode());
		ofertaRepository.delete(promocion);
		
		OfertaDescuento promociondescuento = ofertaDescuentoRepository.findByCode(oferta.getCode());
		ofertaDescuentoRepository.delete(promociondescuento);
		
		
		return "ofertas.html";
		
		}
	
	
	
	
	/*@RequestMapping("/ofertas")
	public String verOfertas(Model model, @PathVariable long id) {
		
		Oferta oferta = ofertaRepository.findOne((int) id);

		model.addAttribute("oferta", oferta);

		return "ofertas";
	}*/
	
	
	
	

	

}
