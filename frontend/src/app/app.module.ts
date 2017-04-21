import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from "ngx-dropdown";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OfertaService } from "app/service/oferta.service";
import { ResourceService } from "app/service/resource.service";
import { UserService } from "app/service/user.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DropdownModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    OfertaService,
    ResourceService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}