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
import {AdminComponent} from "./component/administrador/admin.component";
import {routing} from 'app/app-routing.module';
import {RegistroComponent} from'./component/registro/registro.component';
import {OfertaComponent} from'app/component/oferta/oferta.component';
import {CarritoComponent} from'app/component/carrito/carrito.component';
import {SomosComponent} from 'app/component/somos/somos.component';
import {LoginService} from 'app/service/login.service';
import {SessionService} from 'app/service/session.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    ArticuloComponent,
    AdminComponent,
    RegistroComponent,
    OfertaComponent,
    CarritoComponent,
    SomosComponent,
    
    
  ],
  imports: [
    //NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService,SessionService],
  bootstrap: [AppComponent, FooterComponent,HeaderComponent, LoginComponent,ArticuloComponent,AdminComponent,OfertaComponent,SomosComponent]
})
export class AppModule { }
