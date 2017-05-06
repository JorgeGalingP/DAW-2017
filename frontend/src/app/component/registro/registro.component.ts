import{Component,EventEmitter,Output} from '@angular/core';
import {Router} from'@angular/router';
import {LoginService} from '../../service/login.service';
import{User}from'app/models/user.model';
import {SessionService} from'../../service/session.service';



@Component({
    selector:'app-registro',
    templateUrl:'registro.component.html'
})

export class RegistroComponent{
    user:User;

    constructor (private sessionService:SessionService,private router:Router){
        
    }


    register(username:string,name:string,email:string,country:string,description:string,postalCode:number,telephone:string,pass:string){
        
        this.sessionService.register(name,username,email,country,description,telephone,pass,postalCode).subscribe(
            user =>{this.router.navigate(['/index'])},
            error => console.log("Fail trying to register new account")
        );
    }

  
}
    



            
    



