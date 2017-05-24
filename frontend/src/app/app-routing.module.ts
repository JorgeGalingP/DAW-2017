import { HeaderComponent } from "app/component/header/header.component";
import { FooterComponent } from "app/component/footer/footer.component";
import { AppComponent } from "app/component/app.component";
import { IndexComponent } from "app/component/index/index.component";
import {Routes,RouterModule} from'@angular/router';
import {ArticuloComponent} from"app/component/articulo/articulo.component";
import { LoginComponent } from "app/component/login/login.component";


const appRoutes:Routes = [
    {path:'app',component: AppComponent},
    {path:'',component: IndexComponent},
    {path:'header',component: HeaderComponent},
    {path:'footer',component: FooterComponent},
    {path:'login',component: LoginComponent},
    //{path:'resource',component:ArticuloComponent},
    {path:'resource/:id',component:ArticuloComponent}
    
    
    
    
]
export const routing = RouterModule.forRoot(appRoutes);
    
