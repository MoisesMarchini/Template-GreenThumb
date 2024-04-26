import { Component } from '@angular/core';
import { StatsCard } from '../../shared/models/stats-card';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss',
})
export class StatsSectionComponent {
  sectionProps = environment.sectionProps.stats;
}
