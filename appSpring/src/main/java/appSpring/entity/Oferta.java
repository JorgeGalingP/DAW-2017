package appSpring.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Oferta {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Integer id;
	private  String name;
	private int code;
	private String description;
	private int llevas;
	private int pagas;
	
	
	protected Oferta(){
		
	}
	


	public Oferta(String name, int code, String description, int llevas, int pagas) {
		
		this.name = name;
		this.code = code;
		this.description = description;
		this.llevas=llevas;
		this.pagas=pagas;
		
	}
	



	public int getLlevas() {
		return llevas;
	}



	public void setLlevas(int llevas) {
		this.llevas = llevas;
	}



	public int getPagas() {
		return pagas;
	}



	public void setPagas(int pagas) {
		this.pagas = pagas;
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


	public int getCode() {
		return code;
	}


	public void setCode(int code) {
		this.code = code;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	
	
	

}
