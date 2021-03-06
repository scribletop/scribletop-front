import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { handleFormError } from '../../components/forms/form/form.component';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('usernameField') private usernameField: ElementRef;
  loading = false;

  form = this.fb.group({
    username: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-z][a-z0-9._-]+$/),
    ])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });

  formError = '';

  constructor(
    private readonly fb: FormBuilder,
    private readonly users: UsersService,
    private readonly router: Router,
  ) {
  }

  public ngAfterViewInit(): void {
    this.usernameField.nativeElement.focus();
  }

  public register(): void {
    if (this.form.valid) {
      this.loading = true;
      this.users.create(this.form.value).subscribe(
        () => this.router.navigate(['auth/registration-complete']),
        (error: HttpErrorResponse) => handleFormError(this, error),
      );
    }
  }
}
