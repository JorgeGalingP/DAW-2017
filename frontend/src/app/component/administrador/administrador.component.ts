import{Component,OnInit}from'@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{UserService} from 'app/service/user.service';
import{User} from 'app/models/user.model';

@Component({
    selector:'app-administrador',
    templateUrl:'administrador.component.html'
})

export class AdministradorComponent {
    user:User;

    constructor(private router:Router,activatedRoute:ActivatedRoute,private service:UserService){

        let name = activatedRoute.snapshot.params['id'];
        service.getUser(name).subscribe(
            user => this.user = user,
            error => console.error(error)
        )

    }
   

 }