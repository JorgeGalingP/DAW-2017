import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "app/component/header/header.component";
import { FooterComponent } from "app/component/footer/footer.component";



const appRoutes = [
          {path: 'header', component: HeaderComponent},
          {path: 'footer', component: FooterComponent},
          //{path: 'contact', component: ContactComponent},
          //{path: 'login', component: LoginComponent},
          //{path: 'profile', component: ProfileComponent},
          //{path: 'register', component: RegisterComponent},
          //{path: 'resource/:id', component: ResourceDetailsComponent },
          //{path: 'search', component: SearchComponent}
  ]

export class AppRoutingModule {
}
