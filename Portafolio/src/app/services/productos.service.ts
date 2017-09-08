import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class ProductosService {

  productos:any[]=[];
  productosFiltrados:any[]=[];

  constructor(private http:Http) { 
    this.getProductos();
  }

  public getProductos(){
    let promise= new Promise((resolve,reject)=>{
      this.http
       .get("https://portafolio-64d59.firebaseio.com/productos_idx.json")
          .subscribe(res=>{
           setTimeout(()=>{
              this.productos=res.json();
              resolve();
           },2000);         
      });
    });

    return promise;
   
  }

  public getById(id:string){
    
   return this.http
      .get(`https://portafolio-64d59.firebaseio.com/productos/${id}.json`);
  }

  public getByCriterio(criterio:string){
    
    if(this.productos.length===0){
      this.getProductos().then(()=>{
         //termino la carga
         this.filtrarProducto(criterio);
      });
    }else{
      this.filtrarProducto(criterio);
    }

   
  }

  private filtrarProducto(criterio:string){
    this.productosFiltrados=[];
    criterio=criterio.toLowerCase();

    this.productos.forEach(prod=>{
      if(prod.categoria.indexOf(criterio)>=0 || prod.titulo.toLowerCase().indexOf(criterio)>=0){
        this.productosFiltrados.push(prod);
      }
    });

  }

}
