import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListSectionComponent } from './feature-list-section.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { ComponentsModule } from '../../components/components.module';



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
    ComponentsModule
  ]
})
export class FeatureListSectionModule { }
