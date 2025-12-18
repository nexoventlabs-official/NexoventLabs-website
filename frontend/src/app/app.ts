import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, NgZone } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { filter } from 'rxjs/operators';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappButtonComponent, CommonModule],
  template: `
    <app-navbar *ngIf="!isNotFoundPage"></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer *ngIf="!isNotFoundPage"></app-footer>
    <app-whatsapp-button *ngIf="!isNotFoundPage"></app-whatsapp-button>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class App implements OnInit, OnDestroy {
  private lenis: Lenis | null = null;
  private rafId: number | null = null;
  isNotFoundPage = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Check initial route first
      this.checkNotFoundPage(this.router.url);

      // Delay Lenis init until after first paint to avoid initial lag
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.initLenis();
        });
      });

      // Scroll to top on route change and check for 404 page
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        // Smoothly scroll to top on navigation
        this.lenis?.scrollTo(0, { immediate: true, force: true });
        this.checkNotFoundPage(event.urlAfterRedirects);
      });
    }
  }

  private initLenis() {
    this.lenis = new Lenis({
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,        // Slightly reduced for smoother feel
      touchMultiplier: 1.5,        // Better touch responsiveness
      lerp: 0.075,                 // Lower = smoother but slower deceleration
      duration: 1.2,               // Scroll animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easeOutExpo
      infinite: false,
      syncTouch: true,
      syncTouchLerp: 0.065,        // Smoother touch sync
      autoResize: true
    });

    // Run animation loop outside Angular zone for better performance
    this.ngZone.runOutsideAngular(() => {
      const raf = (time: number) => {
        this.lenis?.raf(time);
        this.rafId = requestAnimationFrame(raf);
      };
      this.rafId = requestAnimationFrame(raf);
    });
  }

  private checkNotFoundPage(url: string) {
    const knownRoutes = ['/', '/about', '/services', '/contact'];
    this.isNotFoundPage = !knownRoutes.includes(url);
  }

  ngOnDestroy() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
    this.lenis?.destroy();
    this.lenis = null;
  }
}
