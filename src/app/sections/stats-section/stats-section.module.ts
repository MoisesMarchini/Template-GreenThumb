import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsSectionComponent } from './stats-section.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { DirectivesModule } from '../../directives/directives.module';
import { SectionAnimationShowDirective } from '../../directives/section-animation-show.directive';



@NgModule({
  declarations: [StatsSectionComponent, StatsCardComponent],
  exports: [StatsSectionComponent],
  imports: [
    CommonModule,
    DirectivesModule,
  ],
  providers: [
    SectionAnimationShowDirective
  ]
})
export class StatsSectionModule { }
