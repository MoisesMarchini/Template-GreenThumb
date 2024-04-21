import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ComponentsModule } from '../components/components.module';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { BenefitsSectionModule } from './benefits-section/benefits-section.module';
import { FeatureListSectionModule } from './feature-list-section/feature-list-section.module';
import { StatsSectionModule } from './stats-section/stats-section.module';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { CTASectionComponent } from './cta-section/cta-section.component';
import { NewsletterSectionComponent } from './newsletter-section/newsletter-section.component';



@NgModule({
  declarations: [
    HeroSectionComponent,
    FeatureSectionComponent,
    TestimonialsSectionComponent,
    CTASectionComponent,
    NewsletterSectionComponent,
  ],
  exports: [
    HeroSectionComponent,
    FeatureSectionComponent,
    TestimonialsSectionComponent,
    CTASectionComponent,
    NewsletterSectionComponent,
    BenefitsSectionModule,
    FeatureListSectionModule,
    StatsSectionModule
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BenefitsSectionModule,
    FeatureListSectionModule,
    StatsSectionModule
  ]
})
export class SectionsModule { }
