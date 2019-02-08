import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // this tutorila is made from angular2 tutorials by veswash
  title = 'ang-ves';
  public name;
  public color = 'green';

  onclick(value){
    console.log(value);
  }

  onover(event){
    console.log(event);
  }
}
