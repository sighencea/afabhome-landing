# A Fab House Construction - Static Website

A professional, responsive static website for A Fab House Construction, built with vanilla HTML, CSS, and JavaScript. This website showcases construction and renovation services with a clean, modern design.

## Features

- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Three Pages**:
  - **Home**: Hero section, services overview, featured projects, and testimonials
  - **Our Work**: Filterable project portfolio with lightbox gallery
  - **Contact**: Contact information, form, and FAQ section
- **Modern UI**: Clean design with smooth animations and transitions
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required
- **GitHub Pages Ready**: Optimized for easy deployment

## Project Structure

```
afabhome-landing/
├── index.html              # Home page
├── our-work.html           # Portfolio/gallery page
├── contact.html            # Contact page
├── css/
│   └── style.css           # Main stylesheet
├── assets/
│   ├── images/             # Project images (add your own)
│   └── icons/              # Icon files (add your own)
├── README.md               # This file
├── LICENSE                 # MIT License
└── .gitignore             # Git ignore file
```

## Local Development

### Option 1: Python SimpleHTTPServer

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open http://localhost:8000 in your browser.

### Option 2: Node.js http-server

```bash
# Install http-server globally (first time only)
npm install -g http-server

# Run server
http-server
```

Then open http://localhost:8080 in your browser.

### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"
3. Your browser will open automatically

## GitHub Pages Deployment

### Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - A Fab House Construction website"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR-USERNAME/afabhome-landing.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-5 minutes for deployment

### Step 3: Access Your Site

Your website will be available at:
```
https://YOUR-USERNAME.github.io/afabhome-landing/
```

## Customization Guide

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #f59e0b;      /* Primary orange/amber */
  --primary-dark: #d97706;       /* Darker shade for hover */
  --text-dark: #111827;          /* Dark text */
  --text-light: #6b7280;         /* Light text */
}
```

### Adding Images

1. Add your images to the `assets/images/` folder
2. Update image paths in HTML files:

```html
<!-- Replace placeholder URLs with your images -->
<img src="./assets/images/your-image.jpg" alt="Description">
```

### Updating Content

- **Company Name**: Search and replace "A Fab House Construction" in all HTML files
- **Contact Info**: Update email, phone, and address in all three pages (footer and contact page)
- **Services**: Edit the services section in `index.html`
- **Projects**: Modify project cards in `index.html` and `our-work.html`

### Adding More Projects

In `our-work.html`, copy and paste this template:

```html
<div class="project-card" data-category="residential">
  <img src="./assets/images/project-name.jpg" alt="Project Name">
  <div class="project-overlay">
    <span class="card-badge">Category</span>
    <h3>Project Title</h3>
    <p>Project description</p>
  </div>
</div>
```

Available categories: `residential`, `commercial`, `kitchen`, `bathroom`

## Contact Form Integration

The contact form currently logs data to the browser console. To connect it to a backend service:

### Option 1: Formspree (Recommended)

1. Sign up at https://formspree.io/
2. Create a new form
3. Replace the form tag in `contact.html`:

```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Option 2: Netlify Forms

1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to form:

```html
<form netlify name="contact">
```

### Option 3: EmailJS

1. Sign up at https://www.emailjs.com/
2. Follow their integration guide
3. Update the JavaScript in `contact.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Home Page (`index.html`)
- Full-screen hero with call-to-action buttons
- About section with company overview
- Services showcase (3 cards)
- Featured projects grid (4 projects)
- Client testimonials (2 reviews)
- Footer with contact info and links

### Our Work Page (`our-work.html`)
- Hero banner
- Project filter buttons (All, Residential, Kitchen, Bathroom, Commercial)
- 12-project gallery grid
- Lightbox/modal for full-size images
- Keyboard navigation support (ESC to close)

### Contact Page (`contact.html`)
- Hero banner
- Contact info cards (Email, Phone, Address)
- Contact form with validation
- FAQ section (4 questions)
- Success message on form submission

## Performance Optimization

### Images
- Recommended sizes:
  - Hero images: 1920x1080px
  - Project gallery: 800x600px
  - Service cards: 400x300px
- Keep file sizes under 500KB each
- Use WebP format when possible
- Compress images before uploading

### Loading Speed
- Minimal CSS (no external frameworks)
- No JavaScript dependencies
- Optimized for fast page loads
- Lazy loading can be added if needed

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Alt text on all images
- Keyboard navigation support
- Sufficient color contrast ratios
- Responsive font sizes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues or questions:
- Create an issue on GitHub
- Email: info@afabhouse.com
- Phone: (555) 123-4567

## Credits

- Design inspired by modern construction and architecture websites
- Images: Placeholder images from Unsplash (replace with your own)
- Icons: Inline SVG icons (no external dependencies)

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript
