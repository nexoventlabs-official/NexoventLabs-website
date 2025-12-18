import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="hero">
      <div class="container" style="margin-left: 5px;">
        <div class="hero-content" #animateEl>
          <h1>We Build <span class="highlight">Digital</span> Solutions</h1>
          <p>Transform your business with cutting-edge web, mobile, AI, and automation solutions.</p>
          <div class="hero-buttons">
            <a routerLink="/services" class="btn-primary">Our Services</a>
            <a routerLink="/contact" class="btn-secondary">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>

    <section class="services-preview">
      <div class="container">
        <div class="section-header" #animateEl>
          <h2 class="section-title">What We Do</h2>
          <p class="section-subtitle">Comprehensive IT solutions tailored to your business needs</p>
        </div>
        <div class="services-grid">
          @for (service of services; track service.title) {
            <div class="service-card" [class.featured]="service.featured" [class.highlighted]="service.highlighted" #animateEl>
              <span class="material-icons icon">{{ service.icon }}</span>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          }
        </div>
        <div class="cta-center" #animateEl>
          <a routerLink="/services" class="btn-primary">View All Services</a>
        </div>
      </div>
    </section>

    <section class="stats" #statsSection>
      <div class="container">
        <div class="stats-grid">
          @for (stat of stats; track stat.label; let i = $index) {
            <div class="stat-item" #animateEl>
              <span class="stat-number">{{ animatedStats[i] }}{{ stat.suffix }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content" #animateEl>
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help transform your ideas into reality.</p>
          <a routerLink="/contact" class="btn-primary">Contact Us Today</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding-top: 80px;
      background-image: url('/hero.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .hero-content {
      max-width: 700px;
      opacity: 0;
      transform: translate3d(0, 40px, 0);
      transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      z-index: 1;
      backface-visibility: hidden;
    }
    .hero-content.animate-in {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .hero h1 {
      font-size: 4rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 24px;
      color: white;
    }
    .highlight {
      color: white;
    }
    .hero p {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 40px;
      line-height: 1.6;
    }
    .hero-buttons {
      display: flex;
      gap: 16px;
    }
    .hero-buttons .btn-primary {
      background: white;
      color: #1b18fe;
    }
    .hero-buttons .btn-primary:hover {
      background: rgba(255, 255, 255, 0.9);
    }
    .btn-secondary {
      padding: 14px 32px;
      border: 2px solid white;
      color: white;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .btn-secondary:hover {
      background: white;
      color: #1b18fe;
    }
    .services-preview {
      padding: 120px 0;
      background: #f8f9fa;
    }
    .section-header {
      text-align: center;
      margin-bottom: 60px;
      opacity: 0;
      transform: translate3d(0, 30px, 0);
      transition: opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      backface-visibility: hidden;
    }
    .section-header.animate-in {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-bottom: 50px;
    }
    .service-card {
      background: white;
      padding: 40px 30px;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      opacity: 0;
      transform: translate3d(0, 40px, 0);
      transition: opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      backface-visibility: hidden;
    }
    .service-card.animate-in {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition: opacity 0.5s ease-out, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
    }
    .service-card:hover {
      transform: translate3d(0, -10px, 0);
      box-shadow: 0 20px 40px rgba(27, 24, 254, 0.15);
    }
    .service-card .icon {
      font-size: 3rem;
      margin-bottom: 20px;
      color: #1b18fe;
    }
    .service-card h3 {
      font-size: 1.3rem;
      margin-bottom: 12px;
      color: #0a0a0a;
    }
    .service-card p {
      color: #6c757d;
      line-height: 1.6;
    }
    .service-card.highlighted {
      background: #1b18fe;
    }
    .service-card.highlighted .icon {
      color: white;
    }
    .service-card.highlighted h3 {
      color: white;
    }
    .service-card.highlighted p {
      color: rgba(255, 255, 255, 0.85);
    }
    .service-card.highlighted:hover {
      box-shadow: 0 20px 40px rgba(27, 24, 254, 0.35);
    }
    .cta-center {
      text-align: center;
      opacity: 0;
      transform: translate3d(0, 20px, 0);
      transition: opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      backface-visibility: hidden;
    }
    .cta-center.animate-in {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .stats {
      padding: 80px 0;
      background: white;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      text-align: center;
    }
    .stat-item {
      opacity: 0;
      transform: scale3d(0.9, 0.9, 1);
      transition: opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      backface-visibility: hidden;
    }
    .stat-item.animate-in {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
    .stat-number {
      display: block;
      font-size: 3rem;
      font-weight: 800;
      color: #1b18fe;
      margin-bottom: 8px;
    }
    .stat-label {
      color: #343a40;
      font-size: 1rem;
    }
    .cta-section {
      padding: 120px 0;
      background: white;
    }
    .cta-content {
      text-align: center;
      color: #0a0a0a;
      opacity: 0;
      transform: translate3d(0, 30px, 0);
      transition: opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      backface-visibility: hidden;
    }
    .cta-content.animate-in {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .cta-content h2 {
      font-size: 2.5rem;
      margin-bottom: 16px;
      color: #0a0a0a;
    }
    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 30px;
      color: #6c757d;
    }
    .cta-content .btn-primary {
      background: #1b18fe;
      color: white;
    }
    @media (max-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .service-card:nth-child(3) {
        background: #1b18fe;
      }
      .service-card:nth-child(3) .icon {
        color: white;
      }
      .service-card:nth-child(3) h3 {
        color: white;
      }
      .service-card:nth-child(3) p {
        color: rgba(255, 255, 255, 0.85);
      }
      .service-card:nth-child(3):hover {
        box-shadow: 0 20px 40px rgba(27, 24, 254, 0.35);
      }
      .service-card:nth-child(4) {
        background: white;
      }
      .service-card:nth-child(4) .icon {
        color: #1b18fe;
      }
      .service-card:nth-child(4) h3 {
        color: #0a0a0a;
      }
      .service-card:nth-child(4) p {
        color: #6c757d;
      }
      .service-card:nth-child(4):hover {
        box-shadow: 0 20px 40px rgba(27, 24, 254, 0.15);
      }
    }
    @media (max-width: 768px) {
      .hero {
        background-image: url('/hero.png');
        background-position: center center;
        background-size: cover;
      }
      .hero h1 { font-size: 2.5rem; }
      .hero-buttons { 
        flex-direction: row;
        gap: 10px;
      }
      .hero-buttons .btn-primary,
      .hero-buttons .btn-secondary {
        padding: 10px 16px;
        font-size: 0.85rem;
      }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .services-grid {
        grid-template-columns: 1fr;
      }
      .service-card:nth-child(3) {
        background: white;
      }
      .service-card:nth-child(3) .icon {
        color: #1b18fe;
      }
      .service-card:nth-child(3) h3 {
        color: #0a0a0a;
      }
      .service-card:nth-child(3) p {
        color: #6c757d;
      }
      .service-card:nth-child(3):hover {
        box-shadow: 0 20px 40px rgba(27, 24, 254, 0.15);
      }
      .service-card:nth-child(4) {
        background: #1b18fe;
      }
      .service-card:nth-child(4) .icon {
        color: white;
      }
      .service-card:nth-child(4) h3 {
        color: white;
      }
      .service-card:nth-child(4) p {
        color: rgba(255, 255, 255, 0.85);
      }
      .service-card:nth-child(4):hover {
        box-shadow: 0 20px 40px rgba(27, 24, 254, 0.35);
      }
    }
  `]
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('animateEl') animateElements!: QueryList<ElementRef>;

  services = [
    { icon: 'language', title: 'Web Development', description: 'Modern, responsive websites built with the latest technologies.', featured: true, highlighted: false },
    { icon: 'smartphone', title: 'App Development', description: 'Native and cross-platform mobile applications.', featured: false, highlighted: true },
    { icon: 'shopping_cart', title: 'E-commerce', description: 'Complete online store solutions to grow your business.', featured: true, highlighted: false },
    { icon: 'store', title: 'Local Business Software', description: 'Custom software for local business operations.', featured: false, highlighted: true },
    { icon: 'smart_toy', title: 'AI Chatbots', description: 'Intelligent chatbots for 24/7 customer support.', featured: true, highlighted: false },
    { icon: 'bolt', title: 'Automation', description: 'Streamline your workflows with smart automation.', featured: false, highlighted: true }
  ];

  stats = [
    { value: 50, suffix: '+', label: 'Projects Completed' },
    { value: 20, suffix: '+', label: 'Happy Clients' },
    { value: 1, suffix: '+', label: 'Years Experience' },
    { value: 24, suffix: '/7', label: 'Support' }
  ];

  animatedStats: number[] = [0, 0, 0, 0];
  private counterAnimated = false;

  @ViewChild('statsSection') statsSection!: ElementRef;

  constructor(
    private scrollAnimation: ScrollAnimationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    this.animateElements.forEach(el => this.scrollAnimation.observe(el.nativeElement));
    
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.counterAnimated) {
            this.counterAnimated = true;
            this.animateCounters();
          }
        });
      }, { threshold: 0.3 });
      
      observer.observe(this.statsSection.nativeElement);
    }
  }

  private animateCounters() {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    this.stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          this.animatedStats[index] = stat.value;
          clearInterval(timer);
        } else {
          this.animatedStats[index] = Math.floor(current);
        }
      }, stepTime);
    });
  }
}
