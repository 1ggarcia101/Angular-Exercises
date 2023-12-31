import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { NumberTriviaComponent } from './number-trivia/number-trivia.component';
import { AuthGuard } from '../auth/auth.guard';
import { RandomJokesComponent } from './random-jokes/random-jokes.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorInterceptor } from '../auth/http-error-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'tic-tac-toe',
    pathMatch: 'full',
    component: TicTacToeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'random-jokes',
    pathMatch: 'full',
    component: RandomJokesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'number-trivia',
    pathMatch: 'full',
    component: NumberTriviaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'tic-tac-toe',
  },
];

@NgModule({
  declarations: [
    TicTacToeComponent,
    NumberTriviaComponent,
    RandomJokesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
})
export class GamesModule {}
