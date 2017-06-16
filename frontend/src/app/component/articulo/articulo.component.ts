import{Component,EventEmitter,Output} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{ResourceService,Resources} from'app/service/resource.service';
import{Resource} from 'app/models/resource.model';
import{LoginService} from'app/service/login.service';
import{UserService} from'app/service/user.service';
import{User}from'app/models/user.model';
@Component({
    selector:'app-articulo',
    templateUrl:'articulo.component.html'
})

export class ArticuloComponent {
    user:User;
    resource:Resource;
    inputContent1:string;
    inputContent2:string;
    asunto:string[]=[];
    comentarios:string[]=[];

    constructor(private router:Router,activatedRoute:ActivatedRoute,private service:ResourceService,private loginService:LoginService,private userService:UserService){
    //  let id = activatedRoute.snapshot.params['id'];
    //  this.resource= service.getResource(id);
        let id = activatedRoute.snapshot.params['id'];
        service.getResource(id).subscribe(
            resource=> this.resource = resource,
            error => console.error(error)
        );
         
    }
    addContent(){
        this.asunto.push(this.inputContent1);
        this.comentarios.push(this.inputContent2);
        this.inputContent1="";
        this.inputContent2="";
    }
    /*removeResource(){
        let okResponse =window.confirm("Quieres eliminar el vinilo");
        if(okResponse){
            this.service.removeResource(this.resource).subscribe(
                resource => this.router.navigate(['/index']),
                error => console.error(error)
            )
        }
    }*/







}