import{Component} from '@angular/core';
import{OnInit} from'@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import{Resource}  from'app/models/resource.model';
import{ResourceService} from 'app/service/resource.service';
import{User}from'../../models/user.model'

@Component({
    selector:'app-index',
    templateUrl:'index.component.html'
})

export class IndexComponent implements OnInit{

  resources:Resource[];

  constructor(private router:Router, private service:ResourceService){
  }
 
   ngOnInit(){
     this.service.getResources().subscribe(
       resources => this.resources = resources,
       error => console.log(error)
     )
   }

  

 
}