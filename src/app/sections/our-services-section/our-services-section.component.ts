import { Component } from '@angular/core';
import { ServiceCard } from '../../models/service-card';

@Component({
  selector: 'app-our-services-section',
  templateUrl: './our-services-section.component.html',
  styleUrl: './our-services-section.component.scss',
})
export class OurServicesSectionComponent {
  sectionProps = {
    title: 'Tailored Solutions for a Sparkling Home.',
    subtitle: 'Our Cleaning Services',
  };
  cards: ServiceCard[] = [
    {
      title: 'Regular Cleaning',
      body: 'Keep your home consistently clean with our regular cleaning services.',
      fontawesomeIcon: 'fa-solid fa-broom',
    },
    {
      title: 'Deep Cleaning',
      body: 'Restore freshness to every corner with our thorough deep cleaning treatments.',
      fontawesomeIcon: 'fa-solid fa-soap',
    },
    {
      title: 'Specialized Services',
      body: 'From carpet cleaning to window washing, we have you covered for all your specialized needs.',
      fontawesomeIcon: 'fa-solid fa-hand-sparkles',
    },
  ];
}
