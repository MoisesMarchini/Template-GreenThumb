import { Component, Input } from '@angular/core';
import { FeatureCard } from '../../../models/feature-card';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() options: Partial<FeatureCard>  = {};
}
