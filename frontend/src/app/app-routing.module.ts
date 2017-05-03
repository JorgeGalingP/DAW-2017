import { HeaderComponent } from "app/component/header/header.component";
import { FooterComponent } from "app/component/footer/footer.component";
import { AppComponent } from "app/component/app.component";
import { IndexComponent } from "app/component/index/index.component";
import { LoginComponent } from "app/component/login/login.component";
import { RegistroComponent } from "app/component/registro/registro.component";
import { ArticuloComponent} from "app/component/articulo/articulo.component";
import { AdminComponent} from "app/component/administrador/admin.component";
import {OfertaComponent} from "app/component/oferta/oferta.component";

import {Routes,RouterModule} from'@angular/router';


const appRoutes:Routes = [
    {path:'app',component: AppComponent},
    {path:'index',component: IndexComponent},
    {path:'header',component: HeaderComponent},
    {path:'footer',component: FooterComponent},
    {path:'login',component: LoginComponent},
    {path:'registro',component: RegistroComponent},
    {path:'articulo',component:ArticuloComponent},
    {path:'admin', component:AdminComponent},
    {path:'ofertas', component:OfertaComponent},
    
    
    
]
export const routing = RouterModule.forRoot(appRoutes);
    
