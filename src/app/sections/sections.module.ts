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
import { FAQSectionComponent } from './faq-section/faq-section.component';
import { DirectivesModule } from '../directives/directives.module';
import { SectionAnimationShowDirective } from '../directives/section-animation-show.directive';
import { ProductsListSectionComponent } from './products-list-section/products-list-section.component';



@NgModule({
  declarations: [
    HeroSectionComponent,
    FeatureSectionComponent,
    TestimonialsSectionComponent,
    CTASectionComponent,
    NewsletterSectionComponent,
    FAQSectionComponent,
    ProductsListSectionComponent,
  ],
  exports: [
    HeroSectionComponent,
    FeatureSectionComponent,
    TestimonialsSectionComponent,
    CTASectionComponent,
    NewsletterSectionComponent,
    FAQSectionComponent,
    ProductsListSectionComponent,
    BenefitsSectionModule,
    FeatureListSectionModule,
    StatsSectionModule
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BenefitsSectionModule,
    FeatureListSectionModule,
    DirectivesModule,
    StatsSectionModule
  ],
  providers: [
    SectionAnimationShowDirective
  ]
})
export class SectionsModule { }
