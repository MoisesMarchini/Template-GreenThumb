import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsSectionComponent } from './stats-section.component';
import { StatsCardComponent } from './stats-card/stats-card.component';



@NgModule({
  declarations: [StatsSectionComponent, StatsCardComponent],
  exports: [StatsSectionComponent],
  imports: [
    CommonModule
  ]
})
export class StatsSectionModule { }
