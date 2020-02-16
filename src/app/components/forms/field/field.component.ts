import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-field',
  template: `
    <div class="field">
      <ng-content></ng-content>
      <div class="error" *ngIf="doesShowError">
        <p *ngIf="error.required">You must fill this field to continue.</p>
        <p *ngIf="error.email">This does not look like an email to me.</p>
        <p *ngIf="error.minlength">This needs to have at least {{ error.minlength.requiredLength }} characters.</p>
        <p *ngIf="error.pattern">{{ patternError }}</p>
        <p *ngIf="error.api">{{ error.api }}</p>
      </div>
    </div>`,
  styleUrls: ['./field.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FieldComponent {
  @Input() control: AbstractControl;
  @Input() patternError: string;

  get doesShowError(): boolean {
    return this.control?.touched && !!this.control?.errors && this.control?.errors.length !== 0;
  }

  get error(): ValidationErrors {
    return this.control?.errors ? this.control?.errors : {};
  }
}
