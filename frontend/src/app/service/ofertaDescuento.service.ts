import{Injectable}from '@angular/core';
import{Http} from'@angular/http';
import{Observable}from 'rxjs/Observable';
import'rxjs/Rx';
import{OFERTADESCUENTO_URL} from"../util";

@Injectable()
export class OfertaDescuentoService{

    authCreds:string;
    constructor(private http:Http){

    }
    setAuthHeaders(authCreds:string){
        this.authCreds= authCreds;
    }


    getAllOfertasDecuento(page:number){
        return this.http.get(OFERTADESCUENTO_URL+'?page='+page)
        .map(response=> response.json().content)
        .catch(error => Observable.throw('Server error'));
    }

    getOfertaDescuento(id:number){
        return this.http.get(OFERTADESCUENTO_URL+'/'+id)
        .map(response=>response.json().resources)
        .catch(error => Observable.throw('Server error'));

    }
}
