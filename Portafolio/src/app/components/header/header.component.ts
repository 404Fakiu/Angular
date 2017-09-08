import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


//services
import {InformacionService} from '../../services/informacion.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public _informacionService:InformacionService,public _router:Router){
    
  }

  search(criterio : string){
     this._router.navigate(['buscar',criterio]);
  }


}
