import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { GuestLayoutComponent } from './guest/guest-layout.component';
import { LayoutComponent } from './layout.component';
import { UserLayoutComponent } from './user/user-layout.component';

@NgModule({
  declarations: [GuestLayoutComponent, LayoutComponent, UserLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  exports: [
    LayoutComponent,
  ],
})
export class LayoutModule {
}
