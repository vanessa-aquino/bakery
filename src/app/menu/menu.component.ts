import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  searchTerm: string = '';

  cakes: any[] = [];
  cupcakes: any[] = [];
  candys: any[] = [];
  coffees: any[] = [];
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.filteredProducts$.subscribe(products => {
      this.products = products;
      this.filterProducts();
    });
  }

  onSearch(): void {
    this.filterProducts();
  }

  private filterProducts(): void {
    if (this.searchTerm) {
      this.cakes = this.products.filter(product => 
        product.category === 'cake' && product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      this.cupcakes = this.products.filter(product => 
        product.category === 'cupcake' && product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      this.candys = this.products.filter(product => 
        product.category === 'candy' && product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      this.coffees = this.products.filter(product => 
        product.category === 'coffee' && product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.cakes = this.products.filter(product => product.category === 'cake');
      this.cupcakes = this.products.filter(product => product.category === 'cupcake');
      this.candys = this.products.filter(product => product.category === 'candy');
      this.coffees = this.products.filter(product => product.category === 'coffee');
    }
  }
}
