import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DefaultButtonComponent } from './default-button/default-button.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DefaultButtonComponent
  ],
  exports: [
    NavbarComponent,
    DefaultButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
