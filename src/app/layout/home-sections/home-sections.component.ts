import { Component } from '@angular/core';
import { HeroSlide, HeroSliderComponent } from '../hero-slider/hero-slider.component';
import { CategoryBubble, CategoryBubblesComponent } from '../category-bubbles/category-bubbles.component';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';
import { TrendingNowComponent } from '../trending-now/trending-now.component';
import { GetInspiredComponent, InspiredCard } from '../get-inspired/get-inspired.component';

type PromoButton = { label: string; href?: string };
type JeansBanner = {
  bgImage: string;
  title: string;
  subtitle: string;
  description: string;
  leftBtn: PromoButton;
  rightBtn: PromoButton;
};

@Component({
  selector: 'app-home-sections',
  standalone: true,
  imports: [
    HeroSliderComponent,
    CategoryBubblesComponent,
    PromoBannerComponent,
    TrendingNowComponent,
    GetInspiredComponent,
  ],
  templateUrl: './home-sections.component.html',
})
export class HomeSectionsComponent {
  heroSlides: HeroSlide[] = [
    {
      src: '/images/man-women.avif',
      name: "FRESH 'FITS",
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

  categoryItems: CategoryBubble[] = [
    { src: '/images/firstimg.avif', label: "women's new arrivals", href: '#' },
    { src: '/images/secondimg.avif', label: "women's tops", href: '#' },
    { src: '/images/thirdimg.avif', label: "women's bottoms", href: '#' },
    { src: '/images/fourthimg.avif', label: "men's new arrivals", href: '#' },
    { src: '/images/fifthimg.avif', label: "men's tops", href: '#' },
    { src: '/images/siximg.avif', label: "men's bottoms", href: '#' },
    { src: '/images/seventhimg.avif', label: 'AE24/7 men', href: '#' },
  ];

  jeansBanner: JeansBanner = {
    bgImage: '/images/jeanesimg.avif',
    title: '#AEJeans',
    subtitle: 'The Best Since 1977',
    description:
      "Explore all our on-trend jean fits and comfy denim fabrics to find the pair you'll never want to take off.",
    leftBtn: { label: "Shop Women's Jeans", href: '#' },
    rightBtn: { label: "Shop Men's Jeans", href: '#' },
  };

  inspiredCards: InspiredCard[] = [
    { src: '/images/sixwomenstop.avif' },
    { src: '/images/fifthwomenstop.avif' },
    { src: '/images/fouthwomenstop.avif' },
    { src: '/images/secondwomenstop.avif' },
    { src: '/images/secondwomenstop.avif' },
    { src: '/images/secondwomenstop.avif' },
    { src: '/images/firstwomenstop.avif', isVideo: true },
  ];
}
