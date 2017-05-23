import{Component} from '@angular/core';
import{OnInit} from'@angular/core';
import{Resource}  from'app/models/resource.model';
import{ResourceService} from 'app/service/resource.service';
import{UserService} from 'app/service/user.service';
import{ActivatedRoute} from'@angular/router';
import{User}from'../../models/user.model'

@Component({
    selector:'app-index',
    templateUrl:'index.component.html'
})

export class IndexComponent implements OnInit{
  resources:Resource[] =[];
  resource:Resource;
  private actualPage=0;
  private nResources=0;
  private loadMore=false;
  imagen1 = "src/assets/img/img7.jpg";
  imagen2 = "src/assets/img/img8.jpg";
  imagen3 = "src/assets/img/img9.jpg";
  precio="23.5";
  interprete="Michael Jackson";
  title="Thriller";
  subtitle="El mejor de todos los tiempos";

  vinilos:Resource[];
  vinilosPage:number;
  moreBooksActive:boolean;
  user:User;



  constructor(private resourceService:ResourceService,private userService:UserService,private activatedRoute:ActivatedRoute){
    this.vinilos =[];
    this.vinilosPage=0;
    this.moreBooksActive= false;
    this.addVinilos(true);

  }
  ngOnInit(){
    this.resourceService.getResource(this.activatedRoute.snapshot.params['id']).subscribe(
      resource => {
        this.resources = resource;
        console.log(this.resource.title)


  },
  error => console.log(error)

    );
    
  }

  addVinilos(userReq:boolean){
    this.resourceService.getAllResources('Vinilo',this.vinilosPage).subscribe(
      vinilos =>{
        if(Object.keys(vinilos).length===0){
          this.moreBooksActive = false;
        } else if(userReq){
          this.moreBooksActive = true;
          this.vinilosPage++;
          this.vinilos = this.vinilos.concat(vinilos);
          this.addVinilos(false);
        }
      },
      error => console.log('Fail')
    )
  }


 
}