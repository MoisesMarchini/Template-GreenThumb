import { Component, HostListener, ElementRef } from '@angular/core';
import { NavProps } from '../../components/navbar/navbar.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  scrolled = false;

  sectionProps = environment.sectionProps.hero;

  isHeroColumn = this.sectionProps.bgLayout == 'column';

  constructor(private elementRef: ElementRef){}

  getLayout(type?: 'column' | 'background') {
    if (!type || type == 'column') {
      if(this.sectionProps.bgLayout == 'column')
        return 'grid-rows-2 md:grid-rows-3';

      return 'place-content-center';
    }

    if (this.sectionProps.bgLayout == 'background' && (!type || type == 'background') ) {
      return 'min-h-svh';
    }

    return '';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 64;
  }

}
