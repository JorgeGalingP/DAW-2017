package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.entity.Comment;
import com.example.entity.Resource;
import com.example.entity.User;
import com.example.repository.OfertaDescuentoRepository;
import com.example.repository.OfertaRepository;
import com.example.repository.ResourceRepository;
import com.example.repository.UserRepository;

@Controller
public class WebController {

	@Autowired
	private ResourceRepository repository;

	@Autowired

	private OfertaRepository ofertaRepository;

	@Autowired
	private OfertaDescuentoRepository ofertaDescuentoRepository;

	@Autowired
	private UserRepository userRepository;

	@RequestMapping("/")
	public String index(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		model.addAttribute("vinilos", repository.findAll());
		return "index";
	}

	@RequestMapping("/{id}")
	public String verArticulo(Model model, HttpServletRequest request, @PathVariable int id) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		Resource vinilo = repository.findOne(id);
		List <Comment> listaComentarios = vinilo.getComentarios();

		model.addAttribute("vinilo", vinilo);
		model.addAttribute("comentarios",listaComentarios);

		return "articulo";
	}

	@RequestMapping("/{id}/addCarrito")
	public String addCarrito(HttpServletRequest request, @PathVariable int id) {
		
		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {

			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			Resource vinilo = repository.findOne(id);
			List<Resource> carro = loggedUser.getCarrito();

			carro.add(vinilo);

			loggedUser.setCarrito(carro);
			
			
			int precioTotal = loggedUser.getPrecioCarrito();
			for(int i=0; carro.size() > i; i++){
				precioTotal = precioTotal + carro.get(i).getPrecio();
			}
			
			loggedUser.setPrecioCarrito(precioTotal);

			userRepository.save(loggedUser);

			return "redirect:/carrito";

	} else return "redirect:/login";
	}

	@RequestMapping("/login")
	public String inicioSesion(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		return "login";
	}

	@RequestMapping("/articulo")
	public String articulo(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		return ("articulo");
	}

	@RequestMapping("/carrito")
	public String carrito(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
		
		List<Resource> productos = loggedUser.getCarrito();
		
		model.addAttribute("productos", productos);
		model.addAttribute("precioTotal", loggedUser.getPrecioCarrito());
		
		return ("carrito");
	}


	@RequestMapping("/metodo-pago")
	public String MetodoPago(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		return ("metodo-pago");
	}

	@RequestMapping("/miperfil")
	public String MiPerfil(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		return ("miperfil");
	}

	@RequestMapping("/ofertas")
	public String Ofertas(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		model.addAttribute("ofertas", ofertaRepository.findAll());
		model.addAttribute("ofertasDescuento", ofertaDescuentoRepository.findAll());
		return ("ofertas");
	}

	@RequestMapping("/administrador")
	public String Administrador(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		model.addAttribute("vinilos", repository.findAll());
		model.addAttribute("ofertas", ofertaRepository.findAll());
		model.addAttribute("ofertasDescuento", ofertaDescuentoRepository.findAll());
		model.addAttribute("users", userRepository.findAll());

		return ("administrador");
	}

	@RequestMapping("/registro")
	public String registro(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		return ("registro");

	}

	@RequestMapping("/somos")
	public String somos(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		return "somos";
	}

	@RequestMapping("/validacion-pedidos")
	public String validacion(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		return "validacion";
	}
	
	@RequestMapping("/metododepago")
	public String metodoPago(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);

		return "metodo-pago";
	}

	@RequestMapping("/deleteUser")
	public String BorrarUser(HttpServletRequest request) {

		User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
		userRepository.delete(loggedUser.getId());

		return "login";

	}
	
	@RequestMapping( value = "/{id}/addComment", method = RequestMethod.POST)
	public String addComment(HttpServletRequest request, @PathVariable int id, @RequestParam String message, @RequestParam String asunto) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {

			
			Resource vinilo = repository.findOne(id);
			
			Comment com = new Comment(message, asunto);

			vinilo.getComentarios().add(com);


			repository.save(vinilo);

			return "redirect:/{id}";

		} else
			return "redirect:/login";
	}
	
	@RequestMapping("/aplicarCodigo")
	public String AplicarCodigo(Model model, HttpServletRequest request, @RequestParam String code,
			RedirectAttributes redirectAttrs) {
		
		redirectAttrs.addFlashAttribute("error", "entra");
		
		return "redirect:/carrito ";
		
			
	}
	
	/*@RequestMapping("/aplicarCodigo")
	public String AplicarCodigo(Model model, HttpServletRequest request, @RequestParam String codigo,
			RedirectAttributes redirectAttrs) {

		User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());

		List<Oferta> ofertas1 = ofertaRepository.findAll();
		List<OfertaDescuento> ofertas2 = ofertaDescuentoRepository.findAll();
		
		 int longitud = ofertas1.size();
		 int longitud2 = ofertas2.size();
		 

		for (int i = 0; longitud <= i; i++) {
			if (codigo == ofertas1.get(i).getCode()) {
				// aplicar codigo de oferta1
				if (loggedUser.getCarrito().size() == ofertas1.get(i).getLlevas()) {
					// aplicar
					redirectAttrs.addFlashAttribute("error", "vale");
					return "redirect:/carrito";
				} else {
					redirectAttrs.addFlashAttribute("error", "El código no es aplicable");
					return "redirect:/carrito";

				}

			} else {
				for (int j = 0; longitud2 <= j; j++) {
					if (codigo == ofertas2.get(j).getCode()) {
						// aplicar codigo de oferta2
						redirectAttrs.addFlashAttribute("error", "vale");
						return "redirect:/carrito";

					} else {

						redirectAttrs.addFlashAttribute("error", "El código no existe");
						return "redirect:/carrito";
					}
				}
			}

		}
		redirectAttrs.addFlashAttribute("error", "No entra");
		return "redirect:/ofertas ";
	}*/

}
