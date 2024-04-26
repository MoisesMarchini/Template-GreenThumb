import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { Product } from '../../shared/models/product';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { SelectOption } from '../../components/input-select/input-select.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ComponentsModule, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  id: string = '';
  product: Product = environment.products[0];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];

      this.loadProduct();
    });
  }

  loadProduct() {}

  getSelectionOptions() {
    const options: SelectOption[] = [
      {
        label: 'Vermelho',
        value: 'red',
      },
      {
        label: 'Verde',
        value: 'green',
      },
      {
        label: 'Azul',
        value: 'blue',
      },
    ];

    return options;
  }
}
