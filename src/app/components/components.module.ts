import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FieldComponent } from './forms/field/field.component';
import { FormComponent } from './forms/form/form.component';
import { ImportantLinkComponent } from './links/important-link/important-link.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ImportantLinkComponent, FieldComponent, FormComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ImportantLinkComponent, FieldComponent, FormComponent, LoaderComponent],
})
export class ComponentsModule {
}
