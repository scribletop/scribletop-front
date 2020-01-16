import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private readonly fb: FormBuilder, private readonly users: UsersService) {
  }

  public ngAfterViewInit(): void {
    this.usernameField.nativeElement.focus();
  }

  register() {
    if (this.registrationForm.valid) {
      this.loading = true;
      this.users.create(this.registrationForm.value).subscribe(
        (result) => {
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        },
      );
    }
  }
}
