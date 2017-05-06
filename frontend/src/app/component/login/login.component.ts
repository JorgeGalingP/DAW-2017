import{Component} from '@angular/core';
import {Router} from'@angular/router';
import{User} from 'app/models/user.model';
import {LoginService} from'app/service/login.service';
import {UserService} from 'app/service/user.service';



@Component({
    selector:'app-login',
    templateUrl:'login.component.html'
})

export class LoginComponent{
    user:User;
    tUser:string;

    constructor (private loginService:LoginService){

    }
    logIn(event:any, user:string,pass:string){
        event.preventDefault();
        this.loginService.logIn(user,pass).subscribe(
            u => console.log(u),
            error => alert('Invalid user or password')
        );
    }
    logOut(){
        this.loginService.logOut().subscribe(
            response =>{},
            error => console.log('Error when trying to log out'+ error)
        );
    }

 


}