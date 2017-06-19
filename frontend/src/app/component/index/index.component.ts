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
  users:User[];
  resource:Resource;
  resourcePage:number;
  resources2:Resources[]=[];
  resources:Resources[]=[];
  private actualPage =0;
  private nResources =0;
  private loadMore = false;
 

  constructor(private router:Router, private resourceService:ResourceService,private loginService:LoginService, activatedRoute:ActivatedRoute, private userService:UserService){
   
   
    //this.addResources(true);

    let id = activatedRoute.snapshot.params['id'];
    resourceService.getResource(id).subscribe(
      resource => this.resource = resource,
      error => console.error(error)

    );
    this.resourceService.getRecommended().subscribe(
        resources2 => this.resources2 = resources2,
        error => console.error(error)
    );
   
     

   // this.resources = service.getResources();
  }
 
   ngOnInit(){
     this.resourceService.getResources().subscribe(
       resources => {
         this.resources = resources.content,
         console.log(this.resources)
   },
   error => console.log(error)
     );
     this.resourceService.getAmountResources().subscribe(
       nResources => this.nResources = nResources,
       error => console.error(error)
     )
   }

   loadMoreResources(){
     this.actualPage +=1;
     this.resourceService.getResourcesPag('?page='+ this.actualPage +'&size=10').subscribe(
       resources =>{
         let newResources = resources;
           for(let resource of newResources){
             this.resources.push(resource);
           }
           if(this.resources.length == this.nResources){
             this.loadMore = true;
           }
       },
       error=> console.log(error)
     );
   }
 
     

   removeResource(id:number){
     const okResponse = window.confirm("¿Quieres eliminar el vinilo?");
     if(okResponse){
       this.resourceService.removeResource(id).subscribe(
         resource=> this.router.navigate(['']),
         error=> console.error("error al eliminar el vinilo"+error)
       )
     }
   }
   anadir(){
     this.router.navigate(['/perfil', this.resource.id])
   }

  

 
}