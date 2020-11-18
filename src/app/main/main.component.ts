import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { IdGenerator } from '../helpers/helpers';
import {NameGenerator, TeamNames} from '../data/local-data';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    engine = Engine.getInstance();

    constructor() {}

    ngOnInit() {
    }

    next() {
        this.engine.aging();
    }
}

export class Engine {
    private static instance: Engine;
    public teams: Array<Team> = [];
    public players: Array<Player> = [];
    public transferLog: Array<string> = [];
    public playerToSell: Array<string> = [];
    private retiredPlayers: Array<Player> = [];
    private sellList: Array<Player> = [];
    public year: number;

    private constructor() {
        this.year = 2000;
        TeamNames.sort(() => 0.5 - Math.random());
        for (let i = 0; i < 8; i++) {
            const tmpTm = new Team(IdGenerator.getId(), TeamNames[i]);
            for (let j = 0; j < 11; j++) {
                const age = Math.floor(Math.random() * 17) + 18;
                const tmpPl = new Player(IdGenerator.getId(), NameGenerator.getFullName(), tmpTm.id, this.year - age, this.year, tmpTm.name);
                this.players.push(tmpPl);
            }
            this.teams.push(tmpTm);
        }
    }

    public static getInstance(): Engine {
        if (!Engine.instance) {
            Engine.instance = new Engine();
        }

        return Engine.instance;
    }

    public aging() {
        this.year += 1;
        this.removeRetiredPlayer();
        this.addHistory();
        this.addPrize();
        this.transfer();
    }

    private removeRetiredPlayer() {
        const removeIndex = [];
        this.players.forEach((x, index) => {
            x.calculatePrice(this.year);
            if (this.year - x.birth > 37) {
                this.retiredPlayers.push(x);
                removeIndex.push(index);
            }
        });
        console.log(removeIndex.length, this.players.length);
        let indexOffset = 0;
        removeIndex.forEach(x => {
            this.players.splice(x - indexOffset, 1);
            indexOffset += 1;
        });
        console.log(removeIndex.length, this.players.length);
        console.table(this.retiredPlayers);
    }

    private addPrize() {
        this.teams.forEach(x => {
            this.players.filter(y => y.teamId === x.id).forEach(z => {
                x.price -= Math.floor(z.price / 20);
            });
            x.price += 50000;
        });
    }

    private addHistory() {
        this.players.forEach(x => {
            console.error(x.teamName);
            x.histories.push(new PlayerHistory(this.year, x.teamId, x.teamName));
        });
    }

    private transfer() {
        this.transferLog = [];
        this.playerToSell = [];
        // Add young player per team
        for (let i = 0; i < this.teams.length; i++) {
            const tmpId = (this.players.length + 1);
            const newPlayer = new Player(IdGenerator.getId(), NameGenerator.getFullName(), '', this.year - 18, this.year, '');
            this.players.push(newPlayer);
        }
        for (let i = 0; i < this.teams.length; i++) {
            const tmpPlayers = this.players.filter(x => x.teamId === this.teams[i].id);
            if (tmpPlayers.length > 0) {
                const cntSellPlayerRnd = Math.floor(Math.random() * 3) + 1;
                for (let j = 0; j < cntSellPlayerRnd; j++) {
                    const index = Math.floor(Math.random() * tmpPlayers.length);
                    if (this.sellList.findIndex(x => x.id === tmpPlayers[index].id) === -1) {
                        this.sellList.push(tmpPlayers[index]);
                        this.playerToSell.push(`${tmpPlayers[index].id}#${tmpPlayers[index].teamId}`);
                    }
                }
            }
        }
        this.sellList.push(...this.players.filter(x => x.teamId === ''));
        console.log('Transfer Market Size = ' + this.sellList.length);
        let tryCounter = 0;
        const teamTransferMin = [];
        this.teams.forEach(x => {
          teamTransferMin.push(x.transferManager * 30000);
        });
        while (this.sellList.length > 0) {
            const tmIndex = Math.floor(Math.random() * this.teams.length);
            const plIndex = Math.floor(Math.random() * this.sellList.length);
            const newTeam = this.teams[tmIndex];
            const oldTeam = this.teams.filter(x => x.id === this.sellList[plIndex].teamId)[0];
            if (newTeam.id !== this.sellList[plIndex].teamId && newTeam.price >= teamTransferMin[tmIndex]) {
                const oldTeamName = oldTeam != null ? oldTeam.id : 'Free';
                this.transferLog.push(`${this.sellList[plIndex].id}#${oldTeamName}#${newTeam.id}`);
                newTeam.price -= this.sellList[plIndex].price;
                if (oldTeam != null) {
                    oldTeam.price += this.sellList[plIndex].price;
                }
                this.sellList[plIndex].teamId = newTeam.id;
                this.sellList[plIndex].histories[this.sellList[plIndex].histories.length - 1].teamId = newTeam.id;
                this.sellList[plIndex].histories[this.sellList[plIndex].histories.length - 1]. teamName = newTeam.name;
                this.sellList.splice(plIndex, 1);
                tryCounter = 0;
            }
            tryCounter += 1;
            if (tryCounter > 10) {
                this.sellList = [];
            }
        }
        console.table(this.teams);
        console.table(this.players);

    }


}

export class Team {
    id: string;
    name: string;
    price: number;
    transferManager: number;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.price = 0;
        this.transferManager = Math.floor(Math.random() * 5);
    }
}

export class Player {
    id: string;
    fullName: string;
    birth: number;
    attributesName: string[] = [
        'dribbling',
        'finishing',
        'heading',
        'passing',
        'tackling',
        'aggression',
        'bravery',
        'creativity',
        'jumping',
        'pace',
        'stamina',
    ];
    attributes: number[] = [];
    overall: number;
    teamId: string;
    teamName: string;
    price: number;
    histories: Array<PlayerHistory> = [];

    constructor(id: string, name: string, teamId: string, birth: number, year: number, teamName) {
        this.id = id;
        this.fullName = name;
        this.birth = birth;
        this.teamId = teamId;
        this.overall = 0;
        this.attributesName.forEach(x => {
            const value = Math.random() * 90;
            this.overall += value;
            this.attributes.push(value);
        });
        this.overall = Math.round(this.overall / this.attributesName.length);
        this.calculatePrice(year);
        this.histories.push(new PlayerHistory(year, teamId, teamName));
        this.teamName = teamName;
    }

    calculatePrice(year) {
        this.price = Math.round((this.overall * 100) * (38 - Math.abs(this.birth - year)));
    }
}

export class PlayerHistory {
    year: number;
    teamId: string;
    teamName: string;

    constructor(year: number, teamId: string, teamName: string) {
        this.year = year;
        this.teamId = teamId;
        this.teamName = teamName;
    }
}



