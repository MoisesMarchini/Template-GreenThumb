import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { SectionsModule } from './sections/sections.module';
import { CommonModule } from '@angular/common';
import { WindowScrollService } from './directives/window-scroll.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule, SectionsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'PetPal';
  customProps = environment.customProps;

  constructor(private scrollService: WindowScrollService) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrollService.setScrollY(window.scrollY);
  }

  ngAfterViewInit(): void {}
}
