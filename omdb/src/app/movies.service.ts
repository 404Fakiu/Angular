import { Injectable } from '@angular/core';

import {Movie} from './movies/movies';

import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class MoviesService {

	movies: Movie[];

  	constructor(private http:Http) {
  		this.movies=[
	  		{title:'Moises',id:'1'},
	  		{title:'Mueve el toto',id:'2'},
	  		{title:'Con Marido',id:'3'}
	  	];
  	}

  	//sobre un observador podemos ejecutar el metodo subscribe que recibe dos funciones, una se ejecuta cuando se complete el metodo que el observador esta esperando que se termine
  	// y otra que se va a ejecutar en caso de que haya un error
  	search(keyword:string){
  		this.getMovies(keyword).subscribe(
  			respuesta=>this.movies=respuesta,
  			error=>console.log(error)
  		);
  	}


  	
	//la peticion get que no retorna un arreglo de Movie, sino lo que retorna es objeto response, entonces para solucionar esto
	//hay que convertir y utilizar map.
	//map transforma un elemento emitido por un observador aplicando una funcion para cada uno de esos item
  	getMovies(keyword:string):Observable<Movie[]>{

  		return this.http
  						.get("https://www.omdbapi.com/?s="+keyword)
  						.map(this.parseResponse)
  						.catch(()=>Observable.throw("Algo salio mal!!!"));

  	}

  	parseResponse(response:Response):Movie[]{
  		if(!response.json() || !response.json().Search) {
  			return [];
  		}else{
  			return response.json().Search.map(
  				jsonMovie=>new Movie(jsonMovie['Title'],
  									jsonMovie['imdbID'],
  									jsonMovie['Year'],
  									jsonMovie['Type'])
  			)
  		}
  	}


}
