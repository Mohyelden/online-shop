import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TrendingTab = {
  id: string;
  label: string;
};

type TrendingItem = {
  image: string;
  title: string;
  price: number;   // EGP
};

@Component({
  selector: 'app-trending-now',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending-now.component.html',
})
export class TrendingNowComponent {
  tabs: TrendingTab[] = [
    { id: 'women_tops', label: "Women's Tops" },
    { id: 'men_tops', label: "Men's Tops" },
    { id: 'men_bottom', label: "Men's Bottom" },
    { id: 'women_bottom', label: "Women's Bottom" },
  ];

  activeTabId = 'women_tops';

  // ✅ For now: all tabs use women tops images until backend later
  items: TrendingItem[] = [
    { image: '/images/firstwomenstop.avif',  title: 'Tie Side Midi Shirt Dress', price: 3800 },
    { image: '/images/secondwomenstop.avif', title: 'Tie Side Midi Shirt Dress', price: 3800 },
    { image: '/images/thirdwomenstop.avif',  title: 'AE Long-Sleeve Maxi Shirt Dress', price: 3800 },
    { image: '/images/fouthwomenstop.avif', title: 'AE Classic Polo Shirt', price: 1800 },
    { image: '/images/fifthwomenstop.avif',  title: 'AE Button-Up Ruffle Midi Dress', price: 3800 },
    { image: '/images/sixwomenstop.avif',    title: 'AE Saturday Fleece Cardigan Sweater', price: 3300 },
    { image: '/images/seventhwomenstop.avif',title: 'AE Long Sleeve Tee', price: 1500 },
  ];

  setTab(tabId: string) {
    this.activeTabId = tabId;
    // later: load items based on tabId from backend
  }

  scrollLeft(container: HTMLElement) {
    container.scrollBy({ left: -900, behavior: 'smooth' });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: 900, behavior: 'smooth' });
  }

  egp(n: number) {
    // "EGP 3,800.00"
    return `EGP ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}