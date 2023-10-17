import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormTemplateComponent } from './dynamic-form-template.component/dynamic-form-template.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DynamicFormTemplateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'phone-book',
    pathMatch: 'full',
    component: PhoneBookComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  declarations: [DynamicFormTemplateComponent, PhoneBookComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), FormsModule],
})
export class DynamicFormModule {}
