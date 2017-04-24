import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from './public.component';

const appRoutes: Routes = [
    { path: '', loadChildren: './component/public/public.module#PublicModule' },
    //{ path: 'admin', loadChildren: './component/admin/admin.module#AdminModule' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        children: [
          //{path: '', component: HomeComponent},
          //{path: 'about', component: AboutComponent},
          //{path: 'contact', component: ContactComponent},
          //{path: 'login', component: LoginComponent},
          //{path: 'profile', component: ProfileComponent},
          //{path: 'register', component: RegisterComponent},
          //{path: 'resource/:id', component: ResourceDetailsComponent },
          //{path: 'search', component: SearchComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule {
}
