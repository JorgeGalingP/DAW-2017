import{Component,EventEmitter,Output} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{ResourceService,Resources} from'app/service/resource.service';
import{Resource} from 'app/models/resource.model';
import{LoginService} from'app/service/login.service';
import{UserService} from'app/service/user.service';
import{User}from'app/models/user.model';
import {BrowserModule,DomSanitizer, SafeUrl} from '@angular/platform-browser';
@Component({
    selector:'app-articulo',
    templateUrl:'articulo.component.html'
})

export class ArticuloComponent {
  
    resources:Resources[]=[];
    user:User;
    resource:Resource;
    inputContent1:string;
    inputContent2:string;
    asunto:string[]=[];
    comentarios:string[]=[];
    thumbnailSafe:SafeUrl;
    buttonFav:boolean;
    thumbailA:String ='<div class ="thumbail-resource" style="background:url(';
    thumbailB:String =') no repeat 50% fixed;background-size:100%;"></div>';

    constructor(private router:Router,private sanitizer: DomSanitizer ,activatedRoute:ActivatedRoute,private service:ResourceService,private loginService:LoginService,private userService:UserService, private resourceService:ResourceService){

     let id = activatedRoute.params.subscribe(params =>{
         this.resourceService.getResource(params['id']).subscribe(
             resource =>{this.resource = resource;
                 
                         
            },
            error => console.error(error)
         );
     });
     }
    

       /*  if(this.loginService.isLogged){
             this.userService.getUserId(this.loginService.user.id).subscribe(
                 user =>{
                     this.user = user;
                     this.buttonFav= this.isFavourite();
                 },
                 error => console.error(error)
             );
         }
     });

        
    }

 addCarrito(){
     this.user.carrito.push(this.resource);
     console.log(this.user)
     console.log(this.user.carrito);
 }*/
 






    //  let id = activatedRoute.snapshot.params['id'];
    //  this.resource= service.getResource(id);
     /*   let id = activatedRoute.snapshot.params['id'];
        service.getResource(id).subscribe(
            resource=> this.resource = resource,
            error => console.error(error)
        );
         
    }*/
   /* addContent(){
        this.asunto.push(this.inputContent1);
        this.comentarios.push(this.inputContent2);
        this.inputContent1="";
        this.inputContent2="";
    }
    goToLogin(){
        this.router.navigate(['/login']);

    }*/
    /*removeResource(){
        let okResponse =window.confirm("Quieres eliminar el vinilo");
        if(okResponse){
            this.service.removeResource(this.resource).subscribe(
                resource => this.router.navigate(['/index']),
                error => console.error(error)
            )
        }*/
    


}





