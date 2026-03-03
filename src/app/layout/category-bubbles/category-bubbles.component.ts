import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CategoryBubble = {
  src: string;      // assets/categories/firstimg.avif
  label: string;    // women's new arrivals
  href?: string;    // optional link
};

@Component({
  selector: 'app-category-bubbles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bubbles.component.html',
})
export class CategoryBubblesComponent {
  @Input({ required: true }) items: CategoryBubble[] = [];
  trackByIndex = (i: number) => i;
}