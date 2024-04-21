import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ComponentsModule } from '../components/components.module';
import { FeatureSectionComponent } from './feature-section/feature-section.component';



@NgModule({
  declarations: [
    HeroSectionComponent,
    FeatureSectionComponent,
  ],
  exports: [
    HeroSectionComponent,
    FeatureSectionComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SectionsModule { }
