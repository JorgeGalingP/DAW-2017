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
    setAuthHeaders(authCred:string){
        this.authCred = authCred
    }

    getUserCompleted(){
        return this.user
    }
    getUsers(page:number){
        this.authCred = localStorage.getItem("creds");
        let headers:Headers = new Headers();
        headers.append('Authorization','Basic'+this.authCred);
        return this.http.get(USER_URL +'?page ='+page,{headers:headers})
        .map(response=>response.json().content)
        ._catch(error => Observable.throw('Serve error'))

    }
    


}

