import{Injectable} from'@angular/core';
import{Http} from'@angular/http';
import {Observable} from'rxjs/Observable';
import'rxjs/Rx';

import{PurchaseOrder} from 'app/models/purchaseOrder.model';
const BASE_URL ="https://localhost:8443/api/purchaseOrder/";


@Injectable()
export class PurchaseService{
    constructor(private http:Http){}

    getPurchases(){
        return this.http.get(BASE_URL)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }

    getPurchase(code:number|string){
        return this.http.get(BASE_URL +code)
           .map(response => response.json())
           .catch(error => this.handleError(error))
    }
    addPurchase(purchase:PurchaseOrder){
        return this.http.post(BASE_URL,purchase)
            .map(response => response.json())
            .catch(error => this.handleError(error))
   
    }


    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}
