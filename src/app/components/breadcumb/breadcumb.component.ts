import { Component, Input } from '@angular/core';
import { BreadcrumbService } from './breadcumb.service';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss',
})
export class BreadcumbComponent {
  @Input() items: { label: string; link?: string }[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}
}
