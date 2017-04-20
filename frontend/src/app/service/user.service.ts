import{Injectable}from '@angular/core';
import{Headers,Http}from '@angular/http';
import{Observable} from'rxjs/Observable';
import'rxjs/Rx';
import{USER_URL}from "../util";

import{User} from '../models/user.model';

@Injectable()
export class UserService{
    user:User;
    users:User[];
    authCred:string;


    constructor(private http:Http){
        
    }


}


