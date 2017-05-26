import{Component}from'@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import{ResourceService} from'app/service/resource.service';
import{Resource} from'app/models/resource.model';

@Component({
    selector:'app-carrito',
    templateUrl:'carrito.component.html'
})

export class CarritoComponent{

    resource:Resource;

    constructor(private router:Router,activatedRouter:ActivatedRoute,service:ResourceService){

        let id = activatedRouter.snapshot.params['id'];
        service.getResource(id).subscribe(
            resource => this.resource = resource,
            error => console.error(error)
        );
    }
 }