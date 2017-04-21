import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {PublicComponent} from './public.component';

import {FooterComponent} from './footer/footer.component';
//import {HeaderComponent} from './header/header.component';


import { FormsModule } from "@angular/forms";
import { PublicRoutingModule } from "app/component/public/public-routing.module";
import { DropdownModule } from "app/service/ng-bootstrap features/ngx-dropdown/general.feature";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    NgbModule.forRoot(),
    DropdownModule,
    FormsModule
  ],
  declarations: [
    PublicComponent,
    FooterComponent,
    //HeaderComponent,

  ]
})
export class PublicModule {
}
