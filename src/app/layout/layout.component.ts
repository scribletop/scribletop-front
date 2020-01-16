import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-guest-layout *ngIf="!isLoggedIn">
      <ng-container *ngTemplateOutlet="layout"></ng-container>
    </app-guest-layout>
    <app-user-layout *ngIf="isLoggedIn">
      <ng-container *ngTemplateOutlet="layout"></ng-container>
    </app-user-layout>
    <ng-template #layout>
      <ng-content></ng-content>
    </ng-template>`,
})
export class LayoutComponent implements OnInit {
  @Input() isLoggedIn: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
