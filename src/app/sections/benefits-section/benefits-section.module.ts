import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsSectionComponent } from './benefits-section.component';
import { BenefitCardComponent } from './benefit-card/benefit-card.component';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    BenefitsSectionComponent,
    BenefitCardComponent
  ],
  exports: [
    BenefitsSectionComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class BenefitsSectionModule { }
