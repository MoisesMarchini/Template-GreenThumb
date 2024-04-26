import { Component } from '@angular/core';
import { Card } from '../../shared/models/card';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
})
export class BenefitsSectionComponent {
  sectionProps = environment.sectionProps.benefits;
}
