/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
import { Observable } from 'rxjs';
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { SearchType } from './../../services/game.service';
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/quotes */
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

export interface platform{
  [x: string]: any;
  isXbox:boolean;
  isPC:boolean;
  isPS:boolean;
}

export interface games{
  id:string;
  name:string;
  background_image:string;
  released:string;
  platforms:platform;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})


export class GamesPage implements OnInit {

  results:games[]=[];
  type:SearchType=SearchType.name;
  title='';


  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  select(item){
    this.gameService.selectedGame=item;
  }
  searchChanged(){
    this.gameService.search(this.type,this.title).subscribe(res=>{
      this.results=res.results;

      this.results.forEach(element => {
        element.platforms.forEach(plat => {
          if(plat.platform.slug==='pc'){
            element.platforms.isPC=true;
          }
          if(plat.platform.slug==='xbox-one'){
            element.platforms.isXbox=true;
          }
          if(plat.platform.slug==='playstation4'){
            element.platforms.isPS=true;
          }
        });

      });
    });
  }

}
