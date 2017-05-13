import{Component} from '@angular/core';
import {Router} from'@angular/router';
import{User} from 'app/models/user.model';
import {SessionService} from'../../service/session.service';
import {LoginService} from'../../service/login.service';
import {UserService} from'../../service/user.service';

@Component({
    selector:'login',
    templateUrl:'login.component.html'
})

export class LoginComponent{
    user:User;
    users:User[];
    typeUser:string;

    constructor(private loginService:LoginService,private userService:UserService,private router:Router){
        this.userService.getUsers().subscribe(
            users =>{
                this.users = users;
                console.log(this.users);
            },
            error => console.error(error)
        )
    }

    logIn(event: any,user:string,pass:string){
        event.preventDefault();
        this.loginService.logIn(user,pass).subscribe(
            u=> {console.log(u);
                this.router.navigate(['']);
            },
            error => alert('Invalid user or password')
        );
    }
    logOut(){
        this.loginService.logOut().subscribe(
            response=>{},
            error => console.log('Error when trying to log out:' + error )
        );
    }

    registry(name:string, username:string,email:string,description:string,pais:string,telefono:string,password:string,postalCode:number){
    
        if(this.typeUser="ADMIN"){
            this.user={name:'',email:'',pais:'',surname:'',descripcion:'',telephone:'',password:'',postalCode:0,}

        }else if(this.typeUser=="USER"){
            this.user={name:'',email:'',pais:'',surname:'',descripcion:'',telephone:'',password:'',postalCode:0,}
        }

        this.userService.createUser(this.user).subscribe(
            response =>{
                alert('cuenta creada')
            },
            error=> console.error('error')
        )



        }
        

    

        
}



   



