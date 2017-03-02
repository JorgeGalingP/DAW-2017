package es.urjc.code.daw.Entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vinilo {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String Nombre;
	private String Interprete;
	private String fecha;
	private String album;
	private int precio;
	private int Codigo;
	

	protected Vinilo() {
		// Used by SpringData
	}

	public Vinilo (String Nombre, String Interprete, String fecha,String album,int precio,int Codigo) {
		this.Nombre= Nombre;
		this.Interprete=Interprete;
		this.fecha=fecha;
		this.album=album;
		this.precio= precio;
		this.Codigo=Codigo;
		
	}

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}

	public String getInterprete() {
		return Interprete;
	}

	public void setInterprete(String interprete) {
		Interprete = interprete;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getAlbum() {
		return album;
	}

	public void setAlbum(String album) {
		this.album = album;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}

	public int getCodigo() {
		return Codigo;
	}

	public void setCodigo(int codigo) {
		Codigo = codigo;
	}

	@Override
	public String toString() {
		return String.format("Customer[id=%d, firstName='%s', lastName='%s']",
				id, Nombre, Interprete,fecha,album,precio,Codigo);
	}
}