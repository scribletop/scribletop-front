import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { handleFormError } from '../../components/forms/form/form.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('emailField') private emailField: ElementRef;
  loading = false;

  form = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });

  formError = '';

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {
  }

  public ngAfterViewInit(): void {
    this.emailField.nativeElement.focus();
  }

  public login(): void {
    if (this.form.valid) {
      this.loading = true;
      this.auth.login(this.form.value).subscribe(
        () => this.router.navigate(['/games']),
        (error: HttpErrorResponse) => handleFormError(this, error),
      );
    }
  }
}
