import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imagen1 = "src/assets/img/img7.jpg";
  imagen2 = "src/assets/img/img8.jpg";
  imagen3 = "src/assets/img/img9.jpg";

  precio="23.5";
  interprete="Michael Jackson";
  title="Thriller";
  subtitle="El mejor de todos los tiempos";
}
