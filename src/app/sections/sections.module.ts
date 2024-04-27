import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { SectionAnimationShowDirective } from '../directives/section-animation-show.directive';
import { ProductsListSectionComponent } from './products-list-section/products-list-section.component';

@NgModule({
  declarations: [HeroSectionComponent, ProductsListSectionComponent],
  exports: [HeroSectionComponent, ProductsListSectionComponent],
  imports: [CommonModule, ComponentsModule, DirectivesModule],
  providers: [SectionAnimationShowDirective],
})
export class SectionsModule {}
