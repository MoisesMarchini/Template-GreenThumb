import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ComponentsModule } from '../components/components.module';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { FeatureListSectionComponent } from './feature-list-section/feature-list-section.component';
import { BenefitsSectionComponent } from './benefits-section/benefits-section.component';



@NgModule({
  declarations: [
    HeroSectionComponent,
    FeatureSectionComponent,
    FeatureListSectionComponent,
    BenefitsSectionComponent,
  ],
  exports: [
    HeroSectionComponent,
    FeatureSectionComponent,
    FeatureListSectionComponent,
    BenefitsSectionComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SectionsModule { }
