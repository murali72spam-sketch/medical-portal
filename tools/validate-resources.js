"use strict";

const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const htmlConditionsDir = path.join(projectRoot, "html-conditions");
const legalDir = path.join(projectRoot, "legal");
const indexPath = path.join(projectRoot, "index.html");
const stylePath = path.join(projectRoot, "style.css");
const scriptPath = path.join(projectRoot, "script.js");
const resourceIndexPath = path.join(projectRoot, "data", "conditions-index.json");
const sitemapPath = path.join(projectRoot, "sitemap.xml");
const vercelConfigPath = path.join(projectRoot, "vercel.json");
const approvedSiteOrigin = "https://www.drmuraligopal.com";

const requiredMetaFields = [
  "title",
  "slug",
  "category",
  "resource_type",
  "description",
  "keywords",
  "audience",
  "last_reviewed",
  "medical_review_status",
  "references",
  "featured",
  "status"
];

const optionalVisualMetaFields = [
  "hero_image",
  "hero_alt",
  "visual_context"
];

const approvedCategories = [
  "Respiratory",
  "Gastrointestinal",
  "Nutrition & Feeding",
  "Vaccination",
  "Fever & Infections",
  "Skin & Allergy",
  "Growth & Development",
  "Medication Information",
  "Parent Education"
];

const approvedResourceTypes = [
  "parent-guide",
  "interactive-tool",
  "reference-chart",
  "calculator"
];

const approvedStatuses = ["draft", "reviewed", "published"];
const approvedReviewStatuses = [
  "pending-clinician-review",
  "reviewed",
  "needs-verification"
];

function isPublicResource(metadata) {
  return metadata.status === "published" &&
    metadata.medical_review_status === "reviewed";
}

const clinicalTerms = [
  "mg",
  "mcg",
  "mL",
  "dose",
  "dosing",
  "weight-based",
  "calculator",
  "antibiotic",
  "steroid",
  "prednisolone",
  "salbutamol",
  "adrenaline",
  "epinephrine",
  "levothyroxine",
  "carbimazole",
  "methimazole",
  "insulin",
  "contraindication",
  "contraindicated",
  "diagnostic criteria",
  "emergency treatment",
  "treatment algorithm"
];

const vaccinationTerms = [
  "6 weeks",
  "10 weeks",
  "14 weeks",
  "9 months",
  "15 months",
  "16 months",
  "18 months",
  "catch-up table",
  "schedule table",
  "minimum interval",
  "route",
  "intramuscular",
  "subcutaneous",
  "needle",
  "brand",
  "product-specific",
  "contraindication algorithm",
  "IAP ACVIP 2023",
  "ACVIP 2023"
];

const unsupportedComplianceClaims = [
  "HIPAA compliant",
  "GDPR compliant",
  "fully secure",
  "guaranteed privacy"
];

let errorCount = 0;
let warningCount = 0;

function printHeader() {
  console.log("Clinical Portal Resource Validator");
  console.log("==================================");
}

function section(title) {
  console.log("");
  console.log(title);
}

function error(message) {
  errorCount += 1;
  console.log(`ERROR: ${message}`);
}

function warn(message) {
  warningCount += 1;
  console.log(`WARN: ${message}`);
}

function ok(message) {
  console.log(`OK: ${message}`);
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function fileExists(filePath) {
  return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
}

function listHtmlFiles(directoryPath) {
  if (!fs.existsSync(directoryPath)) return [];

  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function decodeHtmlEntities(value) {
  return String(value)
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readMetaContent(html, fieldName) {
  const escapedFieldName = escapeRegExp(fieldName);
  const nameFirstPattern = new RegExp(
    `<meta\\s+[^>]*name=["']${escapedFieldName}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    "i"
  );
  const contentFirstPattern = new RegExp(
    `<meta\\s+[^>]*content=["']([^"']*)["'][^>]*name=["']${escapedFieldName}["'][^>]*>`,
    "i"
  );

  const nameFirstMatch = html.match(nameFirstPattern);
  if (nameFirstMatch) return decodeHtmlEntities(nameFirstMatch[1].trim());

  const contentFirstMatch = html.match(contentFirstPattern);
  if (contentFirstMatch) return decodeHtmlEntities(contentFirstMatch[1].trim());

  return "";
}

function extractMetadata(html) {
  const metadata = {};
  [...requiredMetaFields, ...optionalVisualMetaFields].forEach((field) => {
    metadata[field] = readMetaContent(html, field);
  });
  return metadata;
}

function readResourceIndex() {
  if (!fileExists(resourceIndexPath)) {
    error("data/conditions-index.json is missing.");
    return [];
  }

  try {
    const parsed = JSON.parse(readText(resourceIndexPath));
    if (!Array.isArray(parsed)) {
      error("data/conditions-index.json must contain a JSON array.");
      return [];
    }
    return parsed;
  } catch (parseError) {
    error(`data/conditions-index.json could not be parsed: ${parseError.message}`);
    return [];
  }
}

function readSitemapUrls() {
  if (!fileExists(sitemapPath)) {
    error("sitemap.xml is missing.");
    return [];
  }

  return [...readText(sitemapPath).matchAll(/<loc>([^<]+)<\/loc>/gi)]
    .map((match) => decodeHtmlEntities(match[1].trim()));
}

function canonicalUrls(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)]
    .map((match) => match[0])
    .filter((tag) => /\brel=["']canonical["']/i.test(tag))
    .map((tag) => {
      const href = tag.match(/\bhref=["']([^"']+)["']/i);
      return href ? decodeHtmlEntities(href[1].trim()) : "";
    });
}

function malformedHrefTags(html) {
  return [...html.matchAll(/<[^>]*\bhref\s*=[^>]*>/gi)]
    .map((match) => match[0])
    .filter((tag) => {
      const hrefTokens = [...tag.matchAll(/\bhref\s*=/gi)];
      const validQuotedHrefAttributes = [
        ...tag.matchAll(/\bhref\s*=\s*(?:"[^"]*"|'[^']*')(?=\s|\/?>)/gi)
      ];
      return hrefTokens.length !== 1 || validQuotedHrefAttributes.length !== 1;
    });
}

function sitemapUrlToFile(url) {
  const pathname = new URL(url).pathname;
  return path.join(projectRoot, pathname === "/" ? "index.html" : pathname.replace(/^\//, ""));
}

function groupBy(items, keyName) {
  const groups = new Map();
  items.forEach((item) => {
    const key = String(item[keyName] || "").trim();
    if (!key) return;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  return groups;
}

function isIgnoredClinicalContext(term, context) {
  const lowerTerm = term.toLowerCase();
  const lowerContext = context.toLowerCase();

  // These phrases explicitly say that the page is not giving actionable
  // dosing, schedule, calculator, or algorithm guidance. Ignore only the
  // individual keyword occurrence inside that disclaimer-style context.
  const negativeClinicalPatterns = [
    /\bdoes not provide\b.{0,80}\b(dose|doses|dosing|amount|amounts|schedule|schedules|calculator|algorithm|algorithms|protocol|protocols|table|tables)\b/i,
    /\bdoes not include\b.{0,80}\b(dose|doses|dosing|schedule|schedules|algorithm|algorithms|protocol|protocols)\b/i,
    /\bno\b.{0,40}\b(dose|doses|dosing|schedule|schedules|calculator|algorithm|algorithms|antibiotic names|antibiotic doses)\b/i,
    /\bnot\b.{0,50}\b(a|an|the|full|complete)?\s*(catch-up vaccination )?(calculator|treatment algorithm|schedule table|vaccine schedule|catch-up calculator)\b/i,
    /\bnot\b.{0,50}\bprovide\b.{0,60}\b(dose|doses|dosing|schedule|schedules|calculator|algorithm|algorithms|table|tables)\b/i
  ];

  if (
    ["dose", "dosing", "calculator", "treatment algorithm"].includes(lowerTerm) &&
    negativeClinicalPatterns.some((pattern) => pattern.test(lowerContext))
  ) {
    return true;
  }

  if (
    lowerTerm === "antibiotic" &&
    /\bdoes not provide\b.{0,80}\bantibiotic names?\b.{0,40}\b(antibiotic )?doses?\b/i.test(lowerContext)
  ) {
    return true;
  }

  return false;
}

function isIgnoredVaccinationContext(term, context) {
  const lowerTerm = term.toLowerCase();
  const lowerContext = context.toLowerCase();

  if (
    lowerTerm === "schedule table" &&
    /\b(does not provide|not)\b.{0,50}\bschedule table\b/i.test(lowerContext)
  ) {
    return true;
  }

  // In travel resources, "route" can mean itinerary/transit route rather than
  // vaccine administration route. Keep route warnings for actual injection
  // wording such as intramuscular, subcutaneous, needle, or administration.
  if (
    lowerTerm === "route" &&
    /\btravel route\b/i.test(lowerContext) &&
    !/\b(administration|administered|intramuscular|subcutaneous|injection|injectable|needle)\b/i.test(lowerContext)
  ) {
    return true;
  }

  return false;
}

function contextForMatch(text, index, termLength) {
  const windowStart = Math.max(0, index - 160);
  const windowEnd = Math.min(text.length, index + termLength + 160);
  const previousBoundary = Math.max(
    text.lastIndexOf(".", index),
    text.lastIndexOf("!", index),
    text.lastIndexOf("?", index)
  );
  const nextBoundaries = [".", "!", "?"]
    .map((marker) => text.indexOf(marker, index + termLength))
    .filter((boundary) => boundary !== -1);
  const nextBoundary = nextBoundaries.length ? Math.min(...nextBoundaries) + 1 : -1;
  const start = Math.max(windowStart, previousBoundary === -1 ? windowStart : previousBoundary + 1);
  const end = Math.min(windowEnd, nextBoundary === -1 ? windowEnd : nextBoundary);
  return text.slice(start, end);
}

function findTerms(text, terms, options = {}) {
  const matches = [];
  terms.forEach((term) => {
    const pattern = new RegExp(`\\b${escapeRegExp(term)}\\b`, "gi");
    let match;
    let hasActionableMatch = false;
    while ((match = pattern.exec(text)) !== null) {
      const context = contextForMatch(text, match.index, term.length);
      const ignored =
        options.scanType === "vaccination"
          ? isIgnoredVaccinationContext(term, context)
          : isIgnoredClinicalContext(term, context);

      if (!ignored) {
        hasActionableMatch = true;
        break;
      }
    }

    if (hasActionableMatch) matches.push(term);
  });
  return matches;
}

function textForSafetyScan(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
}

function siteFiles() {
  const files = [];

  [indexPath, stylePath, scriptPath].forEach((filePath) => {
    if (fileExists(filePath)) files.push(filePath);
  });

  listHtmlFiles(htmlConditionsDir).forEach((fileName) => {
    files.push(path.join(htmlConditionsDir, fileName));
  });

  listHtmlFiles(legalDir).forEach((fileName) => {
    files.push(path.join(legalDir, fileName));
  });

  return files;
}

function relative(filePath) {
  return path.relative(projectRoot, filePath).replace(/\\/g, "/");
}

printHeader();

const htmlFiles = listHtmlFiles(htmlConditionsDir);
const resourceIndex = readResourceIndex();
const sitemapUrls = readSitemapUrls();
const resourcesByUrl = new Map(
  resourceIndex.map((resource) => [String(resource.url || "").trim(), resource])
);
const metadataByFile = new Map();
const expectedPublicUrls = new Set();

section("Technical SEO checks");
const duplicateSitemapUrls = [...new Set(
  sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index)
)];
if (duplicateSitemapUrls.length) {
  duplicateSitemapUrls.forEach((url) => error(`Duplicate sitemap URL: ${url}.`));
} else {
  ok(`sitemap.xml contains ${sitemapUrls.length} unique URLs.`);
}

sitemapUrls.forEach((url) => {
  if (!url.startsWith(`${approvedSiteOrigin}/`)) {
    error(`Sitemap URL does not use the approved origin: ${url}.`);
  }

  const filePath = sitemapUrlToFile(url);
  if (!fileExists(filePath)) {
    error(`Sitemap URL has no deployed HTML file: ${url}.`);
    return;
  }

  const canonicals = canonicalUrls(readText(filePath));
  if (canonicals.length !== 1) {
    error(`${relative(filePath)} has ${canonicals.length} canonical tags; expected exactly 1.`);
  } else if (canonicals[0] !== url) {
    error(`${relative(filePath)} canonical "${canonicals[0]}" does not exactly match "${url}".`);
  } else if (!canonicals[0].startsWith(`${approvedSiteOrigin}/`)) {
    error(`${relative(filePath)} canonical does not use the approved origin.`);
  }
});

let redirects = [];
if (!fileExists(vercelConfigPath)) {
  error("vercel.json is missing.");
} else {
  try {
    redirects = JSON.parse(readText(vercelConfigPath)).redirects || [];
  } catch (parseError) {
    error(`vercel.json could not be parsed: ${parseError.message}`);
  }
}

const sitemapPaths = new Set(sitemapUrls.map((url) => new URL(url).pathname));
const indexedPaths = new Set(
  resourceIndex.map((resource) => `/${String(resource.url || "").replace(/^\//, "")}`)
);
const redirectSources = new Set(redirects.map((redirect) => redirect.source));
redirects.forEach((redirect) => {
  if (sitemapPaths.has(redirect.source)) {
    error(`Redirect source appears in sitemap.xml: ${redirect.source}.`);
  }
  if (indexedPaths.has(redirect.source)) {
    error(`Redirect source appears in data/conditions-index.json: ${redirect.source}.`);
  }
  if (redirectSources.has(redirect.destination)) {
    error(`Redirect does not resolve in one hop: ${redirect.source} -> ${redirect.destination}.`);
  }
});

const deployedHtmlFiles = [
  indexPath,
  path.join(projectRoot, "profile.html"),
  path.join(projectRoot, "404.html"),
  ...listHtmlFiles(htmlConditionsDir).map((fileName) => path.join(htmlConditionsDir, fileName)),
  ...listHtmlFiles(legalDir).map((fileName) => path.join(legalDir, fileName))
].filter(fileExists);

deployedHtmlFiles.forEach((filePath) => {
  const html = readText(filePath);
  const malformedLinks = malformedHrefTags(html);
  if (malformedLinks.length) {
    error(`${relative(filePath)} contains ${malformedLinks.length} malformed href attribute(s).`);
  }

  const badLinks = [...html.matchAll(/\bhref=["']([^"']*index\.html(?:[#?][^"']*)?)["']/gi)];
  if (badLinks.length) {
    error(`${relative(filePath)} contains ${badLinks.length} public link(s) to index.html.`);
  }
});

section("Resource/index checks");
console.log(`Resource HTML files: ${htmlFiles.length}`);
console.log(`Indexed resources: ${resourceIndex.length}`);

section("Metadata checks");
htmlFiles.forEach((fileName) => {
  const filePath = path.join(htmlConditionsDir, fileName);
  const html = readText(filePath);
  const metadata = extractMetadata(html);
  metadataByFile.set(fileName, metadata);

  if (isPublicResource(metadata)) {
    expectedPublicUrls.add(`html-conditions/${fileName}`);
    if (!readMetaContent(html, "author")) {
      error(`${fileName} is published and reviewed but is missing author metadata.`);
    }
  }

  requiredMetaFields.forEach((field) => {
    const hasMetaTag = new RegExp(
      `<meta\\s+[^>]*name=["']${escapeRegExp(field)}["'][^>]*>`,
      "i"
    ).test(html);

    if (!hasMetaTag) {
      error(`${fileName} is missing metadata field: ${field}.`);
      return;
    }

    if (field !== "featured" && !metadata[field]) {
      error(`${fileName} has empty metadata field: ${field}.`);
    }
  });

  if (metadata.category && !approvedCategories.includes(metadata.category)) {
    warn(`${fileName} uses unapproved category: ${metadata.category}.`);
  }

  if (metadata.resource_type && !approvedResourceTypes.includes(metadata.resource_type)) {
    warn(`${fileName} uses unusual resource_type: ${metadata.resource_type}.`);
  }

  if (metadata.status && !approvedStatuses.includes(metadata.status)) {
    warn(`${fileName} uses unusual status: ${metadata.status}.`);
  }

  if (
    metadata.medical_review_status &&
    !approvedReviewStatuses.includes(metadata.medical_review_status)
  ) {
    warn(`${fileName} uses unusual medical_review_status: ${metadata.medical_review_status}.`);
  }

  if (metadata.hero_image && !metadata.hero_alt) {
    warn(`${fileName} has hero_image metadata but is missing hero_alt metadata.`);
  }

  if (metadata.hero_alt && !metadata.hero_image) {
    warn(`${fileName} has hero_alt metadata but is missing hero_image metadata.`);
  }

  if (
    metadata.visual_context &&
    !/^[a-z0-9-]+$/.test(metadata.visual_context)
  ) {
    warn(`${fileName} uses unusual visual_context format: ${metadata.visual_context}. Use lowercase kebab-case such as mother-child-home-care.`);
  }
});

const indexedUrls = new Set(resourceIndex.map((resource) => String(resource.url || "").trim()));

if (expectedPublicUrls.size !== resourceIndex.length) {
  error(`Resource count mismatch: ${expectedPublicUrls.size} public HTML files vs ${resourceIndex.length} indexed resources.`);
} else {
  ok("Public resource counts match.");
}

expectedPublicUrls.forEach((url) => {
  if (!indexedUrls.has(url)) error(`${url} is missing from data/conditions-index.json.`);
});

indexedUrls.forEach((url) => {
  if (!url) {
    error("An indexed resource has an empty url.");
    return;
  }

  if (!expectedPublicUrls.has(url)) {
    error(`${url} is indexed but is not a published reviewed public resource.`);
  }
});

section("Duplicate checks");
[
  ["slug", "slug", "error"],
  ["url", "indexed URL", "error"],
  ["title", "exact title", "warn"]
].forEach(([field, label, severity]) => {
  groupBy(resourceIndex, field).forEach((items, value) => {
    if (items.length <= 1) return;
    const urls = items.map((item) => item.url || "(missing url)").join(", ");
    if (severity === "error") {
      error(`Duplicate ${label} "${value}" in: ${urls}.`);
    } else {
      warn(`Duplicate ${label} "${value}" in: ${urls}.`);
    }
  });
});

section("Structure checks");
htmlFiles.forEach((fileName) => {
  const html = readText(path.join(htmlConditionsDir, fileName));
  const missing = [];

  if (!/Dr\.\s*Murali Gopal/i.test(html)) missing.push("Dr. Murali Gopal");
  if (!/medical disclaimer|disclaimer/i.test(html)) missing.push("Medical disclaimer or disclaimer");
  if (!/References/i.test(html)) missing.push("References");
  if (!/Last reviewed/i.test(html)) missing.push("Last reviewed");

  if (missing.length) {
    warn(`${fileName} appears to be missing: ${missing.join(", ")}.`);
  }
});

section("Clinical governance warnings");
htmlFiles.forEach((fileName) => {
  const html = readText(path.join(htmlConditionsDir, fileName));
  const terms = findTerms(textForSafetyScan(html), clinicalTerms, { scanType: "clinical" });
  if (terms.length) warn(`${fileName}: ${terms.join(", ")}`);
});

section("Vaccination safety warnings");
htmlFiles.forEach((fileName) => {
  const metadata = metadataByFile.get(fileName) || {};
  const title = metadata.title || "";
  const isVaccination =
    metadata.category === "Vaccination" ||
    /vaccin|immunis|immuniz/i.test(fileName) ||
    /vaccin|immunis|immuniz/i.test(title);

  if (!isVaccination) return;

  const html = readText(path.join(htmlConditionsDir, fileName));
  const terms = findTerms(textForSafetyScan(html), vaccinationTerms, { scanType: "vaccination" });
  if (terms.length) warn(`${fileName}: ${terms.join(", ")}`);
});

section("Legal/privacy checks");
[
  "disclaimer.html",
  "privacy-policy.html",
  "terms-of-use.html",
  "copyright.html"
].forEach((fileName) => {
  const filePath = path.join(legalDir, fileName);
  if (!fileExists(filePath)) {
    warn(`legal/${fileName} is missing.`);
  }
});

siteFiles().forEach((filePath) => {
  const text = readText(filePath);
  const terms = findTerms(text, unsupportedComplianceClaims);
  if (terms.length) warn(`${relative(filePath)} contains unsupported compliance claim(s): ${terms.join(", ")}.`);
});

section("Homepage/search checks");
if (!fileExists(indexPath)) {
  warn("index.html is missing.");
} else {
  const html = readText(indexPath);
  const missing = [];
  if (!/data-resource-grid/i.test(html)) missing.push("resource grid");
  if (!/data-resource-search/i.test(html)) missing.push("resource search");
  if (!/data-category-filter/i.test(html)) missing.push("category filters");
  if (!/data-nav-toggle/i.test(html)) missing.push("mobile navigation toggle");
  if (missing.length) {
    warn(`index.html does not reference expected core portal structure: ${missing.join(", ")}.`);
  } else {
    ok("index.html references expected core portal structure.");
  }
}

if (!fileExists(scriptPath)) {
  warn("script.js is missing.");
} else {
  const script = readText(scriptPath);
  if (!/conditions-index\.json/.test(script)) {
    warn("script.js does not reference conditions-index.json.");
  }
  if (!/status/.test(script) || !/published/.test(script)) {
    warn("script.js does not appear to filter or handle resource status.");
  }
}

if (!fileExists(stylePath)) {
  warn("style.css is missing.");
}

section("Summary");
console.log(`Total errors: ${errorCount}`);
console.log(`Total warnings: ${warningCount}`);

if (errorCount > 0) {
  process.exitCode = 1;
}
