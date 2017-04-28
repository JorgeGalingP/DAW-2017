import { HeaderComponent } from "app/component/header/header.component";
import { FooterComponent } from "app/component/footer/footer.component";
import { AppComponent } from "app/component/index/app.component";

const appRoutes = [
    {path:'app',component: AppComponent},
    {path:'header',component: HeaderComponent},
    {path:'footer',component: FooterComponent},
]
export class AppRoutingModule{
    
}