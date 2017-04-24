import{Injectable}from '@angular/core';
import{Headers,Http}from '@angular/http';
import{Observable} from'rxjs/Observable';
import'rxjs/Rx';
import{USER_URL}from "../util";

import{User} from '../model/user.model';

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
    getUser(id:number){
        this.authCred = localStorage.getItem("creds");
        let headers:Headers = new Headers();
        headers.append('Authorization','Basic'+this.authCred);
        return this.http.get(USER_URL +'/'+id.toString(),{headers:headers})
        .map(response=>{
            this.user= response.json();
            return response.json();

        })
        .catch(error =>Observable.throw('Server error'))
    }
    deleteUser(id:number){
        this.authCred = localStorage.getItem("creds");
        let headers: Headers = new Headers();
        headers.append('Content-Type','application.json');
        headers.append('X.Requested-With','XMLHttpRequest');
        headers.append('Authorizacion','Basic'+this.authCred);
        return this.http.delete(USER_URL+'/'+id,{headers:headers})
        .map(response => response.json())
        .catch(error => Observable.throw('Server error'))
    }

    createUser(user:User){
        this.authCred= localStorage.getItem("creds");
        let body = JSON.stringify(user);
        let headers:Headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('X-Requested-With','XMLHttpRequest');
        headers.append('Authorizacion','Basic'+ this.authCred);
        return this.http.post(USER_URL,body,{headers:headers})
        .map(response=>response.json())
        .catch(error =>Observable.throw('Server error'))
    }


}

