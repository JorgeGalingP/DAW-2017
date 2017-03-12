package appSpring.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class WebController {
	
	@RequestMapping("/")
	public String index(){
		return"index";
	}
	@RequestMapping("/inicio_sesion")
	public String iniciosesion(){
		return"inicio_sesion";
	}	
	@RequestMapping("/index")
	public String index2 (){
		return"index";
	}
	@RequestMapping("/registro")
	public String registro(){
		return "registro";
			
	}

}
