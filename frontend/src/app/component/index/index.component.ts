import{Component} from '@angular/core';
import{OnInit} from'@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import{Resource}  from'app/models/resource.model';
import{ResourceService,Resources} from 'app/service/resource.service';
import{User}from'../../models/user.model';
import {UserService} from'app/service/user.service';
import{LoginService}from'app/service/login.service';


@Component({
    selector:'app-index',
    templateUrl:'index.component.html'
})

export class IndexComponent implements OnInit{
  user:User;
  resource:Resource;
  resourcePage:number;
  resources:Resources[];
  moreResourcesActive:boolean;

  constructor(private router:Router, private resourceService:ResourceService,private loginService:LoginService, activatedRoute:ActivatedRoute, private userService:UserService){
    this.resources=[];
    this.resourcePage=0;
    this.moreResourcesActive=false;

    this.addResources(true);

    let id = activatedRoute.snapshot.params['id'];
    resourceService.getResource(id).subscribe(
      resource => this.resource = resource,
      error => console.error(error)

    );
   
     

   // this.resources = service.getResources();
  }
 
   ngOnInit(){
     this.resourceService.getResources().subscribe(
       resources => this.resources = resources,
       error => console.log(error)
     )
     
   }
   addResources(userReq:boolean){
     this.resourceService.gettAllResources('Resource',this.resourcePage).subscribe(
       resources =>{
         if(Object.keys(resources).length===0){
           this.moreResourcesActive = false;
         }else if(userReq){
           this.moreResourcesActive=true;
           this.resourcePage++;
           this.resources = this.resources.concat(resources);
           this.addResources(false);
         }
       },
       error => console.log('Fail trying to get resources')
     );

     
   }
   removeResource(id:number){
     const okResponse = window.confirm("¿Quieres eliminar el vinilo?");
     if(okResponse){
       this.resourceService.removeResource(id).subscribe(
         _ => this.router.navigate(['']),
         error=> console.error("error al eliminar el vinilo"+error)
       )
     }
   }
   anadir(){
     this.router.navigate(['/perfil', this.resource.id])
   }

  

 
}