package appSpring.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import appSpring.entity.User;

public class UserRepositoryAuthenticationProvider implements AuthenticationProvider {
	
	@Autowired
	private UserRepository userRepository;
	

	@Override
	public Authentication authenticate(Authentication arg0) throws AuthenticationException {
		User user = userRepository.findByName(arg0.getName());
		if(user==null){
			throw new BadCredentialsException("User nort found");
		}
		String  password =(String) arg0.getCredentials();
		if(!new BCryptPasswordEncoder().matches(password, user.getPassword())){
			throw new BadCredentialsException("wrong password");
		}
		return  new UsernamePasswordAuthenticationToken(user.getName(),password);
		
		
		
		
	}

	@Override
	public boolean supports(Class<?> arg0) {
		// TODO Auto-generated method stub
		return true;
	}

}
