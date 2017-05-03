import { HeaderComponent } from "app/component/header/header.component";
import { FooterComponent } from "app/component/footer/footer.component";
import { AppComponent } from "app/component/app.component";
import { IndexComponent } from "app/component/index/index.component";
import { LoginComponent } from "app/component/login/login.component";
import { RegistroComponent } from "app/component/registro/registro.component";
import { ArticuloComponent} from "app/component/articulo/articulo.component";
import { AdminComponent} from "app/component/administrador/admin.component";


const appRoutes = [
    {path:'app',component: AppComponent},
    {path:'index',component: IndexComponent},
    {path:'header',component: HeaderComponent},
    {path:'footer',component: FooterComponent},
    {path:'login',component: LoginComponent},
    {path:'registro',component: FooterComponent},
    {path:'articulo',component:ArticuloComponent},
    {path:'admin', component:AdminComponent}
    
    
]
export class AppRoutingModule{
    
}