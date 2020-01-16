import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-field',
  template: `
    <div class="field">
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent {

}
