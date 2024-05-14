import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-section',
  templateUrl: './base-section.component.html',
  styleUrl: './base-section.component.scss',
})
export class BaseSectionComponent {
  @Input() wavesBefore: boolean = false;
  @Input() wavesAfter: boolean = false;
}
