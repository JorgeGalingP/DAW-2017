import{Component,OnInit}from'@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{UserService} from 'app/service/user.service';
import{User} from 'app/models/user.model';
import{Resource} from'app/models/resource.model';
import{ResourceService} from'app/service/resource.service';
import{Oferta} from'app/models/oferta.model';
import{OfertaService} from'app/service/oferta.service';
import{OfertaDescuento} from'app/models/ofertaDescuento.model';
import{OfertaDescuentoService} from'app/service/ofertaDescuento.service';

@Component({
    selector:'app-administrador',
    templateUrl:'administrador.component.html'
})

export class AdministradorComponent {
    newUser: boolean;
    newOfertaDescuento:boolean;
    ofertaDescuento:OfertaDescuento;
    newOferta:boolean;
    oferta:Oferta;
    newResource:boolean;
    resource:Resource;
    user:User;

    constructor(private router:Router,activatedRoute:ActivatedRoute,private userService:UserService,private resourceService:ResourceService,private ofertaService:OfertaService,private ofertaDescuentoService:OfertaDescuentoService){

        let id= activatedRoute.snapshot.params['id'];
        if(id){
            resourceService.getResource(id).subscribe(
                resource => this.resource= resource,
                error => console.error(error)
            );
            this.newResource= false;
        }else{
            this.resource={id:0,title:'',subtitle:'',interprete:'',fecha:'',estado:'',album:'',precio:0,codigo:0,img:''};
            this.newResource = true;
        }
        let i = activatedRoute.snapshot.params['id'];
        if(i){
            ofertaService.getOferta(i).subscribe(
                oferta => this.oferta = oferta,
                error => console.error(error)
            );
            this.newOferta = false;
        }else{
            this.oferta ={id:0,name:'',code:'',description:'',llevas:0,pagas:0,img:''};
            this.newOferta= true;
        }
        let ii = activatedRoute.snapshot.params['id'];
        if(ii){
            ofertaDescuentoService.getOfertaDescuento(id).subscribe(
                ofertaDescuento =>this.ofertaDescuento = ofertaDescuento,
                error => console.error(error)
            );
            this.newOfertaDescuento = false;

        }else{
            this.ofertaDescuento ={id:0,name:'',code:'',description:'',porcentaje:0,img:''};
            this.newOfertaDescuento = true;
        }

        let idUser = activatedRoute.snapshot.params['id'];
        if(idUser){
            userService.getUser(id).subscribe(
                user => this.user = user,
                error => console.error(error)
            );
            this.newUser= true;
        }else{
            this.user= {id:0,name:"",surname:"",pais:"",descripcion:"",telephone:"",password:"",postalCode:0};
            this.newUser= true;
        }






      /*  let name = activatedRoute.snapshot.params['id'];
        service.getUser(name).subscribe(
            user => this.user = user,
            error => console.error(error)
        )*/

    }

    cancel(){
        window.history.back();
    }
    save(){
        this.resourceService.addResource(this.resource).subscribe(
            resource =>{},
            error => console.error('Error creating new resource'+error)
        );
        window.history.back();
    }
    saveOferta(){
        this.ofertaService.addOferta(this.oferta).subscribe(
             oferta =>{},
             error => console.error('Error  creating new oferta'+error)
        );
        window.history.back();
    }
    saveOfertaDescuento(){
        this.ofertaDescuentoService.addOfertaDescuento(this.ofertaDescuento).subscribe(
            OfertaDescuento =>{},
            error => console.error('Error creating new ofertaDescuento')

        );
        window.history.back();

    }
    saveUser(){
        this.userService.addUser(this.user).subscribe(
            user =>{},
            error =>console.error('Error creating user')
        );
        window.history.back();
    }
   

 }