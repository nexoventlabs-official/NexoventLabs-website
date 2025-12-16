import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="container nav-content">
        <a routerLink="/" class="logo">
          <img src="logo_text_nobg.png" alt="Nexovent Labs" class="logo-img" [class.white-logo]="!isScrolled"><span class="logo-text"></span>
        </a>
        <ul class="nav-links" [class.active]="menuOpen">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a></li>
          <li><a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a></li>
        </ul>
        <button class="menu-toggle" (click)="toggleMenu()" [class.active]="menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 20px 0;
      transition: all 0.3s ease;
      background: transparent;
    }
    .navbar.scrolled {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      padding: 15px 0;
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      display: flex;
      align-items: center;
    }
    .logo-img {
      height: 40px;
      width: auto;
      transition: filter 0.3s ease;
    }
    .logo-img.white-logo {
      filter: brightness(0) invert(1);
    }
    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0a0a0a;
    }
    .nav-links {
      display: flex;
      list-style: none;
      gap: 40px;
    }
    .nav-links a {
      font-weight: 500;
      color: white;
      position: relative;
      padding: 5px 0;
      transition: color 0.3s ease;
    }
    .navbar.scrolled .nav-links a {
      color: #343a40;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: white;
      transition: width 0.3s ease, background 0.3s ease;
    }
    .navbar.scrolled .nav-links a::after {
      background: #1b18fe;
    }
    .nav-links a:hover, .nav-links a.active {
      color: rgba(255, 255, 255, 0.8);
    }
    .navbar.scrolled .nav-links a:hover, .navbar.scrolled .nav-links a.active {
      color: #1b18fe;
    }
    .nav-links a:hover::after, .nav-links a.active::after {
      width: 100%;
    }
    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
    }
    .menu-toggle span {
      width: 25px;
      height: 2px;
      background: #343a40;
      transition: all 0.3s ease;
    }
    @media (max-width: 768px) {
      .menu-toggle { display: flex; }
      .menu-toggle span {
        background: white;
      }
      .navbar.scrolled .menu-toggle span {
        background: #343a40;
      }
      .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.3s ease;
        pointer-events: none;
      }
      .nav-links a {
        color: #343a40;
      }
      .nav-links a::after {
        background: #1b18fe;
      }
      .nav-links a:hover, .nav-links a.active {
        color: #1b18fe;
      }
      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}
