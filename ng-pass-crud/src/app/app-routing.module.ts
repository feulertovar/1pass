import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordsListComponent } from './components/passwords-list/passwords-list.component';
import { PasswordDetailsComponent } from './components/password-details/password-details.component';
import { AddPasswordComponent } from './components/add-password/add-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'passwords', pathMatch: 'full' },
  { path: 'passwords', component: PasswordsListComponent },
  { path: 'passwords/:id', component: PasswordDetailsComponent },
  { path: 'add', component: AddPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
