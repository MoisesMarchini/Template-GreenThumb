import { Component } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
})
export class BenefitsSectionComponent {
  cards: Card[] = [
    {
      title: "Healthier Plants",
      body: 'Our sustainable gardening products provide essential nutrients and support natural pest control.'
    },
    {
      title: "Greener Future",
      body: 'By choosing sustainable gardening practices, you contribute to a healthier planet for future generations.'
    },
  ]
}
