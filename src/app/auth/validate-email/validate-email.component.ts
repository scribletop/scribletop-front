import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss'],
})
export class ValidateEmailComponent implements OnInit {
  validated: boolean;

  constructor(
    private readonly page: ActivatedRoute,
    private readonly router: Router,
    private readonly auth: AuthService,
  ) {
  }

  ngOnInit(): void {
    const queryParamMap = this.page.snapshot.queryParamMap;
    if (!queryParamMap.has('token') || !queryParamMap.has('email')) {
      this.router.navigate(['/']);
    } else {
      this.auth.validateEmail(queryParamMap.get('email') || '', queryParamMap.get('token') || '')
        .subscribe(
          () => this.validated = true,
          () => this.validated = false,
        );
    }
  }
}
