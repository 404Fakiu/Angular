import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import{FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword:string ="";
  searchControl: FormControl = new FormControl();
  
  constructor(private service:MoviesService) { }

  ngOnInit() {
    //nos subscribimos a la propiedad valueChanges, y valueChanges es un Observable que emite un evento cada vez que cambia el valor del control que esta enlazado
    //y luego se ejecuta la funcion newValue=>this.service.search(newValue) donde newValue es el valor actual del control
    //debounceTime espera 500 milisegundo para que vuelvas a escribir, sino escribes busca con lo que escribiste
    //entonces espear que haya un cambio, si en los proximos 500 milisegundo hay un nuevo cambio, desecha todo, no se ejecuta el metodo, si deja de haber cambio ahi se ejecuta el metodo
    //distinctUntilChanged lo que hace es que si en esos 500 milisegundos volviste a escribir lo mismo, no haga otra busqueda
    //por ejemplo si no tenemos la funcion distinctUntilChanged, si ingresamos Toy Story y luego borramos la ultima "y" y agregamos nuevamente la "y", se realiza una nueva peticion por lo tanto no es eficiente
    //en cambio si tenemos el metodo distinctUntilChanged por mas que borremos la ultima "y" y volvemos agregar la "y" no se hace de nuevo la peticion, porque el valor es el mismo
    
    //this.service.allMovies().subscribe((result)=>console.log(result));

    this.searchControl.valueChanges
         .debounceTime(500)
         .distinctUntilChanged()
         .subscribe(newValue=>this.service.search(newValue))
  }

  search(){
  	this.service.search(this.keyword);
  }

}
