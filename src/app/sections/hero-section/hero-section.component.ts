import { Component, HostListener, ElementRef } from '@angular/core';
import { NavProps } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  heroType: 'column' | 'background' = 'background';
  textColor: string = 'white';
  scrolled = false;

  constructor(private elementRef: ElementRef){}

  isHeroColumn = this.heroType == 'column';

  heroProps = {
    bgImgSrc: '/assets/images/hero-bg.jpg'
  }

  getLayout(type?: 'column' | 'background') {
    if (!type || type == 'column') {
      if(this.heroType == 'column')
        return 'grid-rows-2 md:grid-rows-3';

      return 'place-content-center';
    }

    if (this.heroType == 'background' && (!type || type == 'background') ) {
      return 'min-h-svh';
    }

    return '';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 64;
  }

}
