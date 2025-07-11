import { Routes } from '@angular/router';
import { FreeGamesComponent } from './modules/free-games/free-games.component';

export const routes: Routes = [
    {path:'**', component: FreeGamesComponent },
    {path:'free-games', component: FreeGamesComponent }
];
