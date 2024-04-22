import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListSectionComponent } from './feature-list-section.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { SectionAnimationShowDirective } from '../../directives/section-animation-show.directive';



@NgModule({
  declarations: [
    FeatureCardComponent,
    FeatureListSectionComponent,
  ],
  exports: [
    FeatureListSectionComponent,
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
export class FeatureListSectionModule { }
