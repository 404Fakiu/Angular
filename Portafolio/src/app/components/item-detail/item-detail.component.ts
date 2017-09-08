import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../services/productos.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styles: []
})
export class ItemDetailComponent {

  product:any={};
  codProd:string;

  constructor(public _activatedRoute:ActivatedRoute,public _productosService:ProductosService) { 
   
    _activatedRoute.params.subscribe(parametros=>{
      
      _productosService
        .getById(parametros['id'])        
        .subscribe(res=>{        
          this.codProd=parametros['id']  
          this.product=(res.json());      
        });

    });
  }

}
