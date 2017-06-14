import{Component,OnInit}from'@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import {OfertaService} from 'app/service/oferta.service';
import {Oferta} from 'app/models/oferta.model';
import {OfertaDescuentoService} from'app/service/ofertaDescuento.service';
import {OfertaDescuento} from'app/models/ofertaDescuento.model';
import {LoginService} from 'app/service/login.service';


@Component({
    selector:'app-ofertas',
    templateUrl:'ofertas.component.html'
})

export class OfertasComponent implements OnInit { 
  ofertas: Oferta[];
  ofertasDescuento:OfertaDescuento[];
  oferta:Oferta;

  constructor(private router:Router,private service:OfertaService,private ofertaDescuentoService:OfertaDescuentoService,activatedRoute:ActivatedRoute,private loginService:LoginService){
      let id = activatedRoute.snapshot.params['id'];
      service.getOferta(id).subscribe(
          oferta => this.oferta = oferta,
          error => console.error(error)
      );
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
  removeOferta(){
      let okResponse =window.confirm("Quieres eliminar la oferta");
      if(okResponse){
          this.service.removeOferta(this.oferta).subscribe(
              oferta => this.router.navigate(['/ofertas']),
              error => console.error(error)

          )
      }
  }


}