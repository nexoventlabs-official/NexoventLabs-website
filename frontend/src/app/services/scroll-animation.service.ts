import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollAnimationService {
  private observer: IntersectionObserver | null = null;
  private pendingAnimations: Set<Element> = new Set();
  private rafScheduled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.pendingAnimations.add(entry.target);
              this.observer?.unobserve(entry.target);
            }
          });
          
          // Batch animations in a single rAF for better performance
          if (this.pendingAnimations.size > 0 && !this.rafScheduled) {
            this.rafScheduled = true;
            requestAnimationFrame(() => {
              this.pendingAnimations.forEach((el) => {
                el.classList.add('animate-in');
              });
              this.pendingAnimations.clear();
              this.rafScheduled = false;
            });
          }
        },
        { 
          threshold: 0.05,  // Lower threshold for earlier trigger
          rootMargin: '0px 0px -30px 0px'  // Reduced margin for faster response
        }
      );
    }
  }

  observe(element: Element) {
    // Add will-change hint before observing for GPU preparation
    (element as HTMLElement).style.willChange = 'transform, opacity';
    this.observer?.observe(element);
  }

  unobserve(element: Element) {
    this.observer?.unobserve(element);
    // Clean up will-change after animation
    setTimeout(() => {
      (element as HTMLElement).style.willChange = 'auto';
    }, 1000);
  }
}
