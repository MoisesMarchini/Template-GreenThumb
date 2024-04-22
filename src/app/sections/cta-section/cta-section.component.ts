import { Component } from '@angular/core';
import { title } from 'process';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss'
})
export class CTASectionComponent {
  sectionProps = environment.sectionProps.cta;
}
