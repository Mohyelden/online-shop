import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type CartItem = {
  id: string;
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  discountBadge?: string; // "-30%"
  color: string;
  size: string;
  itemCode: string;
  qty: number;
};

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.page.html',
})
export class CartPage {
  items: CartItem[] = [
    {
      id: '1',
      image: '/images/firstwomenstop.avif', // change to your real image
      title: 'AE Oversized Graphic T-Shirt',
      price: 1330,
      oldPrice: 1900,
      discountBadge: '-30%',
      color: 'Bold Black',
      size: 'XS',
      itemCode: '343160219',
      qty: 1,
    },
    {
      id: '1',
      image: '/images/firstwomenstop.avif', // change to your real image
      title: 'AE Oversized Graphic T-Shirt',
      price: 1330,
      oldPrice: 1900,
      discountBadge: '-30%',
      color: 'Bold Black',
      size: 'XS',
      itemCode: '343160219',
      qty: 1,
    }
  ];

  qtyOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  egp(n: number) {
    return `EGP ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  setQty(itemId: string, qty: number) {
    const item = this.items.find(x => x.id === itemId);
    if (!item) return;
    item.qty = qty;
  }

  remove(itemId: string) {
    this.items = this.items.filter(x => x.id !== itemId);
  }

  moveToFavorites(itemId: string) {
    // later: call wishlist service then remove from cart
    const item = this.items.find(x => x.id === itemId);
    console.log('Move to favorites:', item);
  }
}