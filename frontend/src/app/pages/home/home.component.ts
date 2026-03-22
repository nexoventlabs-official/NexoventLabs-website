import { Component, AfterViewInit, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren, ViewChild, PLATFORM_ID, Inject, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  encapsulation: ViewEncapsulation.None,
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
  styles: [`
    /* ===== HERO SECTION — WHITE + BLUE THEME ===== */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding-top: 80px;
      background: linear-gradient(160deg, #ffffff 0%, #f0f4ff 40%, #e8eeff 70%, #ffffff 100%);
    }

    /* Floating particles */
    .hero-bg-particles {
      position: absolute;
      inset: 0;
      z-index: 0;
      overflow: hidden;
    }
    .particle {
      position: absolute;
      border-radius: 50%;
      background: rgba(27, 24, 254, 0.12);
      animation: particleFloat 8s ease-in-out infinite;
      pointer-events: none;
    }
    @keyframes particleFloat {
      0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
      50% { transform: translateY(-40px) scale(1.3); opacity: 0.5; }
    }

    /* Grid layout */
    .hero-grid {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      position: relative;
      z-index: 1;
      width: 100%;
    }

    /* Hero content (left) */
    .hero-content {
      max-width: 600px;
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      z-index: 1;
    }
    .hero-content.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    /* Badge */
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px;
      background: rgba(27, 24, 254, 0.06);
      border: 1px solid rgba(27, 24, 254, 0.15);
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 600;
      color: #1b18fe;
      margin-bottom: 28px;
    }
    .badge-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #1b18fe;
      animation: badgePulse 2s ease-in-out infinite;
    }
    @keyframes badgePulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(27, 24, 254, 0.4); }
      50% { box-shadow: 0 0 0 6px rgba(27, 24, 254, 0); }
    }

    .hero h1 {
      font-size: 3.6rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 24px;
      color: #0a0a0a;
      letter-spacing: -0.02em;
    }
    .highlight {
      color: #1b18fe;
    }
    .hero p {
      font-size: 1.15rem;
      color: #6c757d;
      margin-bottom: 36px;
      line-height: 1.7;
      max-width: 520px;
    }

    /* Buttons */
    .hero-buttons {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .hero-buttons .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #1b18fe;
      color: #fff;
      padding: 14px 30px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      border: none;
      box-shadow: 0 4px 20px rgba(27, 24, 254, 0.25);
    }
    .hero-buttons .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(27, 24, 254, 0.4);
    }
    .hero-buttons .btn-secondary {
      padding: 14px 30px;
      border: 2px solid #1b18fe;
      color: #1b18fe;
      border-radius: 12px;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }
    .hero-buttons .btn-secondary:hover {
      background: #1b18fe;
      color: #fff;
    }

    /* Trust */
    .hero-trust {
      margin-top: 40px;
      padding-top: 28px;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
    }
    .trust-label {
      font-size: 0.82rem;
      color: #adb5bd;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 500;
    }

    /* ===== HERO VISUAL (RIGHT) ===== */
    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      opacity: 0;
      transform: translateY(40px);
      transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
    }
    .hero-visual.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    /* Solar System Container */
    .solar-system {
      position: relative;
      width: 480px;
      height: 480px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Orbital Rings */
    .orbit {
      position: absolute;
      border-radius: 50%;
      border: 1.5px dashed rgba(27, 24, 254, 0.10);
      animation: orbitPulse 4s ease-in-out infinite;
    }
    .orbit-1 {
      width: 240px;
      height: 240px;
      border-color: rgba(27, 24, 254, 0.12);
      animation-delay: 0s;
    }
    .orbit-2 {
      width: 350px;
      height: 350px;
      border-color: rgba(27, 24, 254, 0.08);
      animation-delay: 1.3s;
    }
    .orbit-3 {
      width: 460px;
      height: 460px;
      border-color: rgba(27, 24, 254, 0.05);
      animation-delay: 2.6s;
    }
    @keyframes orbitPulse {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.02); }
    }

    /* Phone Glow */
    .phone-glow {
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(27, 24, 254, 0.12) 0%, rgba(27, 24, 254, 0.04) 50%, transparent 70%);
      animation: glowPulse 3s ease-in-out infinite;
      z-index: 0;
    }
    @keyframes glowPulse {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.2); opacity: 1; }
    }

    /* ===== iPHONE 17 PRO MAX ===== */
    .iphone-device {
      position: relative;
      z-index: 2;
    }
    .iphone-frame {
      width: 150px;
      height: 310px;
      background: linear-gradient(160deg, #1c1c1e, #2c2c2e, #1c1c1e);
      border-radius: 36px;
      padding: 4px;
      box-shadow:
        0 0 0 1px rgba(255,255,255,0.08),
        0 25px 70px rgba(0, 0, 0, 0.25),
        0 0 40px rgba(27, 24, 254, 0.08);
      position: relative;
      overflow: hidden;
    }
    .dynamic-island {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 48px;
      height: 14px;
      background: #000;
      border-radius: 20px;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 6px;
    }
    .island-cam {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: radial-gradient(circle, #1a3a4a, #0d1f2b);
      border: 1px solid #1a3a4a;
    }
    .iphone-screen {
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #f8f9ff 0%, #eef1ff 100%);
      border-radius: 32px;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .status-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 14px 6px 14px;
      flex-shrink: 0;
    }
    .status-time {
      font-size: 0.55rem;
      font-weight: 700;
      color: #0a0a0a;
      letter-spacing: 0.3px;
    }
    .status-icons {
      display: flex;
      align-items: center;
      gap: 3px;
    }
    .status-icons svg {
      opacity: 0.7;
    }

    /* Screen App Content */
    .screen-app {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px 10px 4px 10px;
      gap: 6px;
    }
    .app-logo-wrap {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: rgba(27, 24, 254, 0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2px;
    }
    .app-name {
      font-size: 0.6rem;
      font-weight: 800;
      color: #0a0a0a;
      letter-spacing: 0.3px;
    }
    .app-tagline {
      font-size: 0.42rem;
      color: #6c757d;
      font-weight: 500;
      margin-bottom: 6px;
    }
    .app-mini-cards {
      display: flex;
      gap: 6px;
      width: 100%;
    }
    .mini-card {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 5px 6px;
      border-radius: 8px;
      font-size: 0.4rem;
      font-weight: 600;
    }
    .mc-ai {
      background: rgba(99, 102, 241, 0.1);
      color: #6366f1;
      border: 1px solid rgba(99, 102, 241, 0.15);
    }
    .mc-wa {
      background: rgba(37, 211, 102, 0.08);
      color: #25D366;
      border: 1px solid rgba(37, 211, 102, 0.15);
    }
    .app-pulse {
      width: 100%;
      margin-top: 8px;
      height: 3px;
      background: rgba(27, 24, 254, 0.08);
      border-radius: 4px;
      overflow: hidden;
    }
    .pulse-bar {
      width: 40%;
      height: 100%;
      background: linear-gradient(90deg, #1b18fe, #6366f1);
      border-radius: 4px;
      animation: pulseSlide 2.5s ease-in-out infinite;
    }
    @keyframes pulseSlide {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(200%); }
      100% { transform: translateX(-100%); }
    }
    .home-indicator {
      width: 40px;
      height: 4px;
      background: rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      margin: 4px auto 6px auto;
      flex-shrink: 0;
    }

    /* ===== ORBITING SERVICE NODES ===== */
    .orbit-node {
      position: absolute;
      top: calc(50% - 30px);
      left: calc(50% - 30px);
      width: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      z-index: 3;
    }
    .node-icon {
      width: 50px;
      height: 50px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.06);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .node-icon:hover {
      transform: scale(1.15);
      box-shadow: 0 8px 30px rgba(27, 24, 254, 0.15);
    }
    .node-label {
      font-size: 0.65rem;
      font-weight: 600;
      color: #6c757d;
      white-space: nowrap;
      text-align: center;
      letter-spacing: 0.3px;
    }

    /* Node positions using CSS custom properties */
    .node-0 { animation: orbitNode0 20s linear infinite; }
    .node-1 { animation: orbitNode1 25s linear infinite; }
    .node-2 { animation: orbitNode2 22s linear infinite; }
    .node-3 { animation: orbitNode3 28s linear infinite; }
    .node-4 { animation: orbitNode4 24s linear infinite; }
    .node-5 { animation: orbitNode5 26s linear infinite; }

    @keyframes orbitNode0 {
      from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
      to   { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
    }
    @keyframes orbitNode1 {
      from { transform: rotate(60deg) translateX(175px) rotate(-60deg); }
      to   { transform: rotate(420deg) translateX(175px) rotate(-420deg); }
    }
    @keyframes orbitNode2 {
      from { transform: rotate(120deg) translateX(120px) rotate(-120deg); }
      to   { transform: rotate(480deg) translateX(120px) rotate(-480deg); }
    }
    @keyframes orbitNode3 {
      from { transform: rotate(180deg) translateX(175px) rotate(-180deg); }
      to   { transform: rotate(540deg) translateX(175px) rotate(-540deg); }
    }
    @keyframes orbitNode4 {
      from { transform: rotate(240deg) translateX(230px) rotate(-240deg); }
      to   { transform: rotate(600deg) translateX(230px) rotate(-600deg); }
    }
    @keyframes orbitNode5 {
      from { transform: rotate(300deg) translateX(230px) rotate(-300deg); }
      to   { transform: rotate(660deg) translateX(230px) rotate(-660deg); }
    }

    @keyframes orbitRotate {
      from { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
      to   { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
    }
    .services-preview {
      padding: 120px 0;
      background: #f8f9fa;
    }
    .section-header {
      text-align: center;
      margin-bottom: 60px;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    .section-header.animate-in {
      opacity: 1;
      transform: translateY(0);
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
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
      transform: translateY(40px);
    }
    .service-card.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    .service-card:hover {
      transform: translateY(-10px);
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
      transform: translateY(20px);
      transition: all 0.6s ease;
    }
    .cta-center.animate-in {
      opacity: 1;
      transform: translateY(0);
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
      transform: scale(0.9);
      transition: all 0.5s ease;
    }
    .stat-item.animate-in {
      opacity: 1;
      transform: scale(1);
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
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    .cta-content.animate-in {
      opacity: 1;
      transform: translateY(0);
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
    /* ===== RESPONSIVE ===== */
    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }
      .hero-content {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .hero p {
        max-width: 100%;
      }
      .hero-buttons {
        justify-content: center;
      }
      .hero-trust {
        text-align: center;
      }
      .solar-system {
        width: 380px;
        height: 380px;
      }
      .orbit-1 { width: 200px; height: 200px; }
      .orbit-2 { width: 290px; height: 290px; }
      .orbit-3 { width: 370px; height: 370px; }
      .node-0 { animation: orbitNode0Tablet 20s linear infinite; }
      .node-1 { animation: orbitNode1Tablet 25s linear infinite; }
      .node-2 { animation: orbitNode2Tablet 22s linear infinite; }
      .node-3 { animation: orbitNode3Tablet 28s linear infinite; }
      .node-4 { animation: orbitNode4Tablet 24s linear infinite; }
      .node-5 { animation: orbitNode5Tablet 26s linear infinite; }
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .service-card:nth-child(3) {
        background: #1b18fe;
      }
      .service-card:nth-child(3) .icon { color: white; }
      .service-card:nth-child(3) h3 { color: white; }
      .service-card:nth-child(3) p { color: rgba(255,255,255,0.85); }
      .service-card:nth-child(3):hover { box-shadow: 0 20px 40px rgba(27,24,254,0.35); }
      .service-card:nth-child(4) { background: white; }
      .service-card:nth-child(4) .icon { color: #1b18fe; }
      .service-card:nth-child(4) h3 { color: #0a0a0a; }
      .service-card:nth-child(4) p { color: #6c757d; }
      .service-card:nth-child(4):hover { box-shadow: 0 20px 40px rgba(27,24,254,0.15); }
    }
    @keyframes orbitNode0Tablet {
      from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
      to   { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
    }
    @keyframes orbitNode1Tablet {
      from { transform: rotate(60deg) translateX(145px) rotate(-60deg); }
      to   { transform: rotate(420deg) translateX(145px) rotate(-420deg); }
    }
    @keyframes orbitNode2Tablet {
      from { transform: rotate(120deg) translateX(100px) rotate(-120deg); }
      to   { transform: rotate(480deg) translateX(100px) rotate(-480deg); }
    }
    @keyframes orbitNode3Tablet {
      from { transform: rotate(180deg) translateX(145px) rotate(-180deg); }
      to   { transform: rotate(540deg) translateX(145px) rotate(-540deg); }
    }
    @keyframes orbitNode4Tablet {
      from { transform: rotate(240deg) translateX(185px) rotate(-240deg); }
      to   { transform: rotate(600deg) translateX(185px) rotate(-600deg); }
    }
    @keyframes orbitNode5Tablet {
      from { transform: rotate(300deg) translateX(185px) rotate(-300deg); }
      to   { transform: rotate(660deg) translateX(185px) rotate(-660deg); }
    }

    @media (max-width: 768px) {
      .hero {
        padding-top: 100px;
        padding-bottom: 40px;
        min-height: auto;
      }
      .hero-grid {
        padding: 0 20px;
      }
      .hero h1 { font-size: 2.4rem; }
      .hero-buttons { flex-direction: column; align-items: center; }
      .hero-badge { font-size: 0.75rem; }
      .solar-system {
        width: 320px;
        height: 320px;
      }
      .iphone-frame {
        width: 120px;
        height: 248px;
        border-radius: 28px;
      }
      .dynamic-island { width: 38px; height: 11px; top: 8px; }
      .island-cam { width: 5px; height: 5px; }
      .orbit-1 { width: 170px; height: 170px; }
      .orbit-2 { width: 245px; height: 245px; }
      .orbit-3 { width: 310px; height: 310px; }
      .node-icon { width: 40px; height: 40px; border-radius: 10px; }
      .node-icon svg { width: 18px; height: 18px; }
      .node-label { font-size: 0.55rem; }
      .node-0 { animation: orbitNode0Mobile 20s linear infinite; }
      .node-1 { animation: orbitNode1Mobile 25s linear infinite; }
      .node-2 { animation: orbitNode2Mobile 22s linear infinite; }
      .node-3 { animation: orbitNode3Mobile 28s linear infinite; }
      .node-4 { animation: orbitNode4Mobile 24s linear infinite; }
      .node-5 { animation: orbitNode5Mobile 26s linear infinite; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .services-grid { grid-template-columns: 1fr; }
      .service-card:nth-child(3) { background: white; }
      .service-card:nth-child(3) .icon { color: #1b18fe; }
      .service-card:nth-child(3) h3 { color: #0a0a0a; }
      .service-card:nth-child(3) p { color: #6c757d; }
      .service-card:nth-child(3):hover { box-shadow: 0 20px 40px rgba(27,24,254,0.15); }
      .service-card:nth-child(4) { background: #1b18fe; }
      .service-card:nth-child(4) .icon { color: white; }
      .service-card:nth-child(4) h3 { color: white; }
      .service-card:nth-child(4) p { color: rgba(255,255,255,0.85); }
      .service-card:nth-child(4):hover { box-shadow: 0 20px 40px rgba(27,24,254,0.35); }
    }
    @keyframes orbitNode0Mobile {
      from { transform: rotate(0deg) translateX(85px) rotate(0deg); }
      to   { transform: rotate(360deg) translateX(85px) rotate(-360deg); }
    }
    @keyframes orbitNode1Mobile {
      from { transform: rotate(60deg) translateX(123px) rotate(-60deg); }
      to   { transform: rotate(420deg) translateX(123px) rotate(-420deg); }
    }
    @keyframes orbitNode2Mobile {
      from { transform: rotate(120deg) translateX(85px) rotate(-120deg); }
      to   { transform: rotate(480deg) translateX(85px) rotate(-480deg); }
    }
    @keyframes orbitNode3Mobile {
      from { transform: rotate(180deg) translateX(123px) rotate(-180deg); }
      to   { transform: rotate(540deg) translateX(123px) rotate(-540deg); }
    }
    @keyframes orbitNode4Mobile {
      from { transform: rotate(240deg) translateX(155px) rotate(-240deg); }
      to   { transform: rotate(600deg) translateX(155px) rotate(-600deg); }
    }
    @keyframes orbitNode5Mobile {
      from { transform: rotate(300deg) translateX(155px) rotate(-300deg); }
      to   { transform: rotate(660deg) translateX(155px) rotate(-660deg); }
    }
  `]
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
