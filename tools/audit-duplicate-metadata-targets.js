const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const conditionsDir = path.join(root, "html-conditions");

const targetGroups = [
  {
    key: "tantrums",
    label: "Temper tantrums / behaviour regulation",
    filenamePattern: /tantrum/i,
    contentPattern: /tantrum/i
  },
  {
    key: "bedwetting",
    label: "Bedwetting / nocturnal enuresis",
    filenamePattern: /bedwet/i,
    contentPattern: /bedwet|nocturnal enuresis/i
  },
  {
    key: "ringworm",
    label: "Ringworm / tinea",
    filenamePattern: /ringworm/i,
    contentPattern: /ringworm|tinea/i
  },
  {
    key: "conjunctivitis",
    label: "Conjunctivitis / red eye",
    filenamePattern: /conjunctivitis/i,
    contentPattern: /conjunctivitis|red eye/i
  }
];

function getHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function readMeta(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const nameFirst = new RegExp(
    `<meta\\s+[^>]*name=["']${escaped}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    "i"
  );
  const contentFirst = new RegExp(
    `<meta\\s+[^>]*content=["']([^"']*)["'][^>]*name=["']${escaped}["'][^>]*>`,
    "i"
  );

  const match = html.match(nameFirst) || html.match(contentFirst);
  return match ? decodeEntities(match[1].trim()) : "";
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--([\s\S]*?)-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function metadataFor(file, html) {
  return {
    file,
    title: readMeta(html, "title") || file,
    slug: readMeta(html, "slug"),
    category: readMeta(html, "category"),
    resource_type: readMeta(html, "resource_type"),
    status: readMeta(html, "status"),
    medical_review_status: readMeta(html, "medical_review_status"),
    last_reviewed: readMeta(html, "last_reviewed"),
    featured: readMeta(html, "featured"),
    description: readMeta(html, "description")
  };
}

function audit() {
  const htmlFiles = getHtmlFiles(conditionsDir);
  const allRecords = htmlFiles.map((file) => {
    const html = fs.readFileSync(path.join(conditionsDir, file), "utf8");
    return {
      ...metadataFor(file, html),
      bodyText: stripHtml(html)
    };
  });

  const summary = {
    totalHtmlFiles: htmlFiles.length,
    targetGroups: targetGroups.length
  };

  console.log("Clinical Portal 2026 — duplicate/metadata target audit");
  console.log(JSON.stringify(summary, null, 2));

  for (const group of targetGroups) {
    const directFilenameMatches = allRecords.filter((record) => group.filenamePattern.test(record.file));
    const contentOnlyMatches = allRecords.filter(
      (record) => !group.filenamePattern.test(record.file) && group.contentPattern.test(`${record.title} ${record.slug} ${record.description} ${record.bodyText}`)
    );

    console.log(`\n## ${group.label}`);
    console.log(`Direct filename candidates: ${directFilenameMatches.length}`);

    directFilenameMatches.forEach((record) => {
      console.log(`- ${record.file}`);
      console.log(`  title: ${record.title}`);
      console.log(`  slug: ${record.slug}`);
      console.log(`  category: ${record.category}`);
      console.log(`  status/review: ${record.status}/${record.medical_review_status}`);
      console.log(`  last_reviewed: ${record.last_reviewed || "MISSING"}`);
      console.log(`  featured: ${record.featured || "MISSING"}`);
    });

    console.log(`Content-only mentions to inspect, likely not duplicates: ${contentOnlyMatches.length}`);
    contentOnlyMatches.slice(0, 20).forEach((record) => {
      console.log(`- ${record.file} | ${record.title}`);
    });

    if (contentOnlyMatches.length > 20) {
      console.log(`  ... ${contentOnlyMatches.length - 20} more content-only mention(s) omitted.`);
    }
  }
}

audit();
