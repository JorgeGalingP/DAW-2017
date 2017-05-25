import{Component,OnInit}from'@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import {OfertaService} from 'app/service/ofertas.service';
import {Oferta} from 'app/models/oferta.model';


@Component({
    selector:'app-ofertas',
    templateUrl:'ofertas.component.html'
})

export class OfertasComponent implements OnInit { 
  ofertas: Oferta[];

  constructor(private router:Router,private service:OfertaService){
 }

  ngOnInit(){
      this.service.getOfertas().subscribe(
          ofertas => this.ofertas = ofertas,
          error => console.log(error)
      );
  }


}