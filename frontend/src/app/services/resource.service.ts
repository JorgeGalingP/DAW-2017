import{Injectable} from '@angular/core';
import{Resource} from"app/models/resource.model";
import {Http} from'@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL ='https://localhost:8443/api/resources/'
@Injectable()
export class ResourceService{

    constructor(private http:Http){}

    getResources(){
        return this.http.get(BASE_URL)
        .map(response => response.json())
        ._catch(error =>this.handleError(error) )
    
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}





}