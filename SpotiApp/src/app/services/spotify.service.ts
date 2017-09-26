import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  
  artistas:any[]=[];
  urlApi="https://api.spotify.com/v1/search";


  constructor(private http:Http) { }

  getArtistas(criteria:string){
   
    let headers=new Headers();
    headers.append('authorization','Bearer BQDnBKUq5rIiLZt2pRulSa2wxkhs05ZF0_EaS5Cldd5I3fuu_VzQm2Gc9FqXFRZZ6NLhCJvK7Sb9KWRCj-yELg');
    //let query="https://api.spotify.com/v1/search?query=metallica&type=artist&offset=0&limit=20";
    let query=`?q=${criteria}&type=artist`;
    let url=this.urlApi+query;

    return this.http
               .get(url,{headers})
               .map((result)=>{                 
                  this.artistas=(result.json().artists.items);       
                  return this.artistas;                            
               });
  }

}
