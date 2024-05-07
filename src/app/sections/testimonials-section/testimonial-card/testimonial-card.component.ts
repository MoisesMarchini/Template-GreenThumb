import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../models/testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  @Input() card: Partial<Testimonial> = {};
}
