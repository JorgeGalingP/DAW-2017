package appSpring.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import appSpring.repository.UserRepositoryAuthenticationProvider;
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter   {
	
	@Autowired
	public UserRepositoryAuthenticationProvider authenticationProvider;
	
	@Override
	protected void configure (HttpSecurity http) throws Exception{
		
		//public pages
		http.authorizeRequests().antMatchers("/css/**","/js/**","/img/**").permitAll();
		http.authorizeRequests().antMatchers("/index").permitAll();
		http.authorizeRequests().antMatchers("/inicio_sesion").permitAll();
		http.authorizeRequests().antMatchers("/registro").permitAll();
		http.authorizeRequests().antMatchers("/articulo").permitAll();
		http.authorizeRequests().antMatchers("/somos").permitAll();
		http.authorizeRequests().antMatchers("/").permitAll();
		
		
		//private pages
		
		http.authorizeRequests().antMatchers("/carrito").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/mi_perfil").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/metodo_pago").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/validacion_pedidos").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/perfil_ajeno").hasAnyRole("ADMIN","USER");
		
		
		//login
		http.formLogin().loginPage("/inicio_sesion");
		http.formLogin().usernameParameter("username");
		http.formLogin().passwordParameter("password");
		http.formLogin().defaultSuccessUrl("/index");
		http.formLogin().failureUrl("/index");
		
		
		//DISABLE CSRF
		http.csrf().disable();
		
		
		
		
	}
	
	@Override 
	protected void configure (AuthenticationManagerBuilder auth) throws Exception{
		auth.authenticationProvider(authenticationProvider);
	}
	
	
	

}
