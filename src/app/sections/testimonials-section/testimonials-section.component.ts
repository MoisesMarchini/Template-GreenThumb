import { Component, Input } from '@angular/core';
import { Testimonial } from '../../models/testimonial';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss',
})
export class TestimonialsSectionComponent {
  @Input() sectionProps: TestmonialSectionProps =
    environment.sectionProps.testimonials;
  currentCardIndex = 0;

  getPrevious() {
    return (
      (this.currentCardIndex - 1 + this.sectionProps.cards.length) %
      this.sectionProps.cards.length
    );
  }

  getNext() {
    return (this.currentCardIndex + 1) % this.sectionProps.cards.length;
  }

  next() {
    this.currentCardIndex = this.getNext();
  }

  previous() {
    this.currentCardIndex = this.getPrevious();
  }
}

export interface TestmonialSectionProps {
  bannerImgPath?: string;
  cards: Partial<Testimonial>[];
}
