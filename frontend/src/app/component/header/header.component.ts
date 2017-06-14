import{Component,EventEmitter,Output} from '@angular/core';
import{LoginService} from "app/service/login.service";

@Component({
    selector:'app-header',
    templateUrl:'header.component.html'
})

export class HeaderComponent{ user ='Jorge';


    constructor(private loginService:LoginService){}




}