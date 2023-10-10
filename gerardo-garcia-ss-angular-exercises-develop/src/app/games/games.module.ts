import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { NumberTriviaComponent } from './number-trivia/number-trivia.component';
import { AuthGuard } from '../auth/auth.guard';
import { RandomJokesComponent } from './random-jokes/random-jokes.component';

const routes: Routes = [
  {
    path: 'tic-tac-toe',
    pathMatch: 'full',
    component: TicTacToeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'random-jokes',
    pathMatch: 'full',
    component: RandomJokesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'number-trivia',
    pathMatch: 'full',
    component: NumberTriviaComponent,
  },
  {
    path: '**',
    redirectTo: 'tic-tac-toe',
  },
];

@NgModule({
  declarations: [TicTacToeComponent, NumberTriviaComponent, RandomJokesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GamesModule {}
