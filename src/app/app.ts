import { Component, signal } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FloatingActionsComponent } from './layout/floating-actions/floating-actions.component';
import { RouterOutlet } from '@angular/router';
import { HeroSliderComponent } from "./layout/hero-slider/hero-slider.component";
import { CategoryBubblesComponent } from "./layout/category-bubbles/category-bubbles.component";
import { PromoBannerComponent } from "./layout/promo-banner/promo-banner.component";
import { TrendingNowComponent } from "./layout/trending-now/trending-now.component";
import { GetInspiredComponent } from "./layout/get-inspired/get-inspired.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FloatingActionsComponent, RouterOutlet, HeroSliderComponent, CategoryBubblesComponent, PromoBannerComponent, TrendingNowComponent, GetInspiredComponent],
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
categoryItems = [
  { src: '/images/firstimg.avif',   label: "women's new arrivals", href: '#' },
  { src: '/images/secondimg.avif',  label: "women's tops",         href: '#' },
  { src: '/images/thirdimg.avif',   label: "women's bottoms",      href: '#' },
  { src: '/images/fourthimg.avif',  label: "men's new arrivals",   href: '#' },
  { src: '/images/fifthimg.avif',   label: "men's tops",           href: '#' },
  { src: '/images/siximg.avif',   label: "men's bottoms",        href: '#' },
  { src: '/images/seventhimg.avif', label: "AE24/7 men",           href: '#' },
];

jeansBanner = {
  bgImage: '/images/jeanesimg.avif',
  title: '#AEJeans',
  subtitle: 'The Best Since 1977',
  description:
    "Explore all our on-trend jean fits & comfy denim fabrics to find the pair you'll never want to take off.",
  leftBtn: { label: "Shop Women's Jeans", href: '#' },
  rightBtn: { label: "Shop Men's Jeans", href: '#' },
};

inspiredCards = [
  { src: '/images/sixwomenstop.avif' },
  { src: '/images/fifthwomenstop.avif' },
  { src: '/images/fouthwomenstop.avif' },
  { src: '/images/secondwomenstop.avif' },
  { src: '/images/firstwomenstop.avif', isVideo: true },
];
}
