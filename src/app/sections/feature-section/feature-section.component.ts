import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Card } from '../../models/card';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.scss',
})
export class FeatureSectionComponent {
  @Input() sectionProps: FeatureSectionProps = environment.sectionProps.feature;
}

export interface FeatureSectionProps {
  reversed?: boolean;
  showCtaBtn?: boolean;
  sideImgSrc: string;
  subtitle: string;
  title: string;
  body?: string;
  cards: Card[];
}
