import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  showTopButton = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showTopButton = window.scrollY > 300;
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
}