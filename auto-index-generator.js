/* =========================================================
   Clinical Portal 2026
   Auto-index generator for Dr. Murali Gopal's paediatric portal
   ========================================================= */

"use strict";

const fs = require("fs");
const path = require("path");

const projectRoot = __dirname;
const conditionsDirectory = path.join(projectRoot, "html-conditions");
const dataDirectory = path.join(projectRoot, "data");
const outputFile = path.join(dataDirectory, "conditions-index.json");
const publicIndexMode = process.env.CLINICAL_PORTAL_PUBLIC_INDEX_MODE || "reviewed-only";

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

const requiredMetadataFields = [
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

const optionalVisualMetadataFields = [
  "hero_image",
  "hero_alt",
  "visual_context"
];

function ensureDirectoryExists(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
}

function getHtmlFiles(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    return [];
  }

  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
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
  if (nameFirstMatch) {
    return decodeHtmlEntities(nameFirstMatch[1].trim());
  }

  const contentFirstMatch = html.match(contentFirstPattern);
  if (contentFirstMatch) {
    return decodeHtmlEntities(contentFirstMatch[1].trim());
  }

  return "";
}

function extractMetadata(fileName) {
  const filePath = path.join(conditionsDirectory, fileName);
  const html = fs.readFileSync(filePath, "utf8");

  const metadata = {};

  requiredMetadataFields.forEach((field) => {
    metadata[field] = readMetaContent(html, field);
  });

  optionalVisualMetadataFields.forEach((field) => {
    const value = readMetaContent(html, field);
    if (value) {
      metadata[field] = value;
    }
  });

  metadata.featured = normalizeBoolean(metadata.featured);
  metadata.url = `html-conditions/${fileName}`;

  return metadata;
}

function normalizeBoolean(value) {
  return String(value).trim().toLowerCase() === "true";
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function compareResources(a, b) {
  const categoryComparison = a.category.localeCompare(b.category);
  if (categoryComparison !== 0) {
    return categoryComparison;
  }

  return a.title.localeCompare(b.title);
}

function validateMetadata(resource, fileName) {
  const missingFields = requiredMetadataFields.filter((field) => {
    if (field === "featured") {
      return false;
    }

    return !resource[field];
  });

  if (missingFields.length > 0) {
    console.warn(
      `Warning: ${fileName} is missing metadata field(s): ${missingFields.join(", ")}`
    );
  }
  validateCategory(resource.category, fileName);
}

function validateCategory(category, fileName) {
  if (!category || approvedCategories.includes(category)) {
    return;
  }

  console.warn(
    `Warning: ${fileName} uses unsupported category "${category}". Approved categories: ${approvedCategories.join(", ")}`
  );

}

function shouldIncludeInPublicIndex(resource) {
  if (publicIndexMode === "all") return true;

  return resource.status === "published" &&
    resource.medical_review_status === "reviewed";
}

function buildIndex() {
  ensureDirectoryExists(dataDirectory);

  const htmlFiles = getHtmlFiles(conditionsDirectory);

  const extractedResources = htmlFiles.map((fileName) => {
    const resource = extractMetadata(fileName);
    validateMetadata(resource, fileName);
    return resource;
  });

  const resources = extractedResources
    .filter(shouldIncludeInPublicIndex)
    .sort(compareResources);

  fs.writeFileSync(outputFile, `${JSON.stringify(resources, null, 2)}\n`, "utf8");

  console.log(
    `Generated ${path.relative(projectRoot, outputFile)} with ${resources.length} public resource(s) in ${publicIndexMode} mode.`
  );

  if (publicIndexMode !== "all") {
    console.log(
      `Public index filtered from ${extractedResources.length} total resource(s); only reviewed and published resources are exposed.`
    );
  }
}

buildIndex();
