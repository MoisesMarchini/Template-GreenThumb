import { Component } from '@angular/core';
import { StatsCard } from '../../models/stats-card';

@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss'
})
export class StatsSectionComponent {
  cards: Partial<StatsCard>[] = [
    {
      title: 'Healthier Gardens, Happier Earth',
      body: 'Reduction in chemical usage for a greener environment',
      value: '30%'
    },
    {
      title: 'Thriving Ecosystems, Stronger Communities',
      body: 'Increase in local biodiversity for a sustainable future',
      value: '30%'
    },
    {
      title: 'Healthy Harvest, Happy People',
      body: 'Higher yield of organic produce for healthier living',
      value: '30%'
    },
  ]
}
