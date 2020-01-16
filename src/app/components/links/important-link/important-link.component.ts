import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'a[app-important-link]',
  exportAs: 'appImportantLink',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./important-link.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportantLinkComponent {
  @Input() routerLink: string;
}
