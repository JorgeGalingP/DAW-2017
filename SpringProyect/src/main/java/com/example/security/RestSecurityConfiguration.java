package com.example.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.example.repository.UserRepositoryAuthenticationProvider;

@Configuration
@Order(1)
public class RestSecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Autowired 
	public UserRepositoryAuthenticationProvider userRepoAuthProvider;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		
		http.antMatcher("/api/**");
		
		 
		// URLS que necesitan autenticación
		
		http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/purchaseOrder").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/users/all").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE,"/api/**/**").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE,"/api/purchaseOrder/").hasAnyRole("USER");
		//http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/**/**").hasAnyRole("USER");
		//http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/ofertas/","/api/purchaseOrder/").hasAnyRole("ADMIN");
		//http.authorizeRequests().antMatchers(HttpMethod.PUT,"/api/**/**").hasAnyRole("ADMIN");
		//http.authorizeRequests().antMatchers(HttpMethod.PUT,"/api/users/").hasAnyRole("USER");
		
		
		
		//paginas publicas
		
		http.authorizeRequests().anyRequest().permitAll();
		
		
		// http
		
		http.httpBasic();
		
		http.logout().logoutSuccessHandler((rq,rs,a)->{ });
		
		http.csrf().disable();
		
	}
		
		
		
		@Override
		protected void configure( AuthenticationManagerBuilder auth) throws Exception{
			auth.authenticationProvider(userRepoAuthProvider);
		}
		
		
		
		
	
		
	

}  
