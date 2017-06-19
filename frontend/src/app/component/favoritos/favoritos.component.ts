import{Component,EventEmitter,Output} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{ResourceService,Resources} from'app/service/resource.service';
import{Resource} from 'app/models/resource.model';
import{LoginService} from'app/service/login.service';
import{UserService} from'app/service/user.service';
import{User}from'app/models/user.model';
import {BrowserModule,DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
    selector:'app-favoritos',
    templateUrl:'favoritos.component.html'
})

export class FavoritosComponent{ 
     resources:Resources[]=[];
    user:User;
    resource:Resource;



    constructor(private router:Router, private resourceService:ResourceService,private loginService:LoginService, activatedRoute:ActivatedRoute, private userService:UserService){
   
   
    //this.addResources(true);

   /* let id = activatedRoute.snapshot.params['id'];
    resourceService.getResource(id).subscribe(
      resource => this.resource = resource,
      error => console.error(error)

    );*/
    this.resourceService.getFavoritos().subscribe(
        resources => this.resources = resources,
        error => console.error(error)
    );
    }
   




}