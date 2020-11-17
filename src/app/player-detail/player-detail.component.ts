import { Component, OnInit } from '@angular/core';
import {Engine, Player} from '../main/main.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
    engine = Engine.getInstance();
    player: Player;
    playerId: string;

    constructor(private activatedRoute: ActivatedRoute) {
        this.playerId = activatedRoute.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.player = this.engine.players.filter(x => x.id === this.playerId)[0];
    }

    getAttribute(i: number) {
        return Math.floor(this.player.attributes[i]);
    }
}
