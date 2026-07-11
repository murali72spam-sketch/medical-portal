const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.drmuraligopal.com';
const ROOT_DIR = path.join(__dirname, '..');
const INDEX_PATH = path.join(ROOT_DIR, 'data', 'conditions-index.json');
const OUTPUT_PATH = path.join(ROOT_DIR, 'sitemap.xml');

// Controlled-review mode: keep sitemap conservative until the full portal is launch-ready.
// Only resources that are both published and clinician-reviewed are included.
const INCLUDE_ONLY_REVIEWED_RESOURCES = true;

const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/profile.html', changefreq: 'monthly', priority: '0.8' },
  { url: '/legal/disclaimer.html', changefreq: 'yearly', priority: '0.5' },
  { url: '/legal/privacy-policy.html', changefreq: 'yearly', priority: '0.5' },
  { url: '/legal/terms-of-use.html', changefreq: 'yearly', priority: '0.5' },
  { url: '/legal/copyright.html', changefreq: 'yearly', priority: '0.5' }
];

function normalizeUrlPath(urlPath) {
  if (!urlPath || typeof urlPath !== 'string') return null;
  const trimmed = urlPath.trim();
  if (!trimmed) return null;
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}

function isValidDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function loadPublishedResources() {
  if (!fs.existsSync(INDEX_PATH)) {
    console.warn('conditions-index.json not found; generating sitemap with static pages only.');
    return [];
  }

  const resources = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));

  return resources
    .filter((resource) => {
      if (!resource || resource.status !== 'published' || !resource.url) return false;
      if (INCLUDE_ONLY_REVIEWED_RESOURCES && resource.medical_review_status !== 'reviewed') return false;
      return true;
    })
    .map((resource) => ({
      url: normalizeUrlPath(resource.url),
      lastmod: isValidDate(resource.last_reviewed) ? resource.last_reviewed : null,
      changefreq: 'monthly',
      priority: '0.8'
    }))
    .filter((resource) => resource.url);
}

function buildSitemapEntries() {
  const entries = [...staticPages, ...loadPublishedResources()];
  const seen = new Set();

  return entries.filter((entry) => {
    if (!entry.url || seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

function renderUrl(entry) {
  const absoluteUrl = `${SITE_URL}${entry.url}`;
  const lastmod = entry.lastmod ? `\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : '';
  const changefreq = entry.changefreq ? `\n    <changefreq>${escapeXml(entry.changefreq)}</changefreq>` : '';
  const priority = entry.priority ? `\n    <priority>${escapeXml(entry.priority)}</priority>` : '';

  return `  <url>\n    <loc>${escapeXml(absoluteUrl)}</loc>${lastmod}${changefreq}${priority}\n  </url>`;
}

function generateSitemap() {
  const urls = buildSitemapEntries();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(renderUrl).join('\n')}\n</urlset>\n`;

  fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');
  console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
}

generateSitemap();
