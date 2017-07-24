import { Component, OnInit } from '@angular/core';
import {Movie} from './movies';
import{MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  	movies:Movie[];
 

    //angular inyecta los servicios utilizando la inforamacion de los argumento del componente 
    //los servicios en angular son objetos singleton, nunca va a haber dos objetos de la misma clase del servicio , y tanto appComponent y movies component comparten el mismo objeto y si nos damos cuenta angular se encarga de crear el servicio, nosotros no lo tuvimos que crear
    //angular lo que hace es que cuando la primera vez que le pedimos que inyecte el servicio, entonces crea el objeto, porque es la primera vez que estamos solicitando
    // si alguien mas vuelve a solicitar el servicio, en lugar de crearlo, verifica si ya lo habia creado previamente y agarra el que ya habia creado y se lo entrega el que ya habia creado
  	constructor(private service:MoviesService) {
      
    }

  	ngOnInit() {
	  	//this.movies=[
	  		//{title:'Moises',id:'1'},
	  		//{title:'Mueve el toto',id:'2'},
	  		//{title:'Con Marido',id:'3'}
	  	//];
  
  	}//fin ngOnInit

    //actualiza la variable del componente pelicula cada vez que el servicio modifique las peliculas del observador
    ngDoCheck(){
      this.movies=this.service.movies;
    }

}
