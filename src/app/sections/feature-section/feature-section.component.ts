import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.scss'
})
export class FeatureSectionComponent {
  sectionProps = {
    sideImgSrc: '/assets/images/pablita-gardener-inspecting-plants-with-magnifying-glass.png'
  }
}
