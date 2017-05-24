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
import { LoginService } from './component/login/login.service';
import {routing} from 'app/app-routing.module';



import {ResourceService} from 'app/service/resource.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    ArticuloComponent,
    LoginComponent
    
    
    
  ],
  imports: [
    //NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [ ResourceService, LoginService],
  bootstrap: [AppComponent, FooterComponent,HeaderComponent,ArticuloComponent]
})
export class AppModule { }
