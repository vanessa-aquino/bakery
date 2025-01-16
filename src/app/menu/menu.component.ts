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

  cakes: any[] = [];
  cupcakes: any[] = [];
  candys: any[] = [];
  coffees: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.filteredProducts$.subscribe(products => {
      this.cakes = products.cakes;
      this.cupcakes = products.cupcakes;
      this.candys = products.candys;
      this.coffees = products.coffees;
    });

    const initialProducts = this.productService.getProducts();
    this.cakes = initialProducts.cakes;
    this.cupcakes = initialProducts.cupcakes;
    this.candys = initialProducts.candys;
    this.coffees = initialProducts.coffees;
  }
}
