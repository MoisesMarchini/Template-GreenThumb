import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Card } from '../../models/card';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
})
export class FAQSectionComponent {
  @Input() sectionProps: FAQSectionProps = environment.sectionProps.faq;

  expandAll = false;
  currentCardIndex = -1;

  setCard(index: number) {
    this.currentCardIndex = this.currentCardIndex === index ? -1 : index;
  }
}

export interface FAQSectionProps {
  title: string;
  body: string;
  bottomCard?: Card;
  actionButton?: {
    label: string;
    link: string;
  };
  cards: Card[];
}
