import { Component } from '@angular/core';
import { Testimonial } from '../../models/testimonial';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent {
  currentCardIndex = 0;
  cards: Partial<Testimonial>[] = [
    {
      review: 5,
      body: 'I absolutely love the sustainable gardening products! They have transformed my garden into a thriving oasis. Highly recommended!',
      userName: 'John Smith',
      userOccupation: 'Gardening Enthusiast, Green Gardens',
    },
    {
      review: 4,
      body: `I've been using these gardening tools for a few months now, and I'm quite pleased with the results. They're sturdy and well-designed, making my gardening tasks much more enjoyable.`,
      userName: 'Alicia Chang',
      userOccupation: 'Botanist, Chang Botanicals',
    },
    {
      review: 5,
      body: `These gardening products have made such a difference in my life! Not only are they eco-friendly, but they're also incredibly effective. I can't imagine gardening without them now.`,
      userName: 'Sarah Thompson',
      userOccupation: 'Environmental Scientist',
    },{
      review: 4.5,
      body: `The customer service provided by this company is outstanding. They were incredibly helpful and responsive throughout the entire process. I'm very satisfied!`,
      userName: 'Emily Davis',
      userOccupation: 'Business Owner, Davis Designs',
    },



  ]

  next() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  }

  previous() {
    this.currentCardIndex = (this.currentCardIndex - 1 + this.cards.length) % this.cards.length
  }
}
