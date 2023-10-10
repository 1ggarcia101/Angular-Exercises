import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InfoComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule),
  },
  {
    path: 'dynamic-form',
    loadChildren: () =>
      import('./dynamic-form/dynamic-form.module').then(
        (x) => x.DynamicFormModule
      ),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./games/games.module').then((x) => x.GamesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
