import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {PlayerHistoryComponent} from './player-history/player-history.component';
import {PlayersComponent} from './players/players.component';

const routes: Routes = [
    {
        path: '', component: MainComponent
    },
    {
        path: 'player/:id', component: PlayerHistoryComponent
    },
    {
        path: 'players/:id', component: PlayersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
