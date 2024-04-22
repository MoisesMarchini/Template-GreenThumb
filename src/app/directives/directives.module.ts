import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionAnimationShowDirective } from './section-animation-show.directive';



@NgModule({
  declarations: [
    SectionAnimationShowDirective
  ],
  exports: [
    SectionAnimationShowDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
