import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Engine, Player, PlayerHistory} from '../main/main.component';

@Component({
    selector: 'app-player-history',
    templateUrl: './player-history.component.html',
    styleUrls: ['./player-history.component.css']
})
export class PlayerHistoryComponent implements OnInit {
    engine = Engine.getInstance();
    player: Player;
    playerHistories: PlayerHistory[];
    playerId: string;

    constructor(public activatedRoute: ActivatedRoute) {
        this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.player = this.engine.players.filter(x => x.id === this.playerId)[0];
        this.playerHistories = this.player.histories;
    }

}
