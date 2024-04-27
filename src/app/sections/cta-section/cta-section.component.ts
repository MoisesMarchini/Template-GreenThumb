import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss',
})
export class CTASectionComponent {
  @Input() sectionProps: CTASectionProps = environment.sectionProps.cta;
}

export interface CTASectionProps {
  title: string;
  body: string;
  actionButtons?: {
    primaryButton: {
      label: string;
      link: string;
    };
    secondaryButton?: {
      label: string;
      link: string;
    };
  };
}
