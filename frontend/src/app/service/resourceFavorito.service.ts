import{Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from'rxjs/Observable';
import'rxjs/Rx';
 
import {Resource} from 'app/models/resource.model';

const BASE_URL ='https://localhost:8443/api/favoritos/resources/'

@Injectable()
export class ResourceFavoritoService{
    constructor (private http:Http){}


    getResourcesFavoritos(){
        return this.http.get(BASE_URL)
            .map(response => response.json())
            .catch(error => this.handleError(error));

    }


    	private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}