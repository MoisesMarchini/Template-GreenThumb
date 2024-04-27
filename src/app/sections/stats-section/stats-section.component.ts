import { Component, Input } from '@angular/core';
import { StatsCard } from '../../models/stats-card';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss',
})
export class StatsSectionComponent {
  @Input() sectionProps = environment.sectionProps.stats;
}
