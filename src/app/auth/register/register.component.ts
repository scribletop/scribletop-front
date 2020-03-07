import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiValidationErrorDetail } from '../../api/validation-error';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('usernameField') private usernameField: ElementRef;
  loading = false;

  registrationForm = this.fb.group({
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

  register() {
    if (this.registrationForm.valid) {
      this.loading = true;
      this.users.create(this.registrationForm.value).subscribe(
        () => this.router.navigate(['auth/registration-complete']),
        (error: HttpErrorResponse) => {
          this.loading = false;
          if (error.status === 422) {
            error.error.details.forEach(
              (e: ApiValidationErrorDetail) => this.registrationForm.controls[e.field].setErrors({ api: e.error }),
            );
          } else {
            this.formError = error.error?.message || error.message;
          }
        },
      );
    }
  }
}
