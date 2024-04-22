import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FAQSectionComponent {
  sectionProps = environment.sectionProps.faq;
  currentCardIndex = -1;

  setCard(index: number) {
    this.currentCardIndex = this.currentCardIndex === index ? -1 : index;
  }
}
