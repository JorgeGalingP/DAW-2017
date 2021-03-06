import{Component}from'@angular/core';
import{Router,ActivatedRoute} from'@angular/router';
import{BrowserModule} from '@angular/platform-browser';
import {User} from'app/models/user.model';
import {UserService} from'app/service/user.service';
import {ResourceService} from'app/service/resource.service';
import {LoginService} from'app/service/login.service';
import {PurchaseService} from'app/service/purchase.service'
@Component({
    selector:'app-perfilUser',
    templateUrl:'perfilUser.component.html'
})

export class PerfilUserComponent{
    user:User;
    users:User[];


    constructor(private router:Router, activatedRoute:ActivatedRoute, private userService:UserService,private loginService:LoginService, private purchaseService: PurchaseService){

        let id = activatedRoute.params.subscribe(params =>{

            let id = activatedRoute.snapshot.params['id'];
            this.userService.getUserId(id).subscribe(
                user => {
                    this.user = user;
                    console.log(this.user);
                },
                error => console.error(error)
            );
        });
       
    }




     ngOnInit(){
        this.userService.getUsers().subscribe(
            users => this.users = users,
            error => console.log(error)
        );
}
}