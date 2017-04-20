import{Injectable}from '@angular/core'
import{Http,Response}from'@angular/http'
import{Observable} from 'rxjs/Observable'
import'rxjs/Rx';
import{RESOURCE_URL}from "../util";

@Injectable()
export class ResourceService{

    constructor (private http:Http){

    }

    getResource(id:number){
        return this.http.get(RESOURCE_URL +'/'+id)
        .map(response => response.json())
        .catch(error=> Observable.throw('Sever error'))
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



}