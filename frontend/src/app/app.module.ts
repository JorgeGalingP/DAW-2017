import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './component/app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { IndexComponent } from './component/index/index.component';
import {ArticuloComponent} from'./component/articulo/articulo.component';
import { LoginComponent } from './component/login/login.component';
import { LoginService } from 'app/service/login.service';
import {routing} from 'app/app-routing.module';
import {RegistroComponent} from'./component/registro/registro.component';
import {OfertasComponent} from './component/ofertas/ofertas.component';
import {OfertaService} from'app/service/oferta.service';
import {OfertaDescuentoService} from'app/service/ofertaDescuento.service';
import {ResourceService} from 'app/service/resource.service';
import{RegistroService} from 'app/service/registro.service';
import{CarritoComponent} from'app/component/carrito/carrito.component';
import{UserService} from'app/service/user.service';
import {AdministradorComponent} from 'app/component/administrador/administrador.component';
import {PurchaseService} from 'app/service/purchase.service';
import {PerfilComponent} from 'app/component/perfil/perfil.component';
import {SomosComponent}from'app/component/somos/somos.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    ArticuloComponent,
    LoginComponent,
    RegistroComponent,
    OfertasComponent,
    CarritoComponent,
    AdministradorComponent,
    PerfilComponent,
    SomosComponent,
    
    
    
  ],
  imports: [
    //NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [ ResourceService, LoginService,OfertaService,OfertaDescuentoService,RegistroService,UserService,PurchaseService],
  bootstrap: [AppComponent, FooterComponent,HeaderComponent,ArticuloComponent,RegistroComponent,OfertasComponent,CarritoComponent,AdministradorComponent,PerfilComponent,SomosComponent,SomosComponent]
})
export class AppModule { }
