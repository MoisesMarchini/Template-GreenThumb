import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, take } from 'rxjs';
import { setInterval } from 'timers';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  intervalTime = 10000;
  slides = [
    {
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      image: `'/assets/images/slider/slide 1.jpg'`,
    },
    {
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      image: `'/assets/images/slider/slide 2.jpg'`,
    },
    {
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      image: `'/assets/images/slider/slide 3.jpg'`,
    },
    {
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      image: `'/assets/images/slider/slide 4.jpg'`,
    },
    {
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      image: `'/assets/images/slider/slide 5.jpg'`,
    },
    {
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      image: `'/assets/images/slider/slide 1.jpg'`,
    },
    {
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      image: `'/assets/images/slider/slide 2.jpg'`,
    },
  ];

  ngAfterViewInit() {
    window.setInterval(() => this.next(), this.intervalTime);
  }

  next() {
    const firstSlide = this.slider.nativeElement.firstChild;

    if (firstSlide) this.slider.nativeElement.appendChild(firstSlide);
  }

  previous() {
    const lastSlide = this.slider.nativeElement.lastChild;

    if (lastSlide) this.slider.nativeElement.prepend(lastSlide);
  }
}
