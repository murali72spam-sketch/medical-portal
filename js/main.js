// Dr Murali Gopal's Paediatric Health Portal - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }
});

// Search functionality (basic)
function searchArticles(query) {
  const articles = document.querySelectorAll('[data-searchable]');
  query = query.toLowerCase();
  
  articles.forEach(article => {
    const text = article.textContent.toLowerCase();
    if (text.includes(query)) {
      article.style.display = '';
    } else {
      article.style.display = 'none';
    }
  });
}

// Print article
function printPage() {
  window.print();
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple calculator for dosage
function calculateDose(weight, dosePerKg) {
  if (weight > 0 && dosePerKg > 0) {
    return (weight * dosePerKg).toFixed(2);
  }
  return 0;
}

// Alert component
function showAlert(message, type = 'info') {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  document.body.insertBefore(alert, document.body.firstChild);
  
  setTimeout(() => {
    alert.remove();
  }, 5000);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Dark mode toggle (optional)
function toggleDarkMode() {
  document.documentElement.style.colorScheme = 
    document.documentElement.style.colorScheme === 'dark' ? 'light' : 'dark';
}

// Utility: Format date
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-IN', options);
}

// Utility: Generate table of contents
function generateTableOfContents() {
  const toc = [];
  const headings = document.querySelectorAll('.article-content h2, .article-content h3');
  
  headings.forEach((heading, index) => {
    const id = `section-${index}`;
    heading.id = id;
    toc.push({
      level: heading.tagName,
      text: heading.textContent,
      id: id
    });
  });
  
  return toc;
}

// Accessibility: Skip to main content
function setupA11y() {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'visually-hidden';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);
}

setupA11y();
