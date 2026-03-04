import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type WishlistItem = {
  id: string;
  image: string;
  title: string;
  price: number;       // current
  oldPrice?: number;   // optional
  badge?: string;      // "-30%"
  tag?: string;        // "Ramadan Pick"
};

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wishlist.page.html',
})
export class WishlistPage {
  // ✅ demo data (put empty [] to see empty state)
  items: WishlistItem[] = [
    {
      id: '1',
      image: '/images/firstwomenstop.avif', // change to your real image
      title: 'AE Oversized Graphic T-Shirt',
      price: 1330,
      oldPrice: 1900,
      badge: '-30%',
      tag: 'Ramadan Pick',
    },
     {
      id: '1',
      image: '/images/firstwomenstop.avif', // change to your real image
      title: 'AE Oversized Graphic T-Shirt',
      price: 1330,
      oldPrice: 1900,
      badge: '-30%',
      tag: 'Ramadan Pick',
    },
     {
      id: '1',
      image: '/images/firstwomenstop.avif', // change to your real image
      title: 'AE Oversized Graphic T-Shirt',
      price: 1330,
      oldPrice: 1900,
      badge: '-30%',
      tag: 'Ramadan Pick',
    },
     {
      id: '1',
      image: '/images/firstwomenstop.avif', // change to your real image
      title: 'AE Oversized Graphic T-Shirt',
      price: 1330,
      oldPrice: 1900,
      badge: '-30%',
      tag: 'Ramadan Pick',
    }
  ];

  egp(n: number) {
    return `EGP ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  remove(id: string) {
    this.items = this.items.filter(x => x.id !== id);
  }

  moveToBag(id: string) {
    // later: call cart service + remove from wishlist
    const item = this.items.find(x => x.id === id);
    console.log('Move to bag:', item);
  }
}