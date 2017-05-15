import{Injectable}from '@angular/core'
import{Http,Response,Headers}from'@angular/http'
import{Observable} from 'rxjs/Observable'
import'rxjs/Rx';
import{RESOURCE_URL}from "../util";
import {Resource} from"app/models/resource.model";

@Injectable()
export class ResourceService{
    authCred:string;

    constructor (private http:Http){

    }
    setAuthHeaders(authCreds:string){
        this.authCred = authCreds;
    }
    getResources(){
        return this.http.get(RESOURCE_URL)
        .map(response => response.json())
        .catch(error => Observable.throw('error'))
    }

    getResource(id:number){
        return this.http.get(RESOURCE_URL +'/'+id)
        .map(response => response.json())
        .catch(error=> Observable.throw('Sever error'))
    }


    
    getResourcesPag(page?:String){
        return this.http.get(RESOURCE_URL +page).map(
            response => response.json().content

        )._catch(error => Observable.throw('Server error'))

    }
    getAmountResources(){
        return this.http.get(RESOURCE_URL+'').map(
            response => response.json().totalElements
        ).catch(error => Observable.throw('Error:resource not found'));
        
    }
    getAllResources(type:string,page:number){
        return this.http.get(RESOURCE_URL+'?type='+type+'&page'+page)
         .map(response =>response.json().content)
         .catch(error =>Observable.throw('Server error'))
    }
    searchResources(name:string,page:number){
        return this.http.get(RESOURCE_URL +'?name='+name+'&page='+page)
        .map(response => response.json().content)
        .catch(error => Observable.throw('Server error'))
    }
    createResource(resource:Resource){
        let body = JSON.stringify(resource);

        this.authCred = localStorage.getItem("creds");

        let headers :Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With','XMLHttpRequest');
        headers.append('Authorizacion','Basic'+ this.authCred);
        return this.http.post(RESOURCE_URL ,body,{ headers : headers})
        .map(response => response.json())
        .catch(error => Observable.throw('Server error'))

    }



}