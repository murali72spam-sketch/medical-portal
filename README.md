# Dr Murali Gopal's Paediatric Health Portal

**A professional, patient-friendly educational portal for child health information.**

Hosted on Netlify | Built with HTML/CSS/JS | No backend required | Completely offline-friendly

---

## Overview

This portal provides evidence-based paediatric health information for parents and caregivers. It includes:

- **Health Articles** - Evidence-based guides on nutrition, development, common conditions
- **Smart Symptom Guide** - Interactive symptom checker with assessment guidance
- **Vaccination Schedules** - IAP ACVIP 2023 compliant vaccination timeline
- **Nutrition Guides** - Feeding guidance for infants, toddlers, school-age children
- **Clinical Tools** - Dosage calculators, growth tracking, developmental assessments
- **Printable Handouts** - Parent-friendly PDF guides for home reference

---

## Features

✅ **Professional Design** - Modern, responsive, hospital-grade interface  
✅ **Mobile-First** - Works perfectly on phones, tablets, desktops  
✅ **Dark Mode** - Automatic light/dark mode support  
✅ **No Data Collection** - Completely private, no cookies or tracking  
✅ **Fast & Lightweight** - Pure HTML/CSS/JS, no heavy frameworks  
✅ **Accessible** - WCAG compliant, keyboard navigation, screen reader friendly  
✅ **Printable** - Articles and checklists format beautifully when printed  
✅ **Easy to Update** - Simple template system, no coding required for new content  

---

## Folder Structure

```
medical-portal/
├── index.html                 # Landing page
├── README.md                  # This file
│
├── css/
│   └── style.css             # Main stylesheet (responsive, dark mode)
│
├── js/
│   └── main.js               # Navigation, utilities, interactivity
│
├── assets/
│   ├── images/               # Photos, diagrams
│   ├── icons/                # SVG icons (future)
│   └── fonts/                # Custom fonts (if needed)
│
├── pages/
│   ├── about.html            # About the clinic
│   ├── privacy.html          # Privacy policy
│   ├── terms.html            # Terms of use
│   ├── disclaimer.html       # Medical disclaimer
│   └── contact.html          # Contact information
│
├── education/                # Health articles
│   ├── index.html            # Articles index
│   ├── template-article.html # Template (copy for new articles)
│   ├── fever.html
│   ├── cough.html
│   └── ...
│
├── symptoms/                 # Smart Symptom Guide
│   ├── index.html            # Symptom guides index
│   ├── template-symptom-guide.html # Template
│   ├── fever.html
│   ├── cough.html
│   └── ...
│
├── nutrition/                # Nutrition guides
│   ├── index.html
│   ├── infant-feeding.html
│   ├── toddler-nutrition.html
│   └── ...
│
├── tools/                    # Interactive tools & calculators
│   ├── index.html
│   ├── dose-calculator.html
│   ├── bmi-calculator.html
│   └── ...
│
├── vaccination/              # Vaccination schedules
│   ├── index.html
│   ├── routine-schedule.html
│   └── catch-up-guide.html
│
├── downloads/                # Printable PDFs & handouts
│   ├── parent-guide-newborn.pdf
│   ├── vaccination-checklist.pdf
│   └── ...
│
└── .github/workflows/        # (Optional) GitHub Actions for deployment
    └── deploy.yml
```

---

## Quick Start: How to Add Content

### Adding a New Article

1. **Copy the template:**
   ```
   cp education/template-article.html education/my-new-article.html
   ```

2. **Edit the file:**
   - Replace `[ARTICLE TITLE]` with your title
   - Replace `[ARTICLE DESCRIPTION]` with a brief summary
   - Fill in the article sections (Introduction, Key Points, Tips, FAQ)
   - Add red flags and key takeaways

3. **Add it to the index:**
   - Open `education/index.html`
   - Add a link to your new article

4. **Test locally:**
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000/education/my-new-article.html
   ```

5. **Push to GitHub:**
   ```bash
   git add education/my-new-article.html
   git commit -m "Add article: My New Article"
   git push origin main
   ```

### Adding a Smart Symptom Guide

1. **Copy the symptom template:**
   ```
   cp symptoms/template-symptom-guide.html symptoms/fever-guide.html
   ```

2. **Customize:**
   - Replace `[CONDITION]` with the symptom/condition
   - Add 4-6 key symptoms with checkboxes
   - Update red flags (symptoms requiring immediate care)
   - Modify home care tips

3. **Test the checkboxes locally** before pushing

4. **Add to symptoms index** and push to GitHub

### Adding a Nutrition Guide

1. **Copy nutrition template** (create if doesn't exist):
   ```
   cp nutrition/template-nutrition.html nutrition/infant-feeding.html
   ```

2. **Include:**
   - Age-appropriate feeding recommendations
   - Food introduction timeline
   - Practical feeding tips
   - Allergy information
   - When to consult doctor

3. **Push to GitHub**

---

## Adding Pages to Index

Each section has an `index.html` that lists articles. To add your new article:

**Example: education/index.html**

```html
<section class="cards-grid">
  <div class="card">
    <h3>My New Article</h3>
    <p>Brief description of what the article covers.</p>
    <a href="my-new-article.html">Read Article →</a>
  </div>
</section>
```

---

## Testing Locally

Before pushing to GitHub, test your site locally:

```bash
# Navigate to project folder
cd medical-portal

# Start local server (Python 3)
python -m http.server 8000

# Open browser
http://localhost:8000

# Test:
# - All links work
# - Images load
# - Mobile responsive (resize browser or use DevTools)
# - Forms/calculators work (if any)
# - Print preview looks good
```

---

## Deploying to Netlify

### Option 1: Connect GitHub to Netlify (Recommended)

1. **Push your project to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Medical portal MVP"
   git push origin main
   ```

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your `medical-portal` repository

3. **Configure:**
   - Build command: (leave empty - it's a static site)
   - Publish directory: `.` (root folder)

4. **Deploy!** Netlify will automatically deploy and give you a live URL

5. **Auto-Updates:** Every time you push to GitHub, Netlify automatically redeploys

### Option 2: GitHub Pages

1. **Push to GitHub** (as above)

2. **Settings > Pages:**
   - Go to your repo settings
   - Under "Pages", select "Deploy from branch"
   - Select `main` branch
   - Save

3. **Site will be live at:**
   ```
   https://yourusername.github.io/medical-portal/
   ```

---

## Updating Content After Launch

### Monthly Maintenance

- Review 1-2 articles for accuracy
- Update vaccine schedules if changed
- Add 1-2 new articles based on common queries

### Quarterly Review

- Check mobile responsiveness (new phone sizes)
- Verify all links work
- Update medical facts if guidelines change

### Yearly Audit

- Full content review
- Update outdated articles
- Add seasonal topics (monsoon health, summer safety, etc.)
- Redesign if needed

---

## Content Guidelines

### Medical Accuracy

- ✅ Link to authoritative sources (IAP, WHO, CDC)
- ✅ Use evidence-based information
- ✅ Include disclaimers
- ✅ Never invent medical facts
- ✅ Update when guidelines change

### Parent-Friendly Language

- ✅ Simple, clear explanations
- ✅ Avoid medical jargon
- ✅ Use practical examples
- ✅ Include "when to see doctor" clearly
- ❌ Don't oversimplify complex topics

### Disclaimer & Safety

Every page must include:
```html
<div class="disclaimer">
  <strong>⚠️ Medical Disclaimer:</strong> This portal provides general health information. 
  It is NOT a substitute for professional medical advice. Always consult a qualified 
  paediatrician for diagnosis and treatment.
</div>
```

---

## Customization Tips

### Change Colors

Edit `css/style.css`, `:root` section:
```css
--color-primary: #185FA5;        /* Main blue - change this */
--color-secondary: #639922;      /* Green accent */
--color-accent: #D85A30;         /* Orange accent */
```

### Change Logo/Clinic Name

Edit `index.html` header:
```html
<div class="logo-text">Dr Murali Gopal</div>
<div class="logo-subtext">Paediatric Health Portal</div>
```

### Add New Navigation Items

Edit nav in `index.html`:
```html
<nav id="nav-menu">
  <a href="#education">Education</a>
  <a href="#your-new-section">New Section</a>  <!-- Add here -->
</nav>
```

---

## Troubleshooting

**Q: Links aren't working locally**
- Use `python -m http.server` (not just opening the file)
- Links should work once deployed to Netlify

**Q: CSS/images not loading**
- Check file paths (use relative paths: `../css/style.css`)
- Clear browser cache (Ctrl+Shift+Delete / Cmd+Shift+Delete)

**Q: Mobile menu not working**
- Ensure `js/main.js` is loaded
- Check browser console for JavaScript errors

**Q: How do I add a calculator?**
- See `tools/template-tool.html` (create if needed)
- Add JavaScript function for calculations
- Include form inputs and result display

---

## Resources

- **Icon Library:** [Tabler Icons](https://tabler.io/icons) - 5800+ free icons
- **Responsive Design:** [MDN Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- **HTML Best Practices:** [W3C](https://www.w3.org/)
- **Medical Guidelines:** [IAP](https://www.iapindia.org/), [WHO](https://www.who.int/), [CDC](https://www.cdc.gov/)

---

## License & Attribution

© 2026 Dr Murali Gopal. All rights reserved.

Content created for Apollo Cradle & Children's Hospital, Karapakkam, Chennai, India.

---

## Support

For questions about adding content or deploying:
- Contact: [Your email]
- GitHub Issues: [Link to your repo issues]

---

**Last Updated:** May 2026  
**Version:** 1.0 (MVP)
 
