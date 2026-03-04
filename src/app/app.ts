import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FloatingActionsComponent } from './layout/floating-actions/floating-actions.component';
import { HomeSectionsComponent } from './layout/home-sections/home-sections.component';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FloatingActionsComponent, HomeSectionsComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
