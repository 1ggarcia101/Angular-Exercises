import { CommonModule } from '@angular/common';
import { UsernameGeneratorComponent } from './username-generator/username-generator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path:'username-generator',
  pathMatch: 'full',
  component: UsernameGeneratorComponent,
}];

@NgModule({
  declarations: [UsernameGeneratorComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [UsernameGeneratorComponent]
})
export class UserModule {}
