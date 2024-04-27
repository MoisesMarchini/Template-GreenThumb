import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
})
export class BenefitsSectionComponent {
  @Input() sectionProps: BenefitsSectionProps =
    environment.sectionProps.benefits;
}

export interface BenefitsSectionProps {
  reversed?: boolean;
  sideImgSrc: string;
  subtitle: string;
  title: string;
  body?: string;
  cards: Card[];
}
