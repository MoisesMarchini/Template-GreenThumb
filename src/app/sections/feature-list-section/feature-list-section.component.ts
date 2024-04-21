import { Component } from '@angular/core';
import { title } from 'process';
import { Card } from '../../models/card';
import { FeatureCard } from '../../models/feature-card';

@Component({
  selector: 'app-feature-list-section',
  templateUrl: './feature-list-section.component.html',
  styleUrl: './feature-list-section.component.scss'
})
export class FeatureListSectionComponent {
  featureCards: Partial<FeatureCard>[] = [
    {
      title: 'Environmental Impact',
      body: 'Reduce your carbon footprint and conserve resources.',
      imgSrc: '/assets/images/pablita-gardener-inspecting-plants-with-magnifying-glass.png'
    },
    {
      title: 'Health Benefits',
      body: 'Stay active and improve mental well-being.',
      imgSrc: '/assets/images/pablita-woman-watering-plants-in-garden.png'
    },
    {
      title: 'Cost Savings',
      body: 'Save money on groceries by growing your own food.',
      imgSrc: '/assets/images/pablita-woman-gardener.png'
    },
  ]
}
