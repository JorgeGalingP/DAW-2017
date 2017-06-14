import{Component}from'@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import{BrowserModule} from '@angular/platform-browser';
import {User} from'app/models/user.model';
import {UserService} from'app/service/user.service';


@Component({
    selector:'app-perfil',
    templateUrl:'perfil.component.html'
})

export class PerfilComponent{


    user:User;

    constructor(private router:Router,activatedRoute:ActivatedRoute,private usersService:UserService){
        let id= activatedRoute.params.subscribe(params=>{
            let id = activatedRoute.snapshot.params['id'];
            this.usersService.getUserId(id).subscribe(
                user=>{
                    this.user=user;
                    console.log(this.user);
                },
                error=>console.error(error)
            );
        });
    }




 }