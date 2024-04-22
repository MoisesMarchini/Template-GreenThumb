import { Component } from '@angular/core';
import { Testimonial } from '../../models/testimonial';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent {
  sectionProps = environment.sectionProps.testimonials;
  currentCardIndex = 0;

  next() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.sectionProps.cards.length;
  }

  previous() {
    this.currentCardIndex = (this.currentCardIndex - 1 + this.sectionProps.cards.length) % this.sectionProps.cards.length
  }
}
