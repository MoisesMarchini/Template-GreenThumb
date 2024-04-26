import { Component, Input } from '@angular/core';
import { StatsCard } from '../../../shared/models/stats-card';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss',
})
export class StatsCardComponent {
  @Input() options: Partial<StatsCard> = {};
}
