import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.component.html',
  styleUrl: './newsletter-section.component.scss',
})
export class NewsletterSectionComponent {
  @Input() sectionProps = environment.sectionProps.newsletter;
}