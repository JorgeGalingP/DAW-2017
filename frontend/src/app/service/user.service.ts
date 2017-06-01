import {Injectable} from'@angular/core';
import {Http,Response,Headers,RequestOptions} from'@angular/http';
import {Observable} from'rxjs/Observable';
import 'rxjs/Rx';

import {User} from'app/models/user.model';

const BASE_URL ="https://localhost:8443/api/users/user1"

@Injectable()
export class UserService{
     constructor(private http:Http){}

    getUsers(){
        return this.http.get(BASE_URL,{withCredentials:true})
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }
    getUser(name:string){
        return this.http.get(BASE_URL+name)
        .map(response => response.json())
        .catch(error =>this.handleError(error))
    }



    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}




}