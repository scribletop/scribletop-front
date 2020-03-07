import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registration-complete', component: RegistrationCompleteComponent },
  { path: 'validate-email', component: ValidateEmailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
