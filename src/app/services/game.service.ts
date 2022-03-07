/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable quote-props */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-trailing-spaces */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { games } from '../pages/games/games.page';

export enum SearchType{
  genres='genres',
  name='name',
  platforms='platforms',

}

export interface Auth {
  access_token: string;
  expires_in: number;
  token_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  selectedGame=null;

  constructor(private http: HttpClient) { }

  search(type:SearchType,title:string):Observable<any>{
    if(title==null){ return this.http.get('https://api.rawg.io/api/games?key=5fcb18a9c3844a42b5bd79b2a7320091&ordering=-released');}
    switch(type){
      case 'name': return this.http.get(`https://api.rawg.io/api/games?key=5fcb18a9c3844a42b5bd79b2a7320091&search=${title}`);
      case 'genres': return this.http.get(`https://api.rawg.io/api/games?key=5fcb18a9c3844a42b5bd79b2a7320091&genres=${title}`);
      case 'platforms': return this.http.get(`https://api.rawg.io/api/games?key=5fcb18a9c3844a42b5bd79b2a7320091&platforms=${title}`);
    }
  }

  getAllGames():Observable<any>{
    return this.http.get(`https://api.rawg.io/api/games?key=5fcb18a9c3844a42b5bd79b2a7320091`);
  }

  getNewGames(){
    return this.http.get('https://api.rawg.io/api/games?key=5fcb18a9c3844a42b5bd79b2a7320091&ordering=-released');
  }


}


