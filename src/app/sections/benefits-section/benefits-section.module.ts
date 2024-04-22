import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsSectionComponent } from './benefits-section.component';
import { BenefitCardComponent } from './benefit-card/benefit-card.component';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { SectionAnimationShowDirective } from '../../directives/section-animation-show.directive';



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
    ComponentsModule,
    DirectivesModule,
  ],
  providers: [
    SectionAnimationShowDirective
  ]
})
export class BenefitsSectionModule { }
