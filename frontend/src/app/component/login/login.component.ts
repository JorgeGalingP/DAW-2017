import{Component} from '@angular/core';
import {Router} from'@angular/router';
import{User} from 'app/models/user.model';
import {SessionService} from'../../service/session.service';

@Component({
    selector:'app-login',
    templateUrl:'login.component.html'
})

export class LoginComponent{

    user:User;
    id:number;
     
    constructor(private sessionService:SessionService, private router:Router){

    }
    logIn(username:string,password:string){
        this.sessionService.logIn(username,password).subscribe(
            user =>{
                this.user = user;
                this.router.navigate(['/']);
            },
            error => console.log("Fail trying to login")
        );
    }
  




}