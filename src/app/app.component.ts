import { AfterViewInit, Component, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { SectionsModule } from './sections/sections.module';
import { CommonModule, registerLocaleData } from '@angular/common';

registerLocaleData(localePt);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule, SectionsModule, CommonModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: 'CUSTOM_FORMATS',
      useValue: {
        currency: {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          useGrouping: true,
          thousandSeparator: '.',
          decimalSeparator: ',',
        },
      },
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'Template-GreenThumb';

  ngAfterViewInit(): void {}
}
