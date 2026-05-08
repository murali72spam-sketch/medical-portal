---
name: GitHub Pages Medical Portal Builder
version: 1.0
type: skill
category: Frontend / Medical / GitHub
description: >
  Build a professional medical information portal using GitHub Pages + static HTML/CSS/JS.
  Creates folder structure, page templates, navigation system, and content management approach
  for paediatric OPD checklists, parent education, health articles, drug info, and nutrition guides.
  Use this whenever the user wants to build a medical website, patient portal, health info site,
  or clinical tool portal on GitHub. Handles GitHub → GitHub Pages or GitHub → Netlify/Vercel deployment.
compatibility: GitHub account + Frontend Design Skill + Paediatric Clinical Checklist Skill
primary_goal: >
  Provide a reusable, maintainable project structure for medical educational websites that can
  scale from MVP (1-2 pages) to full portal (50+ pages) without restructuring. Keep it simple,
  offline-first, and easy for non-developers to add content over time.
---

# GitHub Pages Medical Portal Builder — v1.0

## Quick Start

**What this skill does:**
1. Creates a GitHub Pages project folder structure (HTML, CSS, JS, assets organized)
2. Generates page templates (landing page, article template, tool template, checklist template)
3. Sets up navigation system (header, sidebar, breadcrumbs for easy browsing)
4. Provides content management approach (how to add articles, tools, checklists without coding)
5. Guides GitHub → Netlify/Vercel deployment (if using GitHub Pages)
6. Ensures mobile-first responsive design

**When to trigger:**
- "I want to build a patient info website on GitHub"
- "Create a medical portal for my paediatric clinic"
- "GitHub Pages setup for health articles"
- "Build a paediatric OPD checklist website"
- "Mobile-friendly patient education site using GitHub"

---

## Step 1: Understand Project Scope

Before building, clarify:

### Multiple Choice Input Menu

**Q1: Portal Type (choose one)**
- A. Educational (articles, guides, parent handouts — read-only)
- B. Clinical Tools (calculators, checklist, dose guides, interactive)
- C. Mixed (both education + clinical tools)

**Q2: Initial Content (choose one)**
- A. MVP (1-3 pages, launch ASAP)
- B. Medium (5-10 pages, structured content)
- C. Full (20+ pages, comprehensive, plan for growth)

**Q3: Main Content Areas (select all that apply)**
- A. Paediatric OPD checklists (symptoms, red flags, guidance)
- B. Vaccination schedules & catch-up guides
- C. Drug dosing calculator & formulary
- D. Health articles (nutrition, development, common conditions)
- E. Parent education handouts (printable PDFs)
- F. Nutrition guides (infant, toddler, school-age)

**Q4: Deployment (choose one)**
- A. GitHub Pages (free, auto-deploy from repo, simple)
- B. Netlify (GitHub + auto-deploy, better for dynamic content later)
- C. Vercel (GitHub + auto-deploy, very fast, best for React later)
- D. Not sure yet (will decide later)

**Q5: Maintenance (choose one)**
- A. I'll manage all content (write articles, update tools myself)
- B. I'll manage core, you help with updates
- C. I'll use templates to add content myself (learn as I go)

---

## Step 2: GitHub Pages Folder Structure

Once scope is clear, create this folder structure:

```
medical-portal/
│
├── index.html                 # Landing page
├── README.md                  # GitHub repo description
│
├── css/
│   ├── style.css             # Main stylesheet
│   ├── responsive.css        # Mobile breakpoints
│   └── print.css             # Printable checklist styling
│
├── js/
│   ├── navigation.js         # Header/sidebar toggle
│   ├── search.js             # Simple article search
│   └── utils.js              # Helpers (date, formatting)
│
├── assets/
│   ├── images/               # Icons, diagrams, photos
│   ├── icons/                # SVG icons (vaccine, drug, alert, etc.)
│   └── fonts/                # Custom fonts (if needed)
│
├── pages/
│   ├── about.html            # About the clinic
│   ├── contact.html          # Contact info
│   └── disclaimer.html       # Medical disclaimer
│
├── education/                # Health articles & guides
│   ├── index.html
│   ├── vaccination.html
│   ├── nutrition.html
│   ├── development.html
│   └── common-conditions/
│       ├── fever.html
│       ├── cough.html
│       └── diarrhea.html
│
├── checklists/               # OPD checklists & algorithms
│   ├── index.html
│   ├── newborn-screening.html
│   ├── growth-assessment.html
│   ├── developmental-milestone.html
│   └── red-flag-summary.html
│
├── tools/                    # Interactive tools & calculators
│   ├── index.html
│   ├── dose-calculator.html
│   ├── bmi-calculator.html
│   ├── immunization-status.html
│   └── growth-chart.html
│
├── downloads/                # Printable handouts (PDFs hosted as downloads)
│   ├── parent-guide-newborn.pdf
│   ├── vaccination-checklist.pdf
│   └── nutrition-guide.pdf
│
└── .github/
    └── workflows/
        └── deploy.yml        # Auto-deploy to GitHub Pages (optional)
```

---

## Step 3: Page Templates

### Template A: Landing Page (index.html)
```
Features:
- Logo / Clinic name (large)
- Welcome message (2-3 lines)
- Quick links grid (Education | Checklists | Tools | About)
- Latest article preview
- Search box (optional)
- Mobile hamburger menu
- Footer (contact, disclaimer, GitHub link)
```

### Template B: Article Page (education/*)
```
Structure:
- Header with breadcrumb (Home > Education > Topic)
- Title + last updated date
- Table of contents (auto-generated)
- Article body (markdown-like sections)
- Key takeaways box (highlighted)
- "Print this page" button
- Related articles (links)
- Disclaimer footer
```

### Template C: Checklist Page (checklists/*)
```
Structure:
- Title + age group
- Printable checklist (✓ checkboxes)
- Red flags section (prominent)
- When to refer (criteria)
- Parent-friendly summary
- Print-optimized styling
- Download as PDF option
```

### Template D: Tool/Calculator Page (tools/*)
```
Structure:
- Tool name + brief description
- Input fields (interactive)
- Calculate button
- Result display (large, clear)
- Explanation of result
- Print result button
- Medical disclaimer
```

---

## Step 4: Navigation & Layout System

### Header (All Pages)
```
Left: Logo/Clinic Name
Center: Search box (optional)
Right: Nav menu (hamburger on mobile)
  - Education
  - Checklists
  - Tools
  - About
  - Contact
```

### Sidebar (Desktop Only)
```
Left sidebar on article/checklist pages:
- Section index (jumping between topics)
- Related articles
- Print/share buttons
```

### Footer (All Pages)
```
- Contact info
- Medical disclaimer
- "Last updated: [date]"
- "© 2026 [Your Clinic Name]"
- GitHub repo link (optional)
- Social links (optional)
```

---

## Step 5: Content Management Approach

### For Articles (learn-as-I-go):
1. **Copy existing article template** (HTML file)
2. **Rename** to topic (e.g., `fever.html`)
3. **Fill sections** (title, content, key takeaways, related links)
4. **Add to navigation** (update menu, index page)
5. **Test locally** → Push to GitHub

**Files that change:** `education/new-topic.html` + update `education/index.html`

### For Checklists:
1. **Copy checklist template** from `checklists/template.html`
2. **Add items** (symptoms, red flags, criteria)
3. **Print preview** (check styling)
4. **Add to index** → Push to GitHub

**Files that change:** `checklists/new-checklist.html` + update `checklists/index.html`

### For Tools/Calculators:
1. **Copy tool template** from `tools/template.html`
2. **Add input fields** + calculation logic (JavaScript)
3. **Test calculations** → Push to GitHub

**Files that change:** `tools/new-tool.html` + update `tools/index.html`

---

## Step 6: Deployment Options

### Option A: GitHub Pages (Free, Built-in)
```
1. Push code to GitHub repo
2. Go to Settings > Pages
3. Select "Deploy from branch" → main
4. Site live at: https://yourusername.github.io/medical-portal/
```

### Option B: Netlify (Free + Advanced Features)
```
1. Push code to GitHub
2. Go to netlify.com → "New site from Git"
3. Select GitHub repo
4. Deploy branch: main
5. Site live at: https://your-site.netlify.app/
6. Auto-deploys on every GitHub push
```

### Option C: Vercel (Free, Very Fast)
```
1. Push code to GitHub
2. Go to vercel.com → Import project
3. Select GitHub repo
4. Deploy
5. Site live at: https://your-site.vercel.app/
```

**Recommendation:** Start with **GitHub Pages** (simplest), upgrade to **Netlify** later if you need more control.

---

## Step 7: Mobile-First Checklist

Before launching, verify:

- [ ] Header is responsive (hamburger menu on mobile)
- [ ] Text is readable (16px minimum on mobile)
- [ ] Links are tappable (44px touch targets)
- [ ] Checklists are printable (landscape + portrait)
- [ ] Images scale properly (no overflow)
- [ ] Tools work on mobile (input fields accessible)
- [ ] No horizontal scrolling
- [ ] Footer is sticky/visible

---

## Step 8: Anti-Hallucination Rules for Medical Content

When adding health articles/checklists:
- **Never invent medical facts** → Link to IAP/WHO guidelines if claims made
- **Avoid overconfident language** → Use "typically," "often," "consider"
- **Always add medical disclaimer** → "Consult your doctor"
- **For drug doses** → Link to official formulary or state as "per BNF"
- **For parent handouts** → Keep simple, friendly tone, avoid jargon

---

## Step 9: Testing Locally (Before GitHub)

Before pushing to GitHub:

```bash
# Clone your repo
git clone https://github.com/yourusername/medical-portal.git
cd medical-portal

# Serve locally (Python 3)
python -m http.server 8000

# Open browser
http://localhost:8000

# Test:
# - Navigation works
# - Links don't break
# - Responsive design (resize browser)
# - Tools calculate correctly
# - Print preview looks good
```

Then push to GitHub:
```bash
git add .
git commit -m "Add [feature]: [description]"
git push origin main
```

---

## Step 10: Expanding Over Time (Maintenance Cycle)

**Monthly:**
- Review articles for accuracy
- Update vaccine schedules (if changed)
- Add 1-2 new topics based on common OPD queries

**Quarterly:**
- Check mobile responsiveness (new phone sizes)
- Update drug prices/availability (India-specific)
- Gather feedback from parents (any topics needed?)

**Yearly:**
- Full content audit (outdated articles)
- Redesign if needed (look & feel)
- Add new sections (seasonal topics: monsoon health, summer safety, etc.)

---

## Skill Integration Points

**After creating structure, use these skills:**

1. **Frontend Design Skill** → Style each page beautifully
2. **Paediatric Clinical Checklist Skill** → Create OPD checklist content
3. **Paediatric Drug Formulary Skill** → Add dose calculator
4. **Paediatric Vaccination Skill** → Build vaccination schedule page
5. **Paediatric Nutrition Skill** → Create nutrition guides

---

## Example Workflow for Your First Page

**You:** "Help me create a landing page for my patient portal"

**I will:**
1. Confirm scope (education + checklists + tools?)
2. Ask content questions (clinic name, tagline, key articles to highlight?)
3. Create `index.html` with navigation structure
4. Use Frontend Design Skill to make it look professional
5. Show preview
6. You approve → I save to folder structure

---

## Glossary

| Term | Meaning |
|------|---------|
| **GitHub Pages** | Free hosting for static sites from GitHub repos |
| **Responsive Design** | Site works on mobile, tablet, desktop |
| **Breadcrumb** | Navigation trail showing "Home > Section > Page" |
| **Sitemap** | List of all pages on the site |
| **Disclaimer** | Legal statement about medical content |

---

## Questions Before Starting?

Once you pick your answers to the 5 multiple-choice questions above, I'll:
1. Create your folder structure (ready to push to GitHub)
2. Build your landing page
3. Show you how to add content (templates for articles, checklists, tools)
4. Guide you through deployment (GitHub Pages or Netlify)

**Ready to answer the questions?**
