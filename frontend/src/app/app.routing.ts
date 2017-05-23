import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from '../app/components/header/header.component';
import {FooterComponent} from'../app/components/footer/footer.component';
import {IndexComponent} from'../app/components/index/index.component';
import {AppComponent} from'../app/app.component';

const appRoutes = [
     {path:'app',component:AppComponent},
     { path: '', component: IndexComponent },
   
]

export const routing = RouterModule.forRoot(appRoutes);