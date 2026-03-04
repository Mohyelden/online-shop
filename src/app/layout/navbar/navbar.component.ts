import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  topLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'Find Stores', href: '#' },
    { label: 'العربية', href: '#' },
  ];

  navLinks = [
    { label: 'New', href: '#' },
    { label: 'Spring', href: '#' },
    { label: 'Women', href: '#' },
    { label: 'Men', href: '#' },
    { label: 'Jeans', href: '#' },
    { label: 'Clearance', href: '#' },
  ];
}
