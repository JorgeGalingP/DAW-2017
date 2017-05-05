import{Injectable, OnDestroy} from '@angular/core';
import{Headers,Http} from '@angular/http';
import'rxjs/Rx';
import{Observable}from 'rxjs/Observable'
import{BASE_URL,LOGIN_URL} from"../util";

import{User} from'../models/user.model';

import{OfertaService}from '../service/oferta.service';
import{OfertaDescuentoService}from'../service/ofertaDescuento.service';
import{ResourceService}from'../service/resource.service';
import{UserService}from'../service/user.service';

@Injectable()
export class SessionService implements OnDestroy {
        ngOnDestroy(): void {
            console.log("localStorage llamada a nsDestroy")
            localStorage.clear();
        }
        user:User;
        authCreds:string;
        isLogged = false;
        isAdmin = false;

        constructor(private http:Http,private userService:UserService,private OfertaService:OfertaService,private ofertaDescuentoService:OfertaDescuentoService,private resourceService:ResourceService){


        }
        logIn(username:string,password:string){
            this.authCreds=btoa(username+':'+password);
            let headers:Headers = new Headers();
            headers.append('Authorization','Basic'+this.authCreds);
            return this.http.get(LOGIN_URL,{headers:headers})
            .map(
                response=>{
                    let id = response.json().id;
                    localStorage.setItem('creds',this.authCreds);
                    localStorage.setItem('id',String(id));
                    this.userService.getUser(id).subscribe(
                        user =>{
                            this.user= user;
                            if(this.user.roles.includes('ROLE_ADMIN',0))

                              this.isAdmin = true;
                        },
                        error => console.log(error)
                    );
                    localStorage.setItem('user',username);
                    localStorage.setItem('password',password);
                    this.ofertaDescuentoService.setAuthHeaders(this.authCreds);
                    this.OfertaService.setAuthHeaders(this.authCreds);


                    this.isLogged= true;
                    return this.user;

                })
                ._catch(error => Observable.throw('Server error'));
            

        }
        logOut(){
            let headers:Headers = new Headers();
            headers.append('Authorization','Basic'+this.authCreds);
            return this.http.get(BASE_URL+'logOut',{headers:headers})
            .map(response =>{
                localStorage.clear();
                this.isLogged = false;
                this.user = null;
                return true;
            })
            ._catch(error => Observable.throw('Server error'))
        }
        checkCredentials(){
            return(localStorage.getItem("user")!== null);

        }
        register(name:string,surname:string,email:string,pais:string,descripcion:string,telefono:string,password:string,postalCode:number){
            let newUser:User;
            newUser={name:name,surname:surname,email:email,pais:pais,descripcion:descripcion,telephone:telefono,password:password,postalCode:postalCode};
            return this.http.post(BASE_URL+'register',newUser);
        }
                
 }
            
        
    







