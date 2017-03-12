package appSpring.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OfertaDescuento {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Integer id;
	private  String name;
	private int code;
	private String description;
	private int porcentaje;
	
	
	protected OfertaDescuento(){
		
	}
	


	public OfertaDescuento(String name, int code, String description, int porcentaje) {
		
		this.name = name;
		this.code = code;
		this.description = description;
		this.porcentaje=porcentaje;
		
	}
	



	



	public int getPorcentaje() {
		return porcentaje;
	}



	public void setPorcentaje(int porcentaje) {
		this.porcentaje = porcentaje;
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

