import{Component} from '@angular/core';
import{OnInit} from'@angular/core';
import{Resource}  from'app/models/resource.model';
import{ResourceService} from 'app/service/resource.service';

@Component({
    selector:'app-index',
    templateUrl:'index.component.html'
})

export class IndexComponent implements OnInit{
  resources:Resource[] =[];
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

  constructor(private resourceService:ResourceService){

  }


  ngOnInit(){
    this.resourceService.getResources().subscribe(
      resources =>{
        this.resources = resources.content;
        console.log(this.resources);
      },
      error => console.log(error)

    );
    this.resourceService.getAmountResources().subscribe(
      nResources => this.nResources = nResources,
      error => console.error(error)
    );
    
  }
  loadMoreResources(){
    this.actualPage +=1;
    this.resourceService.getResourcesPag('?page='+ this.actualPage+'&size=10').subscribe(
      resources =>{
        let newResources = resources;
        for(let resource of newResources){
          this.resources.push(resource);

        }
        if(this.resources.length== this.nResources){
          this.loadMore = true;
        }

      },
      error => console.log(error)
    )
  }
}