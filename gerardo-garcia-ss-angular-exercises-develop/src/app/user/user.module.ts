import { CommonModule } from '@angular/common';
import { UsernameGeneratorComponent } from './username-generator/username-generator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  pathMatch: 'full',
  component: UsernameGeneratorComponent,
}];

@NgModule({
  declarations: [UsernameGeneratorComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [UsernameGeneratorComponent]
})
export class UserModule {}
