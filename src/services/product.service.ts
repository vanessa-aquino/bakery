import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = {
    cakes: [
      {name: 'Bolo de Cereja', price: 25.00, img: '/assets/img/cake-one.jpg'},
      {name: 'Bolo de Chocolate', price: 30.00, img: '/assets/img/cake-three.jpg'},
      {name: 'Bolo de Baunilha', price: 28.00, img: '/assets/img/cake-four.jpg'},
      {name: 'Bolo de Maracujá', price: 28.00, img: '/assets/img/cake-five.jpg'},
      {name: 'Bolo de Morango', price: 27.00, img: '/assets/img/cake-seven.jpg'},
      {name: 'Bolo de Amora', price: 26.00, img: '/assets/img/cake-eight.jpg'},
      {name: 'Bolo Dois Sabores', price: 30.0, img: '/assets/img/cake-nine.jpg'},
    ],
    cupcakes: [
      {name: 'Ferrero Rocher', price: 14.00, img: '/assets/img/cupcake-one.jpg'},
      {name: 'Cerejinha', price: 8.00, img: '/assets/img/cupcake-two.jpg'},
      {name: 'Menta com Chocolate', price: 10.00, img: '/assets/img/cupcake-three.jpg'},
      {name: 'Red Velvet', price: 10.00, img: '/assets/img/cupcake-four.jpg'},
      {name: 'Uvinha', price: 8.00, img: '/assets/img/cupcake-five.jpg'},
      {name: 'Baunilha', price: 7.00, img: '/assets/img/cupcake-six.jpg'},
      {name: 'Chocolate com Laranja', price: 12.00, img: '/assets/img/cupcake-eight.jpg'},
    ],
    candys: [
      {name: 'Waffle', price: 12.00, img: '/assets/img/waffle.jpg'},
      {name: 'Panqueca Americana', price: 12.00, img: '/assets/img/pancake.jpg'},
      {name: 'Macaron', price: 4.50, img: '/assets/img/macaron.jpg'},
      {name: 'Petit Gateu', price: 14.00, img: '/assets/img/gateu.jpg'},
      {name: 'Donuts', price: 10.00, img: '/assets/img/donuts.jpg'},
      {name: 'Brownie', price: 10.00, img: '/assets/img/brownie.jpg'},
      {name: 'Cookie', price: 3.50, img: '/assets/img/cookie.jpg'},
    ],
    coffees: [
      {name: 'Café Coado', price: 5.50, img: '/assets/img/coffee.jpg'},
      {name: 'Chocolate Quente', price: 12.00, img: '/assets/img/chocolate.jpg'},
      {name: 'Cappuccino', price: 12.00, img: '/assets/img/cappuccino.jpg'},
    ],
  };

  getProducts() {
    return this.products;
  }
}
