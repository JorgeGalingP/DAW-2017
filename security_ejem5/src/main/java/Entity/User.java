package Entity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@JsonIgnore
	private String passwordHash;

	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;
	private String name;
	private String username;
	private String street1;
	private String street2;
	private String country;
	private String city;
	private int postalCode;
	
	
	
	
	protected User(){}
	
	


	public User(String name,String password, String username,String roles, String street1, String street2, String country, String city,
			int postalCode) {
		
		this.name = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.username = username;
		this.street1 = street1;
		this.street2 = street2;
		this.country = country;
		this.city = city;
		this.postalCode = postalCode;
		this.roles = new ArrayList<>(Arrays.asList(roles));
	}




	public Integer getId() {
		return id;
	}




	public void setId(Integer id) {
		this.id = id;
	}




	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getStreet1() {
		return street1;
	}


	public void setStreet1(String street1) {
		this.street1 = street1;
	}


	public String getStreet2() {
		return street2;
	}


	public void setStreet2(String street2) {
		this.street2 = street2;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public int getPostalCode() {
		return postalCode;
	}


	public void setPostalCode(int postalCode) {
		this.postalCode = postalCode;
	}




	public String getPasswordHash() {
		return passwordHash;
	}




	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}




	public List<String> getRoles() {
		return roles;
	}




	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
	
	
	
	
	
	

}
