import{Injectable}from '@angular/core'
import{Http,Response}from'@angular/http'
import{Observable} from 'rxjs/Observable'
import{Resource} from'app/models/resource.model';
import'rxjs/Rx';

//import {Resource} from"app/models/resource.model";
 const BASE_URL ="https://localhost:8443/api/resources/"

export class Resources{
    constructor(public id:number,public title:string,public subtitule:string,public interprete:string,public fecha:string,public estado:string,public precio: number, public código:number, public img:string ){}

}
@Injectable()
export class ResourceService{

    constructor (private http:Http){

    }

    getResources(){
        return this.http.get(BASE_URL)
           .map(response => response.json())
           .catch(error => this.handleError(error));
    }
    getResource(id:number){
        return this.http.get(BASE_URL+id)
           .map(response=> response.json())
           .catch(error=> this.handleError(error));
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}

    


}