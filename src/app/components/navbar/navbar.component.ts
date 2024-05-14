import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

export const NavProps = {
  height: 62,
  getHeight() {
    return `${this.height}px`;
  },
};
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {
    id: 'navbar',
  },
})
export class NavbarComponent implements OnInit {
  companyName = environment.companyName;
  isSticked = false;
  linksList = ['Gardening Tips', 'Products', 'Resources', 'More'];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.onScroll();
    this.getHeight();
  }

  getHeight() {
    NavProps.height = this.elementRef.nativeElement.offsetHeight;
    document.body.style.setProperty('--nav-height', NavProps.getHeight());
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isSticked = window.scrollY > 0;
  }

  @HostListener('window:resize')
  onResize() {
    this.getHeight();
  }
}
