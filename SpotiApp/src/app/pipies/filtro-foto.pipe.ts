import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFoto'
})
export class FiltroFotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let noImage="assets/images/noimage.png";
    if(!value){
      return noImage;
    }
    return (value.length>0) ? value[1].url:noImage;
  }

}
