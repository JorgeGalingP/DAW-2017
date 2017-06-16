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

   /* private Resources=[
        new Resources(8,"La vida es bella","fjfjf","Bob marley","fffff","dddd",88999,999,""),
        new Resources(9,"Living","jgjg","QUEEN","Queen","dddd",88999,999,""),
        new Resources(10,"Luces de Bohemia","fjfjf","THE BEATLES","fffff","dddd",88999,999,""),
        new Resources(11,"Corazones","fjfjf","SERRAT","fffff","dddd",88999,999,""),
        new Resources(12,"Luces","fjfjf","Ffff","fffff","dddd",88999,999,""),
        new Resources(13,"Colores","fjfjf","Ffff","fffff","dddd",88999,999,""),
        new Resources(14,"dddd","fjfjf","Ffff","fffff","dddd",88999,999,"")
    

    ];

    getResources(){
        return this.Resources;
    }
    getResource(id:number|string){
        return this.Resources.find(resource => resource.id === +id);
    }*/

    constructor (private http:Http){

    }

    getResources(){
        return this.http.get(BASE_URL,{})
           .map(response => response.json())
           .catch(error => this.handleError(error));
    }
    getResource(id:number){
        return this.http.get(BASE_URL+id,{})
           .map(response=> response.json())
           .catch(error=> this.handleError(error));
    }

    removeResource(id:number){
        return this.http.delete(BASE_URL +id,{})
           .map(response => response.json)
           .catch(error => this.handleError(error));
    }
    gettAllResources(type?:string, page?:number){
        let url= BASE_URL +'?type='+type+'&page=' +page;
        return this.http.get(url)
        .map(response => response.json().content)
        .catch(error =>Observable.throw('Server error'));
    }
    addResource(resource:Resource){
        return this.http.post(BASE_URL, resource)
            .map(response => response.json())
            ._catch(error => this.handleError(error))

    }
    updateResource(resource:Resource){
        return this.http.put(BASE_URL + resource.id, resource)
              .map(response => response.json())
              .catch(error => this.handleError(error));
      
    
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}

    


}