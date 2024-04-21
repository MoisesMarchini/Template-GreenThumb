import { Component } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FAQSectionComponent {
  currentCardIndex = -1;
  cards: Card[] = [
    {
      title: 'How do I start?',
      body: 'To start your sustainable gardening journey, assess your available space, research suitable plants, and create a plan for maintenance.'
    },
    {
      title: 'What tools do I need?',
      body: `Basic tools for sustainable gardening include a trowel, pruners, watering can, and compost bin. Additional tools may be required based on your specific needs.`
    },
    {
      title: `How often should I water?`,
      body: `The frequency of watering depends on various factors such as plant type, weather conditions, and soil moisture levels. Generally, aim to keep the soil evenly moist, but not waterlogged.`
    },
    {
      title: `How do I prevent pests?`,
      body: `Implementing natural pest control methods like companion planting, using organic pesticides, and maintaining a healthy garden ecosystem can help prevent pests.`
    },
    {
      title: `How do I compost?`,
      body: `Composting involves collecting organic waste materials like kitchen scraps, yard trimmings, and leaves in a compost bin. Regularly turn the compost to facilitate decomposition.`
    },
  ]

  setCard(index: number) {
    this.currentCardIndex = this.currentCardIndex === index ? -1 : index;
  }
}
