import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//servicios
import {ProductosService} from '../../services/productos.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor(public _activatedRoute:ActivatedRoute,public _productosService:ProductosService) {
    this._activatedRoute.params.subscribe(parametros=>{
        this._productosService.getByCriterio(parametros['criterio']);
      });
   }



}
