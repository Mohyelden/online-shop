import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type PromoButton = { label: string; href?: string };

@Component({
  selector: 'app-promo-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-banner.component.html',
})
export class PromoBannerComponent {
  @Input({ required: true }) bgImage = '';     // assets/banners/jeanesimg.avif
  @Input() title = '#AEJeans';
  @Input() subtitle = 'The Best Since 1977';
  @Input() description =
    "Explore all our on-trend jean fits & comfy denim fabrics to find the pair you'll never want to take off.";

  @Input() leftBtn: PromoButton = { label: "Shop Women's Jeans", href: '#' };
  @Input() rightBtn: PromoButton = { label: "Shop Men's Jeans", href: '#' };
}