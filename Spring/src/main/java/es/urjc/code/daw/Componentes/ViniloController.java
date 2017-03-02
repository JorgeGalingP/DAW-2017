package es.urjc.code.daw.Componentes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.ViniloRepository;
import es.urjc.code.daw.Entidades.Vinilo;

@Controller
public class ViniloController implements CommandLineRunner {

	@Autowired
	private ViniloRepository repository;
	
	@Override
	public void run(String... args) throws Exception {
		
		 // save a couple of customers
         repository.save(new Vinilo("Jack", "Enero","bueno","u2",7,9));
         repository.save(new Vinilo("U2", "Enero","bueno","u2",7,9));
         
         List<Vinilo> vinilos = repository.findAll();
         System.out.println("Customes");
         for (Vinilo vinilo: vinilos){
        	 System.out.println(vinilo);
        	 
         }
        
	}
}