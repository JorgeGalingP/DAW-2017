package com.example.Security;

import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure (HttpSecurity http) throws Exception{
		
		//public pages
		http.authorizeRequest().antMatchers("/").permitAll();
		http.authorizeRequest().antMatchers("/inicio_sesion").permitAll();
		http.authorizeRequest().antMatchers("/index").permitAll();
		http.authorizeRequest().antMatchers("/articulo").permitAll();
		http.authorizeRequest().antMatchers("/somos").permitAll();
		http.authorizeRequest().antMatchers("/registro").permitAll();
		
		//private pages
		http.authorizeRequest().antMatchers("/miperfil").hasAnyRole("USER");
		http.authorizeRequest().antMatchers("/ofertas").hasAnyRole("USER");
		http.authorizeRequest().antMatchers("/validacion-pedidos").hasAnyRole("USER");
		http.authorizeRequest().antMatchers("/carrito").hasAnyRole("USER");
		http.authorizeRequest().antMatchers("/perfil_ajeno").hasAnyRole("USER","ADMIN");
		
		//LOGIN
		http.formLogin().inicio_sesion("/inicio_sesion");
		http.formLogin().usernameParametrer("password");
		http.formLogin().defaultSuccessUrl("/");
		http.formLogin().failureURL("/inicio_sesion");
		
		//LOGOUT
		http.logout().logoutUrl("/index");
		http.logout().logoutSucessUrl("/");
		
		//Disable 	CSRF
		http.csrf().disable();
		
		
		
		
		
		
		
		
		
	}
	

}
