import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, CarouselComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bakery';
}
