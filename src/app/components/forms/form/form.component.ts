import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiValidationErrorDetail } from '../../../api/validation-error';

export interface FormWithErrorHandling {
  loading: boolean;
  form: FormGroup;
  formError: string;
}

export const handleFormError = (component: FormWithErrorHandling, error: HttpErrorResponse) => {
  component.loading = false;
  if (error.status === 422) {
    error.error.details.forEach(
      (e: ApiValidationErrorDetail) => component.form.controls[e.field].setErrors({ api: e.error }),
    );
  } else {
    component.formError = error.error?.message || error.message;
  }
};

@Component({
  selector: 'form[app-form]',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
}
