import { Component, Input } from '@angular/core';
import { ServiceCard } from '../../../models/service-card';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input() card: Partial<ServiceCard> = {};
}
