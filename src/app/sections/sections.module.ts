import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HeroSectionComponent,
  ],
  exports: [
    HeroSectionComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SectionsModule { }
