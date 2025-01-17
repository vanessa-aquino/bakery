import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = {
    cakes: [
      {name: 'Bolo de Cereja', price: 25.00, img: '/assets/img/cake-one.jpg', category: 'cake'},
      {name: 'Bolo de Chocolate', price: 30.00, img: '/assets/img/cake-three.jpg', category: 'cake'},
      {name: 'Bolo de Baunilha', price: 28.00, img: '/assets/img/cake-four.jpg', category: 'cake'},
      {name: 'Bolo de Maracujá', price: 28.00, img: '/assets/img/cake-five.jpg', category: 'cake'},
      {name: 'Bolo de Morango', price: 27.00, img: '/assets/img/cake-seven.jpg', category: 'cake'},
      {name: 'Bolo de Amora', price: 26.00, img: '/assets/img/cake-eight.jpg', category: 'cake'},
      {name: 'Bolo Dois Sabores', price: 30.0, img: '/assets/img/cake-nine.jpg', category: 'cake'},
    ],
    cupcakes: [
      {name: 'Ferrero Rocher', price: 14.00, img: '/assets/img/cupcake-one.jpg', category: 'cupcake'},
      {name: 'Cerejinha', price: 8.00, img: '/assets/img/cupcake-two.jpg', category: 'cupcake'},
      {name: 'Menta com Chocolate', price: 10.00, img: '/assets/img/cupcake-three.jpg', category: 'cupcake'},
      {name: 'Red Velvet', price: 10.00, img: '/assets/img/cupcake-four.jpg', category: 'cupcake'},
      {name: 'Uvinha', price: 8.00, img: '/assets/img/cupcake-five.jpg', category: 'cupcake'},
      {name: 'Baunilha', price: 7.00, img: '/assets/img/cupcake-six.jpg', category: 'cupcake'},
      {name: 'Chocolate com Laranja', price: 12.00, img: '/assets/img/cupcake-eight.jpg', category: 'cupcake'},
    ],
    candys: [
      {name: 'Waffle', price: 12.00, img: '/assets/img/waffle.jpg', category: 'candy'},
      {name: 'Panqueca Americana', price: 12.00, img: '/assets/img/pancake.jpg', category: 'candy'},
      {name: 'Macaron', price: 4.50, img: '/assets/img/macaron.jpg', category: 'candy'},
      {name: 'Petit Gateu', price: 14.00, img: '/assets/img/gateu.jpg', category: 'candy'},
      {name: 'Donuts', price: 10.00, img: '/assets/img/donuts.jpg', category: 'candy'},
      {name: 'Brownie', price: 10.00, img: '/assets/img/brownie.jpg', category: 'candy'},
      {name: 'Cookie', price: 3.50, img: '/assets/img/cookie.jpg', category: 'candy'},
    ],
    coffees: [
      {name: 'Café Coado', price: 5.50, img: '/assets/img/coffee.jpg', category: 'coffee'},
      {name: 'Chocolate Quente', price: 12.00, img: '/assets/img/chocolate.jpg', category: 'coffee'},
      {name: 'Cappuccino', price: 12.00, img: '/assets/img/cappuccino.jpg', category: 'coffee'},
    ],
  };

  getProducts() {
    return this.products;
  }

  private filteredProducts = new BehaviorSubject<any[]>(this.getAllProducts());
  filteredProducts$ = this.filteredProducts.asObservable();

  constructor() {}

  getAllProducts() {
    return [
      ...this.products.cakes,
      ...this.products.cupcakes,
      ...this.products.candys,
      ...this.products.coffees,
    ]
  }

  filterProducts(searchTerm: string) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = this.getAllProducts().filter(product => product.name.toLowerCase().includes(lowerCaseSearchTerm));
    this.filteredProducts.next(filtered);
  }

}
