package Security;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import Repository.UserRepositoryAuthProvider;

public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired 
	public UserRepositoryAuthProvider authenticationProvider;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		
		// PUBLIC PAGES
		
		http.authorizeRequests().antMatchers("/css/**","/js/**","img/**").permitAll();
		http.authorizeRequests().antMatchers("/").permitAll();
		http.authorizeRequests().antMatchers("/inicio_sesion").permitAll();
		http.authorizeRequests().antMatchers("/somos").permitAll();
		http.authorizeRequests().antMatchers("/index").permitAll();
		http.authorizeRequests().antMatchers("/inicio").permitAll();
		http.authorizeRequests().antMatchers("/registro").permitAll();
		
		
		// PRIVATE PAGES
		
		http.authorizeRequests().antMatchers("/perfil_ajeno","/validacion-pedidos").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/{id}/vinilo").hasAnyRole("USER");
		
		
		
		
		
		
		
		
		//LOGIN
		
		http.formLogin().loginPage("/inicio_sesion");
		http.formLogin().usernameParameter("username");
		http.formLogin().failureUrl("/loginError");
		
		//LOGOUT
		
		
		http.logout().logoutUrl("/inicio_sesion");
		http.logout().logoutSuccessUrl("/");
		
		//DISABLE CSRF
		
		http.csrf().disable();
		
		
		
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		
		auth.authenticationProvider(authenticationProvider);
		
		
		
		
		
		
		
		


		
		
	}
	

}
