import{Component,OnInit}from'@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import {OfertaService} from 'app/service/ofertas.service';
import {Oferta} from 'app/models/oferta.model';
import {OfertaDescuentoService} from'app/service/ofertaDescuento.service';
import {OfertaDescuento} from'app/models/ofertaDescuento.model';


@Component({
    selector:'app-ofertas',
    templateUrl:'ofertas.component.html'
})

export class OfertasComponent implements OnInit { 
  ofertas: Oferta[];
  ofertasDescuento:OfertaDescuento[];

  constructor(private router:Router,private service:OfertaService,private ofertaDescuentoService:OfertaDescuentoService){
 }

  ngOnInit(){
      this.service.getOfertas().subscribe(
          ofertas => this.ofertas = ofertas,
          error => console.log(error)
      );
      this.ofertaDescuentoService.getOfertasDescuento().subscribe(
           ofertasDescuento => this.ofertasDescuento = ofertasDescuento,
           error => console.log(error)
      )
      
  }


}