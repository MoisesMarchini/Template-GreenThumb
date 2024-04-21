import { Component } from '@angular/core';
import { title } from 'process';
import { Card } from '../../models/card';

@Component({
  selector: 'app-feature-list-section',
  templateUrl: './feature-list-section.component.html',
  styleUrl: './feature-list-section.component.scss'
})
export class FeatureListSectionComponent {
  featureCards: Card[] = [
    {
      title: 'Environmental Impact',
      body: 'Reduce your carbon footprint and conserve resources.'
    },
    {
      title: 'Health Benefits',
      body: 'Stay active and improve mental well-being.'
    },
    {
      title: 'Cost Savings',
      body: 'Save money on groceries by growing your own food.'
    },
  ]
}
