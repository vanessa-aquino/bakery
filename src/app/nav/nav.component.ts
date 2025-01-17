import { Component, } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  searchTerm: string = '';

  constructor(private productService: ProductService) {};

  onSearch(): void {
    this.productService.filterProducts(this.searchTerm);
  }
}
