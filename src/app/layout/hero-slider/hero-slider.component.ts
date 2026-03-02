import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type HeroSlide = {
  src: string;      // e.g. 'assets/hero/fresh-fits.png'
  name: string;     // e.g. 'FRESH ’FITS'
  alt?: string;
  ctaLeft?: string;  // optional
  ctaRight?: string; // optional
};

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  @Input({ required: true }) slides: HeroSlide[] = [];
  @Input() autoPlay = true;
  @Input() intervalMs = 5000;

  activeIndex = signal(0);
  private timer?: number;

  ngOnInit() {
    if (this.autoPlay) this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  start() {
    this.stop();
    this.timer = window.setInterval(() => this.next(), this.intervalMs);
  }

  stop() {
    if (this.timer) window.clearInterval(this.timer);
    this.timer = undefined;
  }

  next() {
    if (!this.slides.length) return;
    this.activeIndex.update(i => (i + 1) % this.slides.length);
  }

  prev() {
    if (!this.slides.length) return;
    this.activeIndex.update(i => (i - 1 + this.slides.length) % this.slides.length);
  }

  goTo(i: number) {
    this.activeIndex.set(i);
  }

  trackByIndex = (i: number) => i;
}