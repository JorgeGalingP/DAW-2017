import{Component} from '@angular/core';
import {Comment} from'app/models/comment.model';


@Component({
    selector:'app-articulo',
    templateUrl:'articulo.component.html'
})

export class ArticuloComponent{
    
    comment:string;
    elems: string[]= [];
   


    addContent(){

        this.elems.push(this.comment);
        this.comment="";
       
    }
  
}