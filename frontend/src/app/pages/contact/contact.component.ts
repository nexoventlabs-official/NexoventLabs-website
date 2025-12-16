import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <div class="hero-content" #animateEl>
          <h1>Get in <span class="highlight">Touch</span></h1>
          <p>We'd love to hear from you. Let's start a conversation.</p>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info" #animateEl>
            <h2>Contact Information</h2>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div class="info-items">
              <div class="info-item">
                <span class="material-icons icon">email</span>
                <div>
                  <h4>Email</h4>
                  <a href="https://mail.google.com/mail/?view=cm&to=nexoventlabs@gmail.com" target="_blank" class="contact-link">nexoventlabs&#64;gmail.com</a>
                </div>
              </div>
              <div class="info-item">
                <span class="material-icons icon">phone</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919440203095" class="contact-link">+91 9440203095</a>
                </div>
              </div>
              <div class="info-item">
                <span class="material-icons icon">location_on</span>
                <div>
                  <h4>Address</h4>
                  <p>OMR, Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <a href="#" class="social-link">LinkedIn</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">GitHub</a>
            </div>
          </div>

          <div class="contact-form" #animateEl>
            <form (ngSubmit)="onSubmit()">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" [(ngModel)]="form.firstName" name="firstName" required>
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" [(ngModel)]="form.lastName" name="lastName" required>
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" [(ngModel)]="form.email" name="email" required>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" [(ngModel)]="form.subject" name="subject">
                  <option value="">Select a subject</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="ai">AI & ML Solutions</option>
                  <option value="automation">Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" [(ngModel)]="form.message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section" #animateEl>
      <div class="container">
        <h2 class="section-title" style="text-align: center; margin-bottom: 40px;">Find Us</h2>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124406.90274619498!2d80.1502786!3d12.8767756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b2e5e5a5a5b%3A0x5a5a5a5a5a5a5a5a!2sOMR%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
            width="100%" 
            height="450" 
            style="border:0; border-radius: 16px;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: 180px 0 180px;
      text-align: center;
      background: #1b18fe url('/bg-bottom.png') no-repeat bottom center;
      background-size: 100% auto;
      margin-bottom: -5px;
    }
    .hero-content {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    .hero-content.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    .page-hero h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 16px;
      color: white;
    }
    .highlight { color: white; }
    .page-hero p {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.9);
    }
    .contact-section {
      padding: 100px 0;
      background: white;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 60px;
    }
    .contact-info {
      opacity: 0;
      transform: translateX(-30px);
      transition: all 0.6s ease;
    }
    .contact-info.animate-in {
      opacity: 1;
      transform: translateX(0);
    }
    .contact-info h2 {
      font-size: 1.8rem;
      margin-bottom: 16px;
    }
    .contact-info > p {
      color: #6c757d;
      margin-bottom: 40px;
      line-height: 1.6;
    }
    .info-items {
      margin-bottom: 40px;
    }
    .info-item {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
    }
    .info-item .icon {
      font-size: 1.5rem;
      width: 50px;
      height: 50px;
      background: #f8f9fa;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1b18fe;
    }
    .info-item h4 {
      font-size: 0.9rem;
      color: #6c757d;
      margin-bottom: 4px;
    }
    .info-item p {
      font-weight: 500;
    }
    .contact-link {
      font-weight: 500;
      color: #0a0a0a;
      transition: color 0.3s ease;
    }
    .contact-link:hover {
      color: #1b18fe;
    }
    .social-links {
      display: flex;
      gap: 16px;
    }
    .social-link {
      padding: 10px 20px;
      background: #f8f9fa;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    .social-link:hover {
      background: #1b18fe;
      color: white;
    }
    .contact-form {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      opacity: 0;
      transform: translateX(30px);
      transition: all 0.6s ease;
    }
    .contact-form.animate-in {
      opacity: 1;
      transform: translateX(0);
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .form-group {
      margin-bottom: 24px;
    }
    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #343a40;
    }
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 14px 16px;
      border: 2px solid #e9ecef;
      border-radius: 10px;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s ease;
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #1b18fe;
      box-shadow: 0 0 0 4px rgba(27, 24, 254, 0.1);
    }
    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }
    form .btn-primary {
      width: 100%;
      padding: 16px;
      font-size: 1rem;
    }
    .map-section {
      padding: 0 0 100px;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    .map-section.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    .map-container {
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }
    @media (max-width: 768px) {
      .page-hero h1 { font-size: 2.5rem; }
      .contact-grid { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
      .contact-form { padding: 30px 20px; }
    }
  `]
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('animateEl') animateElements!: QueryList<ElementRef>;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit() {
    this.animateElements.forEach(el => this.scrollAnimation.observe(el.nativeElement));
  }

  onSubmit() {
    console.log('Form submitted:', this.form);
    alert('Thank you for your message! We will get back to you soon.');
    this.form = { firstName: '', lastName: '', email: '', subject: '', message: '' };
  }
}
