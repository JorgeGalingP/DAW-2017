import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from "app/service/ng-bootstrap features/ngx-dropdown/general.feature";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OfertaService } from "app/service/oferta.service";
import { ResourceService } from "app/service/resource.service";
import { UserService } from "app/service/user.service";
import { HeaderComponent } from "app/component/header/header.component";
import { FooterComponent } from "app/component/footer/footer.component";
import { CommonModule } from "@angular/common/common";
import { NgModule } from "@angular/core/src/metadata";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
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