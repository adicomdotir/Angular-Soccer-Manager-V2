import {Component, OnInit} from '@angular/core';
import {Engine, Player} from '../main/main.component';

@Component({
    selector: 'app-transfer',
    templateUrl: './transfer.component.html',
    styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

    engine = Engine.getInstance();
    freePlayers: Player[] = [];
    transferLog: any[] = [];
    playerToSell: any[] = [];

    constructor() {
    }

    ngOnInit() {
        this.freePlayers = this.engine.players.filter(x => x.teamId === '');
        this.engine.transferLog.forEach(x => {
            const arr = x.split('#');
            this.transferLog.push(arr);
        });
        this.engine.playerToSell.forEach(x => {
            const arr = x.split('#');
            this.playerToSell.push(arr);
        });
    }

    getPlayerName(itmElement: any) {
        return this.engine.players.filter(x => x.id === itmElement)[0].fullName;
    }

    getTeamName(itmElement: any) {
        const res = this.engine.teams.filter(x => x.id === itmElement)[0];
        return res == null ? 'Free' : res.name;
    }
}
