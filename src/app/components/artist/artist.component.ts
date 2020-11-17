import { Component, OnInit } from '@angular/core';

import{ ActivatedRoute} from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artista:any={};
  loading:boolean;
  canciones:any[]=[];
  constructor(private route:ActivatedRoute,private spotify:SpotifyService) {
    this.loading=true; 
    this.route.params.subscribe(params=>{
      this.getArtista(params['id']);
      this.getTopCanciones(params['id']);
     
    })
  } 

  ngOnInit(): void {
  }
  getArtista(id:string){
    this.loading=true;
    this.spotify.getArtista(id).subscribe(artista =>{
      this.artista=artista;
      this.loading=false;
     
    })
  }
  getTopCanciones(id:string){
    this.spotify.getTopCanciones(id).subscribe(Top =>{
      this.canciones=Top;
     
    })
  }
}
