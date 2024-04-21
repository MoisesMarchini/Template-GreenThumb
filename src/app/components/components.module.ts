import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { PlaceholderImgWrapperComponent } from './placeholder-img-wrapper/placeholder-img-wrapper.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { BenefitCardComponent } from './benefit-card/benefit-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DefaultButtonComponent,
    PlaceholderImgWrapperComponent,
    FeatureCardComponent,
    BenefitCardComponent,
  ],
  exports: [
    NavbarComponent,
    DefaultButtonComponent,
    PlaceholderImgWrapperComponent,
    FeatureCardComponent,
    BenefitCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
