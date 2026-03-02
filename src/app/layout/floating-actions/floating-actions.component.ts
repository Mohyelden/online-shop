import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-actions.component.html',
})
export class FloatingActionsComponent {
  showTopButton = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showTopButton = window.scrollY > 300;
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}