import { Component } from '@angular/core';
import {MoviesService} from  './movies.service';

import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Funciona la APP!';

  constructor(private sercice:MoviesService){}
  
  agregarPeliculas(){
  	this.sercice.movies.push({
  		title:"Froze",
  		id:"4"
  	});

  }
}
