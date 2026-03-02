import { Component, signal } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FloatingActionsComponent } from './layout/floating-actions/floating-actions.component';
import { RouterOutlet } from '@angular/router';
import { HeroSliderComponent } from "./layout/hero-slider/hero-slider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FloatingActionsComponent, RouterOutlet, HeroSliderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-shop');
  heroSlides = [
  {
    src: '/images/man-women.avif',
    name: "FRESH ’FITS",
    ctaLeft: 'Shop Women',
    ctaRight: 'Shop Men',
  },
  {
    src: '/images/man-women2.avif',
    name: 'LOVE YOUR LAYERS',
    ctaLeft: 'Shop Women',
    ctaRight: 'Shop Men',
  },
  {
    src: '/images/man-women3.avif',
    name: 'LET LOOSE',
    ctaLeft: 'Shop Women',
    ctaRight: 'Shop Men',
  },
];
}
