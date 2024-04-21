import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ComponentsModule } from '../components/components.module';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { BenefitsSectionModule } from './benefits-section/benefits-section.module';
import { FeatureListSectionModule } from './feature-list-section/feature-list-section.module';



@NgModule({
  declarations: [
    HeroSectionComponent,
    FeatureSectionComponent,
  ],
  exports: [
    HeroSectionComponent,
    FeatureSectionComponent,
    BenefitsSectionModule,
    FeatureListSectionModule
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BenefitsSectionModule,
    FeatureListSectionModule
  ]
})
export class SectionsModule { }
