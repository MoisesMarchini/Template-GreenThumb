import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

export const NavProps = {
  height: 0,
  getHeight() {
    return `${this.height}px`;
  }
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {
    id: 'navbar'
  }
})
export class NavbarComponent implements OnInit {
  isSticked = false;
  linksList = ['Gardening Tips', 'Products', 'Resources', 'More'];

  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    this.getHeight();
  }

  getHeight() {
    NavProps.height = this.elementRef.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll')
  onScroll() {
    console.log(window.screenTop, window.scrollY)
    this.isSticked = window.scrollY > 10;
  }
}
