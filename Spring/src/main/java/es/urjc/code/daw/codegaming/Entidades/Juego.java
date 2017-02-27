package es.urjc.code.daw.codegaming.Entidades;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.codegaming.user.User.Basico;

@Entity
public class Vinilo {
	
	public interface Basico{}
	
    @Id
    @JsonView(Basico.class)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @JsonView(Basico.class)
    private String titulo;
    
    @JsonView(Basico.class)
    private String subtitulo;
    
    @JsonView(Basico.class)
    private String interprete;
    
    @JsonView(Basico.class)
    private String fecha;
    
    @JsonView(Basico.class)
    private String estado;
    
    @JsonView(Basico.class)
    private String album;
    
    @JsonView(Basico.class)
    private Float precio;
    
    @JsonIgnore
    private Float codigo;
    private int cantidad;
    
    @JsonIgnore
    private Float valoracion;
    
    @JsonView(Basico.class)
    private String imagen;
    
    protected Vinilo(){}
    
    public Vinilo(String tituloc, String subtituloc, String interpretec, String fechac, String estadoc, String albumc, float precioc, float valoracionc, String imagenc){
        
        this.titulo = tituloc;
        this.subtitulo = subtituloc;
        this.interprete = interpretec;
        this.fecha = fechac;
        this.estado = estadoc;
        this.album = albumc;
        this.precio = precioc;
        this.codigo = codigoc;
        this.valoracion = valoracionc;
        this.imagen = imagenc;
        
    }

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getSubtitulo() {
		return subtitulo;
	}

	public void setSubtitulo(String subtitulo) {
		this.subtitulo = subtitulo;
	}

	public String getInterprete() {
		return interprete;
	}

	public void setInterprete(String interprete) {
		this.interprete = interprete;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getAlbum() {
		return album;
	}

	public void setAlbum(String album) {
		this.album = album;
	}

	public Float getPrecio() {
		return precio;
	}

	public void setPrecio(Float precio) {
		this.precio = precio;
	}

	public Float getCodigo() {
		return codigo;
	}

	public void setCodigo(Float codigo) {
		this.codigo = codigo;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public Float getValoracion() {
		return valoracion;
	}

	public void setValoracion(Float valoracion) {
		this.valoracion = valoracion;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
    
    
    
    /* public void addRecomendacion(Recomendacion recom){
        this.recomendacion.add(recom);
    }

	public boolean tieneOferta(Oferta oferta){
		for(Oferta ofertat:this.getOfertas()){
			if (ofertat.getId()==oferta.getId()){
				return true;
			}
		}
		return false;
	}
	
	public void addOferta(Oferta oferta){
		this.ofertas.add(oferta);
	}
	public void borrarOferta(Oferta oferta){
		System.out.println(oferta.getNombre());
		for(Oferta of:this.ofertas){
			System.out.println(of.getNombre());
			if(of.getId()==oferta.getId()){
				this.ofertas.remove(of);
				break;
			}
		}
	}

	public List<Oferta> getOfertas() {
		return ofertas;
	}

	public List<Plataforma> getPlataforma() {
		return plataforma;
	}


	public List<Recomendacion> getRecomendacion() {
		return recomendacion;
	} */
    
    
}