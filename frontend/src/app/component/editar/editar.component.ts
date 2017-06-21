import{Component,OnInit}from'@angular/core';
import {Router, ActivatedRoute} from'@angular/router';
import {Resource} from'app/models/resource.model';
import {ResourceService} from'app/service/resource.service';
import {LoginService} from 'app/service/login.service';
import {UserService} from 'app/service/user.service';
import {User} from'app/models/user.model';
@Component({
    selector:'app-editar',
    templateUrl:'editar.component.html'
})

export class EditarComponent{
    newResource: boolean;
    resource:Resource;

    constructor(private router:Router,activatedRoute:ActivatedRoute,private resourceService:ResourceService){
        const id = activatedRoute.snapshot.params['id'];
        if(id){
            resourceService.getResource(id).subscribe(
                resource => this.resource=resource,
                error => console.error(error)
            );
            this.newResource = false;
        }else{
            this.resource ={id:0,title:'',subtitle:'',interprete:'',fecha:'',estado:'',album:'',precio:0,codigo:0,img:''};
            this.newResource = true;

        }
    }
    cancel(){
        window.history.back();
    }
    save(){
        this.resourceService.saveBook(this.resource).subscribe(
            resource =>{},
            error => console.error('Error')
        );
        window.history.back();

    }






}
   /* eventoNewTitle:any;
    editar:boolean;
    user:User;
    resource:Resource
    name: string="";

    
   constructor(activatedRoute:ActivatedRoute,private router:Router,private  service:ResourceService,private loginService:LoginService,private userService:UserService, private resourceService:ResourceService){

     let id  = activatedRoute.snapshot.params['id'];
     if(id){
         this.editar=true;
         this.resourceService.getResource(id).subscribe(
             resource =>{
                 this.resource = resource;
             },
             error => console.error(error)
         );
     }
   
 }

 editarVinilo(){
     this.resource.title = this.name;
     this.resourceService.updateResource(this.resource).subscribe(
         resource =>{

         }
     )
 }
 saveEvent(event:any){
     this.eventoNewTitle= event;
 }

 ngOnInit(){

 }*/

