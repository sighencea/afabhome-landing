# CLAUDE.md - AFabHome Static Website

This file provides comprehensive guidance to Claude Code when working with the **AFabHome static HTML website**.

---

## 🌍 Core Development Philosophy

- **KISS (Keep It Simple, Stupid)**: Prefer simple, straightforward solutions.
- **YAGNI (You Aren't Gonna Need It)**: Build features only when required.
- **Vanilla First**: Use plain HTML, CSS, and JavaScript - no frameworks.
- **Consistency > Cleverness**: Follow existing patterns for maintainability.

### Design Principles
- **Progressive Enhancement**: Core functionality works without JavaScript.
- **Mobile-First**: Design for small screens first, then scale up.
- **Semantic HTML**: Use proper HTML5 elements for accessibility.
- **Performance**: Optimize images and minimize file sizes.

---

## 🧱 Code Structure & Modularity

### Project Layout
```
afabhome-landing/
├── index.html           # Landing page
├── our-work.html        # Portfolio gallery page
├── contact.html         # Contact page with form
├── css/
│   └── style.css        # Main stylesheet (shared styles)
├── assets/
│   ├── images/          # Project and service images
│   └── icons/           # Icon files
├── README.md            # Setup and deployment documentation
├── LICENSE              # MIT License
├── .gitignore          # Git ignore file
└── CLAUDE.md           # This file
```

### File Limits
- HTML files ≤ **500 lines**
- CSS file ≤ **1000 lines** (consider splitting if larger)
- JavaScript inline ≤ **200 lines per page**
- Max **100 characters per line**

### Naming Conventions
- HTML files → `kebab-case.html`
- CSS classes → `kebab-case`
- JavaScript variables → `camelCase`
- Constants → `UPPER_SNAKE_CASE`
- IDs → `camelCase`

---

## 🎨 Design System

### Color Palette (CSS Variables)
```css
--primary-color: #2563eb     /* Primary blue */
--primary-dark: #1e40af      /* Darker blue for hover */
--secondary-color: #64748b   /* Gray for secondary elements */
--accent-color: #f59e0b      /* Orange/amber for CTAs */
--text-dark: #1e293b         /* Dark slate for headings */
--text-light: #64748b        /* Lighter gray for body text */
--bg-light: #f8fafc          /* Light background */
--bg-white: #ffffff          /* White background */
--border-color: #e2e8f0      /* Border color */
```

### Typography
- **Font Stack**: System fonts (Apple, Segoe UI, Roboto, sans-serif)
- **Headings**: Georgia serif
- **Body**: Sans-serif system font stack
- **Line Height**: 1.6 for body, 1.2 for headings

### Spacing System
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 2rem     /* 32px */
--spacing-lg: 4rem     /* 64px */
--spacing-xl: 6rem     /* 96px */
```

### Layout
- **Max Width**: 1200px
- **Border Radius**: 8px
- **Transitions**: 0.3s ease

---

## 📄 Page Structure

### Shared Components

All pages include:
1. **Navigation Bar**
   - Sticky positioning
   - Logo (left)
   - Menu links (right)
   - Mobile hamburger toggle
   - Active page indication

2. **Footer**
   - Three column layout on desktop
   - Company info, quick links, contact info
   - Social media links
   - Copyright notice

### Page-Specific Sections

**index.html**:
- Hero section with CTA buttons
- Why Choose Us (3 features)
- Services grid (4 cards)
- Final CTA section

**our-work.html**:
- Hero section
- Filter buttons (All, Residential, Kitchen, Bathroom, Living)
- Project gallery grid (9+ projects)
- CTA section

**contact.html**:
- Hero section
- Two-column layout: Form + Contact info
- FAQ section (4 questions)
- Contact form with validation

---

## 🎯 JavaScript Functionality

### Navigation Toggle
```javascript
// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
```

### Project Filtering (our-work.html)
```javascript
// Filter projects by category
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    // Show/hide projects based on data-category attribute
  });
});
```

### Form Handling (contact.html)
```javascript
// Contact form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Collect form data
  // Display success message
  // Reset form
});
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile: < 768px (default) */
/* Tablet: >= 768px */
/* Desktop: >= 1024px */

@media (max-width: 768px) {
  /* Mobile styles */
}

@media (max-width: 480px) {
  /* Extra small mobile */
}
```

### Mobile Considerations
- Stack grid layouts vertically
- Full-width cards
- Simplified navigation (hamburger menu)
- Reduced spacing
- Touch-friendly button sizes (min 44x44px)

---

## 🖼️ Image Guidelines

### Recommended Sizes
- **Hero images**: 1920x1080px
- **Service cards**: 400x200px
- **Project gallery**: 400x300px
- **Icons**: 60x60px or SVG

### Optimization
- Use WebP format when possible
- Provide fallback images with `onerror` attribute
- Keep file sizes under 500KB
- Use placeholder images for development

### Placeholder Pattern
```html
<img
  src="./assets/images/project-name.jpg"
  alt="Project description"
  onerror="this.src='https://via.placeholder.com/400x300?text=Project+Name'"
>
```

---

## 🚀 Development Workflow

### Local Development
```bash
# Option 1: Python SimpleHTTPServer
python -m http.server 8000

# Option 2: Node.js http-server
npx http-server

# Option 3: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

### File Structure Best Practices
- Use relative paths: `./css/style.css`, `./our-work.html`
- Keep all assets in appropriate folders
- Commit all images and icons to repository
- Test links work from all pages

---

## 📦 GitHub Pages Deployment

### Setup Steps
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch: `main`, folder: `/ (root)`
4. Site will be live at: `https://username.github.io/afabhome-landing/`

### Important Notes
- Use relative paths for internal links: `./index.html`
- Avoid absolute paths like `/index.html`
- Test all links after deployment
- Wait 2-5 minutes for changes to deploy

### Custom Domain (Optional)
1. Add `CNAME` file with domain name
2. Configure DNS settings at domain registrar
3. Enable HTTPS in GitHub Pages settings

---

## 🧪 Testing Checklist

### Functionality
- [ ] All navigation links work
- [ ] Mobile menu toggles correctly
- [ ] Project filters work on Our Work page
- [ ] Contact form validates and submits
- [ ] All images load (or show placeholders)

### Responsive Design
- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Check navigation on mobile
- [ ] Verify grid layouts stack properly

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility
- [ ] Semantic HTML elements used
- [ ] Alt text on all images
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Sufficient color contrast
- [ ] Heading hierarchy is logical

### Performance
- [ ] Images optimized (< 500KB each)
- [ ] No console errors
- [ ] Page loads in < 3 seconds
- [ ] Smooth scrolling and animations

---

## 🛠️ Customization Guide

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --primary-color: #2563eb;  /* Change to your brand color */
  --accent-color: #f59e0b;   /* Change to your accent color */
}
```

### Adding New Pages
1. Create new HTML file (e.g., `about.html`)
2. Copy header/footer from existing page
3. Add page to navigation in all HTML files
4. Update active state in navigation

### Updating Content
1. **Text**: Edit HTML files directly
2. **Images**: Add to `assets/images/` and update `src` attributes
3. **Colors**: Modify CSS variables
4. **Layout**: Adjust CSS grid/flex properties

### Form Integration
Replace console.log with actual form service:
```html
<!-- Example with Formspree -->
<form action="https://formspree.io/f/your-form-id" method="POST">
```

Options:
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [EmailJS](https://www.emailjs.com/)

---

## 🔒 Security Considerations

### Best Practices
- No sensitive data in HTML/CSS/JS
- Validate all form inputs (client-side)
- Use HTTPS (automatic with GitHub Pages)
- Sanitize user input if processing server-side
- Keep dependencies minimal (no external libraries)

### Form Security
- Add honeypot fields to prevent spam
- Implement rate limiting on backend
- Use CAPTCHA if needed (reCAPTCHA)
- Never expose API keys in frontend code

---

## 📊 Analytics (Optional)

### Adding Google Analytics
Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 Common Issues & Solutions

### Issue: Links don't work on GitHub Pages
**Solution**: Use relative paths: `./page.html` instead of `/page.html`

### Issue: Images not loading
**Solution**:
- Check file paths (case-sensitive)
- Ensure images are committed to repository
- Use `onerror` fallback for placeholders

### Issue: CSS not applying
**Solution**:
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check CSS file path in HTML
- Validate CSS syntax

### Issue: Mobile menu not working
**Solution**:
- Check JavaScript console for errors
- Verify IDs match in HTML and JS
- Test without browser extensions

### Issue: Form not submitting
**Solution**:
- Check `preventDefault()` is called
- Verify form action URL (if using service)
- Look for JavaScript errors in console

---

## 📝 Content Guidelines

### Writing Style
- Clear, concise copy
- Active voice preferred
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Professional but approachable tone

### SEO Best Practices
- Unique `<title>` for each page
- Meta descriptions (150-160 characters)
- Descriptive alt text for images
- Semantic heading hierarchy (h1 → h6)
- Clean, descriptive URLs

### Example Meta Tags
```html
<meta name="description" content="AFabHome - Creating beautiful, functional spaces for modern living">
<meta name="keywords" content="interior design, home renovation, design consultation">
<meta property="og:title" content="AFabHome - Interior Design Services">
<meta property="og:description" content="Transform your space with expert design">
<meta property="og:image" content="./assets/images/og-image.jpg">
```

---

## 🎯 Project Roadmap (Optional Enhancements)

### Phase 1: Launch (Current)
- [x] Three-page static site
- [x] Responsive design
- [x] GitHub Pages deployment

### Phase 2: Enhancements
- [ ] Add more project images
- [ ] Integrate real form backend
- [ ] Add testimonials section
- [ ] Optimize images with WebP
- [ ] Add animations (CSS or lightweight JS)

### Phase 3: Advanced
- [ ] Blog section
- [ ] Project detail pages
- [ ] Photo gallery lightbox
- [ ] Google Maps integration
- [ ] Newsletter signup

---

## 📚 Resources

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [TinyPNG](https://tinypng.com/) - Image compression
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing
- [WAVE](https://wave.webaim.org/) - Accessibility testing

### Placeholder Images
- [Unsplash](https://unsplash.com/) - Free stock photos
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Placeholder.com](https://placeholder.com/) - Quick placeholders

---

## ✅ Maintenance Checklist

### Weekly
- [ ] Test all links
- [ ] Check form submissions
- [ ] Review contact inquiries

### Monthly
- [ ] Update project portfolio
- [ ] Refresh images if needed
- [ ] Check browser compatibility
- [ ] Review analytics (if enabled)

### Quarterly
- [ ] Content review and updates
- [ ] SEO optimization
- [ ] Performance audit
- [ ] Accessibility check

---

Keep this file **updated** as the project evolves!
