import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  getBreadcrumbItems() {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.buildBreadcrumb(this.activatedRoute.root))
    );
  }

  private buildBreadcrumb(
    route: ActivatedRoute,
    path: string = '',
    breadcrumbItems: any[] = []
  ): any {
    const children = route.children;
    if (children.length === 0) {
      return breadcrumbItems;
    }
    for (const child of children) {
      const routeURL = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL !== '') {
        path += `/${routeURL}`;
      }
      const label = child.snapshot.data['breadcrumb'] || '';
      if (label !== '') {
        breadcrumbItems.push({ label, link: path });
      }
      return this.buildBreadcrumb(child, path, breadcrumbItems);
    }
  }
}
