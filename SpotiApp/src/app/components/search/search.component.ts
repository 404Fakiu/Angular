import { Component, OnInit } from '@angular/core';

import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  criteria:string;
  artistResult:any[]=[];
  constructor(public spotifySvc:SpotifyService) {
    
   }

  ngOnInit() {
  
  }

  buscarArtista(){
   this.spotifySvc
      .getArtistas(this.criteria)
      .subscribe(res=>{
        this.artistResult=(res);
        console.log(this.artistResult);
      });
  }

}
