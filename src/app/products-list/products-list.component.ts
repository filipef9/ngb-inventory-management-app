import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  @Input()
  productList: Product[];

  @Output()
  productSelected: EventEmitter<Product>;

  private currentProductt: Product;

  constructor() {
    this.productSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProductt = product;
    this.productSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProductt) {
      return false;
    }

    return product.sku === this.currentProductt.sku;
  }
}
