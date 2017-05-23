import {Injectable} from'@angular/core'
import {Http,Response}from'@angular/http'
import {Observable}from 'rxjs/Observable'
import'rxjs';
import{OFERTA_URL} from"../util";

@Injectable()
export class OfertaService{

    authCreds:string;
    constructor(private http:Http){
    }
    setAuthHeaders(authCreds:string){
        this.authCreds = authCreds;
    }

    getAllOfertas(page:number){
        return this.http.get(OFERTA_URL +'?page='+page)
        .map(response =>response.json().content)
        .catch(error => Observable.throw('Server error'))
    }
    getOferta(id:number){
        return this.http.get(OFERTA_URL +'/'+id)
        .map(response => response.json().resources)
        ._catch(error => Observable.throw('Server error'))
    }
}


