import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { PlaceholderImgWrapperComponent } from './placeholder-img-wrapper/placeholder-img-wrapper.component';
import { FormsModule } from '@angular/forms';
import { DefaultInputComponent } from './default-input/default-input.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivesModule } from '../directives/directives.module';
import { LoaderSpinnerComponent } from './loader-spinner/loader-spinner.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DefaultButtonComponent,
    PlaceholderImgWrapperComponent,
    DefaultInputComponent,
    FooterComponent,
    LoaderSpinnerComponent
  ],
  exports: [
    NavbarComponent,
    DefaultButtonComponent,
    PlaceholderImgWrapperComponent,
    DefaultInputComponent,
    FooterComponent,
    LoaderSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DirectivesModule
  ]
})
export class ComponentsModule { }
