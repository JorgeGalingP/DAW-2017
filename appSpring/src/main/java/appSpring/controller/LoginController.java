package appSpring.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import appSpring.entity.User;
import appSpring.repository.UserRepository;

public class LoginController {
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping("/inicio_sesion")
	public String login (Model model,HttpServletRequest request){
		if(request.isUserInRole("ADMIN")||request.isUserInRole("USER"))
			return "redirect:/index";
		model.addAttribute("unloged",true);
		model.addAttribute("profile",true);
		
		return "login";
	}
		
	@RequestMapping("/loginError")
	public String loginError(Model model){
		model.addAttribute("unloged",true);
		model.addAttribute("loginError",true);
		model.addAttribute("profile",true);
		
		return "/inicio_sesion";
		
	}
	@RequestMapping("/registro")
	public String register(Model model ,HttpServletRequest request){
		
		if(request.isUserInRole("ADMIN")||request.isUserInRole("USER"))
			return"redirect:/index";
		model.addAttribute("unlogged",true);
		return "registro";
	}
	
	@RequestMapping("/registro/add")
	public String addUserAction(@RequestParam String name,@RequestParam String username ,@RequestParam String password,@RequestParam String street1,@RequestParam String street2,@RequestParam String Country,@RequestParam String city,@RequestParam int PostalCode){
		User user = new User(name,username,password,street1,street2,Country,city,PostalCode);
		try{
			userRepository.save(user);
			
		}catch(Exception e){
			return"redirect:/registerError";
		}
	
	return"redirect:/";
	}
	@RequestMapping("/registerError")
	public String registerError(Model model){
		model.addAttribute("unloged",true);
		model.addAttribute("alreadyReg",true);
		return "registro";
	}
	
	

}
