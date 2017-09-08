import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class InformacionService {

  footer:any={};
  about:any[]=[];

  constructor(private http:Http) { 
    this.getInfoFooter();
    this.getInfoAbout();
  }


  public getInfoAbout(){
    this.http
        .get("https://portafolio-64d59.firebaseio.com/equipo.json")
        .subscribe(data=>{
            this.about=data.json();
        });
  }

  public getInfoFooter(){
    this.http
        .get("assets/data/data.json")
        .subscribe(data=>{       
            this.footer=data.json();
        });
  }

}
