import { Component } from '@angular/core';
import { SectionsModule } from '../../sections/sections.module';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionsModule, ComponentsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
