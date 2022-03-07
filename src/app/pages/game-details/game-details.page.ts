/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {
  information=null;
  genres=" ";
  stores=" ";
  color=" ";

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GameService) { }

  ngOnInit() {
    //const id= this.activatedRoute.snapshot.paramMap.get('id');
   this.information=this.gameService.selectedGame;
   console.log(this.information);

   this.information.genres.forEach(element => {
    this.genres=element.name+" - " +this.genres;
   });

   this.information.stores.forEach(element => {
    this.stores = element.store.name+" - " +this.stores;

   });

   this.color="#"+this.information.saturated_color;
   console.log(this.color);
  }

  openWebsite(){
    window.open(this.information.Website,'_blank');
  }

}
