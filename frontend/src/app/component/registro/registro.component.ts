import{Component,EventEmitter,Output} from '@angular/core';
import {Router} from'@angular/router';
import {SessionService} from '../../service/session.service';


@Component({
    selector:'app-registro',
    templateUrl:'registro.component.html'
})

export class RegistroComponent{

    constructor(private sessionService:SessionService,private router:Router){

    }
    register(name:string,surname:string,pais:string,descripcion:string,telefono:string,password:string,postalCode:number,email:string){


        this.sessionService.register(name,surname,email,pais,descripcion,telefono,password,postalCode).subscribe(
            user =>{this.router.navigate(['/index'])},
            error => console.log("Fail trying to register new account")



            
        );


    }
}
    



            
    



