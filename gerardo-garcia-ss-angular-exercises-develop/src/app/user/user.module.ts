import { CommonModule } from '@angular/common';
import { UsernameGeneratorComponent } from './username-generator/username-generator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'username-generator',
    pathMatch: 'full',
    component: UsernameGeneratorComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [UsernameGeneratorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [UsernameGeneratorComponent],
})
export class UserModule {}
