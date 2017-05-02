import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './component/app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { IndexComponent } from './component/index/index.component';
import { LoginComponent } from "app/component/login/login.component";
import {ArticuloComponent} from "./component/articulo/articulo.component";
import { AdminComponent } from "./component/administrador/admin.component";
import { CarritoComponent } from "app/component/carrito/carrito.component";
import { MetodopagoComponent } from "app/component/metodopago/metodopago.component";
import { MiperfilComponent } from "app/component/miperfil/miperfil.component";
import { OfertasComponent } from "app/component/ofertas/ofertas";
import { SomosComponent } from "app/component/somos/somos";
import { ValidacionpedidosComponent } from "app/component/validacionpedidos/validacionpedidos";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    ArticuloComponent,
    AdminComponent,
    CarritoComponent,
    MetodopagoComponent,
    MiperfilComponent,
    OfertasComponent,
    SomosComponent,
    ValidacionpedidosComponent
    
    
  ],
  imports: [
    //NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent,HeaderComponent, LoginComponent,ArticuloComponent,AdminComponent]
})
export class AppModule { }
