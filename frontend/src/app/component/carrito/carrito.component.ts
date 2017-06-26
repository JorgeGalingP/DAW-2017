import{Component,OnInit}from'@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import{ResourceService} from'app/service/resource.service';
import{Resource} from'app/models/resource.model';
import {PurchaseService} from'app/service/purchase.service';
import{PurchaseOrder} from'app/models/purchaseOrder.model';


@Component({
    selector:'app-carrito',
    templateUrl:'carrito.component.html'
})

export class CarritoComponent implements OnInit{
    purchases:PurchaseOrder[]

    resource:Resource;

    constructor(private router:Router,activatedRouter:ActivatedRoute, private service:ResourceService,private purchaseService:PurchaseService){

        const id = activatedRouter.snapshot.params['id'];
        service.getResource(id).subscribe(
            resource => this.resource = resource,
            error => console.error(error)
        );

    }

    ngOnInit(){
        this.purchaseService.getPurchases().subscribe(
            purchases => this.purchases = purchases,
            error => console.log(error)
        );
    }
     terminarCompra() {
    this.router.navigate(['/perfil']);
  }


   /* removeResource(){
        let okResponse = window.confirm("¿Esta seguro de eliminar el articulo?");
        if(okResponse){
            this.service.removeResource(this.resource).subscribe(
                _ => this.router.navigate(['/articulo']),
                error => console.error(error)
            )
            
        }
    }*/
 }