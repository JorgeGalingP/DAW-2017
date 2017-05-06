import{Injectable, OnDestroy} from '@angular/core';
import{Headers,Http} from '@angular/http';
import'rxjs/Rx';
import{Observable}from 'rxjs/Observable'
import{BASE_URL,LOGIN_URL} from"../util";

import{User} from'../models/user.model';

import{OfertaService}from '../service/oferta.service';
import{OfertaDescuentoService}from'../service/ofertaDescuento.service';
import{UserService}from'../service/user.service';
import{LoginService}from'../service/login.service';

@Injectable()
export class SessionService implements OnDestroy {
        ngOnDestroy(): void {
            console.log("localStorage llamada a nsDestroy")
            localStorage.clear();
        }
        user:User;
       
        constructor(private http:Http,private userService:UserService,loginService:LoginService){


        }
       
        register(name:string,surname:string,email:string,pais:string,descripcion:string,telefono:string,password:string,postalCode:number){
            let newUser:User;
            newUser={name:name,surname:surname,email:email,pais:pais,descripcion:descripcion,telephone:telefono,password:password,postalCode:postalCode};
            return this.http.post(BASE_URL+'register',newUser);
        }
                
 }
            
        
    
