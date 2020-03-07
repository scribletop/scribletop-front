import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { UsersModule } from '../users/users.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegisterComponent, RegistrationCompleteComponent, ValidateEmailComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    UsersModule,
  ],
})
export class AuthModule {
}
