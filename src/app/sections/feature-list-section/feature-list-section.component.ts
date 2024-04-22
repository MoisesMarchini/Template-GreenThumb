import { Component } from '@angular/core';
import { title } from 'process';
import { Card } from '../../models/card';
import { FeatureCard } from '../../models/feature-card';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-feature-list-section',
  templateUrl: './feature-list-section.component.html',
  styleUrl: './feature-list-section.component.scss'
})
export class FeatureListSectionComponent {
  sectionProps = environment.sectionProps.featureList;
}
