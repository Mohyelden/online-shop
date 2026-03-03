import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InspiredCard = {
  src: string;
  alt?: string;
  isVideo?: boolean;  // if true show play icon
  href?: string;
};

@Component({
  selector: 'app-get-inspired',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-inspired.component.html',
})
export class GetInspiredComponent {
  @Input() title = 'Get Inspired!';
  @Input() subtitle =
    'Shop your favorite look! Mention @americaneagleme and #americaneaglemema and you could be featured right here!';

  @Input({ required: true }) cards: InspiredCard[] = [];

  scrollRight(scroller: HTMLElement) {
    scroller.scrollBy({ left: 900, behavior: 'smooth' });
  }
}