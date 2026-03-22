import { Component, AfterViewInit, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren, ViewChild, PLATFORM_ID, Inject, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  styleUrls: ['./home.component.scss'],
  template: `
    <section class="hero">
      <!-- Animated background particles -->
      <div class="hero-bg-particles">
        <div class="particle" *ngFor="let p of particles" [style.left.%]="p.x" [style.top.%]="p.y" [style.animationDelay.s]="p.delay" [style.width.px]="p.size" [style.height.px]="p.size"></div>
      </div>
      <div class="hero-grid">
        <!-- Left: Text Content -->
        <div class="hero-content" #animateEl>
          <div class="hero-badge">
            <span class="badge-dot"></span>
            AI-Powered Solutions
          </div>
          <h1>We Build <span class="highlight">Intelligent</span> Digital Experiences</h1>
          <p>From AI automation to web &amp; app development, WhatsApp bots to Meta Business — we engineer the future of your business.</p>
          <div class="hero-buttons">
            <a routerLink="/services" class="btn-primary">
              <span>Explore Services</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a routerLink="/contact" class="btn-secondary">Get in Touch</a>
          </div>
          <div class="hero-trust">
            <span class="trust-label">Trusted by businesses worldwide</span>
          </div>
        </div>

        <!-- Right: Phone Solar System Animation -->
        <div class="hero-visual" #animateEl>
          <div class="solar-system">
            <!-- Orbital rings -->
            <div class="orbit orbit-1"></div>
            <div class="orbit orbit-2"></div>
            <div class="orbit orbit-3"></div>

            <!-- Glow behind phone -->
            <div class="phone-glow"></div>

            <!-- iPhone 17 Pro Max -->
            <div class="iphone-device">
              <div class="iphone-frame">
                <div class="dynamic-island"><div class="island-cam"></div></div>
                <div class="iphone-screen">
                  <div class="status-bar">
                    <span class="status-time">{{ currentIST }}</span>
                    <div class="status-icons">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#1b18fe"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#1b18fe"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                    </div>
                  </div>
                  <div class="screen-app">
                    <div class="app-logo-wrap">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1b18fe" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
                    </div>
                    <div class="app-name">NexoventLabs</div>
                    <div class="app-tagline">AI Solutions Hub</div>
                    <div class="app-mini-cards">
                      <div class="mini-card mc-ai">
                        <svg width="12" height="12" viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a7 7 0 017-7h1V5.73A2 2 0 0112 2z" fill="#6366f1"/><circle cx="9" cy="13" r="1" fill="#fff"/><circle cx="15" cy="13" r="1" fill="#fff"/></svg>
                        <span>AI Active</span>
                      </div>
                      <div class="mini-card mc-wa">
                        <svg width="12" height="12" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z" fill="#25D366"/></svg>
                        <span>Bot On</span>
                      </div>
                    </div>
                    <div class="app-pulse"><div class="pulse-bar"></div></div>
                  </div>
                  <div class="home-indicator"></div>
                </div>
              </div>
            </div>

            <!-- Orbiting Service Nodes with real brand icons -->
            <div class="orbit-node node-0">
              <div class="node-icon node-ai">
                <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a7 7 0 017-7h1V5.73A2 2 0 0112 2z" fill="#7c3aed"/><circle cx="9" cy="13" r="1.2" fill="#fff"/><circle cx="15" cy="13" r="1.2" fill="#fff"/></svg>
              </div>
              <div class="node-label">AI Automation</div>
            </div>
            <div class="orbit-node node-1">
              <div class="node-icon node-web">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#1b18fe" stroke-width="2"/><path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" stroke="#1b18fe" stroke-width="2"/></svg>
              </div>
              <div class="node-label">Web Dev</div>
            </div>
            <div class="orbit-node node-2">
              <div class="node-icon node-app">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="3" stroke="#8b5cf6" stroke-width="2"/><circle cx="12" cy="18" r="1" fill="#8b5cf6"/></svg>
              </div>
              <div class="node-label">App Dev</div>
            </div>
            <div class="orbit-node node-3">
              <div class="node-icon node-whatsapp">
                <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.07-1.13.1-1.83-.11-.42-.13-.96-.31-1.65-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.19-1.17-1.56-1.17-2.97 0-1.42.74-2.12 1-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.02.9 2.17.07.14.12.31.02.5-.1.19-.14.31-.29.47-.14.17-.3.37-.43.5-.14.14-.3.3-.13.58.17.29.75 1.23 1.61 2 1.1.97 2.03 1.27 2.32 1.41.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.22.56.34.07.12.07.68-.17 1.36z" fill="#25D366"/></svg>
              </div>
              <div class="node-label">WhatsApp</div>
            </div>
            <div class="orbit-node node-4">
              <div class="node-icon node-meta">
                <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#0081FB"/></svg>
              </div>
              <div class="node-label">Meta Business</div>
            </div>
            <div class="orbit-node node-5">
              <div class="node-icon node-auto">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#f59e0b" stroke="#f59e0b" stroke-width="1"/></svg>
              </div>
              <div class="node-label">Automation</div>
            </div>
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
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  currentIST = '';
  private timeInterval: any;
  @ViewChildren('animateEl') animateElements!: QueryList<ElementRef>;

  // Hero animation data
  particles = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 4 + 2
  }));

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

  ngOnInit() {
    this.updateIST();
    if (isPlatformBrowser(this.platformId)) {
      this.timeInterval = setInterval(() => this.updateIST(), 1000);
    }
  }

  ngOnDestroy() {
    if (this.timeInterval) clearInterval(this.timeInterval);
  }

  private updateIST() {
    const now = new Date();
    const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const h = ist.getHours();
    const m = ist.getMinutes();
    this.currentIST = `${h}:${m < 10 ? '0' + m : m}`;
  }

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
