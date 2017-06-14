import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/service/login.service';
import{ UserService} from'app/service/user.service';
import {User} from'app/models/user.model';
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user:User;
  users:User[];

  constructor(private loginService: LoginService,private router:Router,private userService:UserService)/*,private router:Router,private userService:UserService)*/ {
   this.userService.getUsers().subscribe(
     users =>{
       this.users = users;
       console.log(this.users);
     },
     error => console.error(error)
   )
   }

  logIn(event: any, user: string, pass: string) {

    event.preventDefault();

    this.loginService.logIn(user, pass).subscribe(
      u => {console.log(u),
        this.router.navigate(['/perfil']);
      },
      error => alert('Invalid user or password')
    );
  }

  logOut() {
    this.loginService.logOut().subscribe(
      response => { },
      error => console.log('Error when trying to log out: ' + error)
    );
  }

}
