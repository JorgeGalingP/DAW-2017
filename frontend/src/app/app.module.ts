import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from'app/app.routing';
import {HeaderComponent} from'../app/components/header/header.component';
import {FooterComponent} from '../app/components/footer/footer.component';
import {IndexComponent} from '../app/components/index/index.component';
import {ResourceService} from'../app/services/resource.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
