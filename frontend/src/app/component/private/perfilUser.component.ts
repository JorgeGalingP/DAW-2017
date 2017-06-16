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
}