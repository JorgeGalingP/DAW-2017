import{Component,EventEmitter,Output,OnInit} from '@angular/core';
import {ResourceService} from'app/services/resource.service';
import {Resource} from'app/models/resource.model';
import {Router,ActivatedRoute} from'@angular/router';
@Component({
    selector:'app-index',
    templateUrl:'index.component.html'
})

export class IndexComponent implements OnInit{ 

    resources:Resource[];

    constructor(private router:Router,private service:ResourceService){}

    ngOnInit(){
        this.service.getResources().subscribe(
            resources => this.resources = resources,
            error => console.log(error)

        );
    }

    
}
