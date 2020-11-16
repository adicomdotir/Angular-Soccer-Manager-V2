import { Component, OnInit } from '@angular/core';
import {Engine, Player, PlayerHistory, Team} from '../main/main.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

    engine = Engine.getInstance();
    team: Team;
    players: Player[] = [];
    teamId: string;

    constructor(public activatedRoute: ActivatedRoute) {
        this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.players = this.engine.players.filter(x => x.teamId === this.teamId);
    }

}
