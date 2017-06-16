import{Component,EventEmitter,Output} from '@angular/core';
import{LoginService} from "app/service/login.service";
import{UserService} from 'app/service/user.service';
import{User} from'app/models/user.model';
import{Router, ActivatedRoute} from'@angular/router';
@Component({
    selector:'app-header',
    templateUrl:'header.component.html'
})

export class HeaderComponent{ user ='Jorge';

users:User[];


    constructor(private router:Router,private loginService:LoginService,private service:UserService){}

    ngOnInit(){
        this.service.getUsers().subscribe(
            users => this.users = users,
            error => console.log(error)
        );
    }




}