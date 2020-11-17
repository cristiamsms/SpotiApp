import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
  
  }

  getQuery(query:string){
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQAZaHcFweTeOpjVR7sTHFfdLzhi3YWpMJnBVEIKMllj2uPGZoD0ALRXBeiU82sDIenaoWXa7sX2-H0F2UI '
    });
    const url=`https://api.spotify.com/v1/${query}`;
    return this.http.get(url,{headers});
  }

  getNewReleases(){
  
   return this.getQuery('browse/new-releases').pipe(map(data=>{
      return data['albums'].items;
   }));
  }
  getArtistas(termino:string){
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map(data=> data['artists'].items));
  }
  getArtista(id:string){
    
    return this.getQuery(`artists/${id}`);
  }
  getTopCanciones(id:string){
    
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data=> data['tracks']));
  }
}
