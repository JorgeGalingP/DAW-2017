import { HeaderComponent } from "app/component/header/header.component";
import { FooterComponent } from "app/component/footer/footer.component";
import { AppComponent } from "app/component/app.component";
import { IndexComponent } from "app/component/index/index.component";
import {Routes,RouterModule} from'@angular/router';
import {ArticuloComponent} from"app/component/articulo/articulo.component";
import { LoginComponent } from "app/component/login/login.component";
import {RegistroComponent} from"app/component/registro/registro.component";
import {OfertasComponent} from "app/component/ofertas/ofertas.component";
import {CarritoComponent} from "app/component/carrito/carrito.component";
import {AdministradorComponent} from "app/component/administrador/administrador.component";
import {PerfilComponent} from "app/component/perfil/perfil.component";
import {SomosComponent} from"app/component/somos/somos.component";
import{PerfilUserComponent} from"app/component/private/perfilUser.component";
import {FavoritosComponent} from"app/component/favoritos/favoritos.component";


const appRoutes:Routes = [
    {path:'app',component: AppComponent},
    {path:'',component: IndexComponent},
    {path:'header',component: HeaderComponent},
    {path:'footer',component: FooterComponent},
    {path:'login',component: LoginComponent},
    {path:'resource',component:ArticuloComponent},
    {path:'resource/:id',component:ArticuloComponent},
    {path:'ofertas',component:OfertasComponent},
    {path:'registro',component:RegistroComponent},
    {path:'carrito/:id',component:CarritoComponent},
    {path:'carrito',component:CarritoComponent},
    {path:'admin',component:AdministradorComponent},
    {path:'admin/:name',component:AdministradorComponent},
    {path:'perfil',component:PerfilComponent},
    {path:'perfil/:id',component:PerfilComponent},
    {path:'somos',component:SomosComponent},
    {path:'perfilUser',component:PerfilUserComponent},
    {path:'favoritos',component:FavoritosComponent}

]
export const routing = RouterModule.forRoot(appRoutes);
    
