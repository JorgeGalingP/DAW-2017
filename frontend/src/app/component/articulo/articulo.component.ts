import{Component,EventEmitter,Output} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{ResourceService,Resources} from'app/service/resource.service';

@Component({
    selector:'app-articulo',
    templateUrl:'articulo.component.html'
})

export class ArticuloComponent{

    resource:Resources;

    constructor(private router:Router,activatedRoute:ActivatedRoute,service:ResourceService){
      let id = activatedRoute.snapshot.params['id'];
      this.resource= service.getResource(id);

    }

    


}