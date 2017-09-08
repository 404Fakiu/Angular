import { Component, OnInit } from '@angular/core';

//services
import {InformacionService} from '../../services/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor(public _informacionService:InformacionService) {
   
   }


}
