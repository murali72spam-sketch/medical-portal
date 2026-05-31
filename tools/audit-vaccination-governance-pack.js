const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const conditionsDir = path.join(root, "html-conditions");

const vaccinationNamePattern = /vaccin|immunis|immuniz|catch-up|bcg|hpv/i;
const governanceTerms = [
  { key: "dose", pattern: /\b(dose|doses|dosing|mg|mcg|mL)\b/i },
  { key: "interval", pattern: /\b(minimum interval|interval|schedule|catch-up)\b/i },
  { key: "route", pattern: /\b(route|intramuscular|subcutaneous|needle|injection)\b/i },
  { key: "contraindication", pattern: /\b(contraindication|contraindicated|precaution)\b/i },
  { key: "emergency", pattern: /\b(emergency|anaphylaxis|adrenaline|epinephrine|urgent)\b/i },
  { key: "product", pattern: /\b(brand|product-specific|manufacturer)\b/i }
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
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function bodyTextForScan(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html.replace(/<head[\s\S]*?<\/head>/i, " ");

  return body
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
    status: readMeta(html, "status"),
    medical_review_status: readMeta(html, "medical_review_status"),
    last_reviewed: readMeta(html, "last_reviewed"),
    references: readMeta(html, "references")
  };
}

function isVaccinationCandidate(record) {
  return record.category === "Vaccination" || vaccinationNamePattern.test(`${record.file} ${record.title} ${record.slug}`);
}

function governanceFlags(bodyText) {
  return governanceTerms
    .filter((term) => term.pattern.test(bodyText))
    .map((term) => term.key);
}

function priorityFor(record, flags) {
  if (record.medical_review_status !== "reviewed" && (flags.includes("dose") || flags.includes("interval") || flags.includes("emergency") || flags.includes("contraindication"))) {
    return 1;
  }

  if (record.medical_review_status !== "reviewed") return 2;
  return 3;
}

function audit() {
  const files = getHtmlFiles(conditionsDir);
  const candidates = [];

  files.forEach((file) => {
    const html = fs.readFileSync(path.join(conditionsDir, file), "utf8");
    const record = metadataFor(file, html);

    if (!isVaccinationCandidate(record)) return;

    const flags = governanceFlags(bodyTextForScan(html));
    candidates.push({
      ...record,
      priority: priorityFor(record, flags),
      governanceFlags: flags.length ? flags : ["general-vaccination-content"]
    });
  });

  candidates.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    const aPending = a.medical_review_status !== "reviewed";
    const bPending = b.medical_review_status !== "reviewed";
    if (aPending !== bPending) return aPending ? -1 : 1;
    return a.file.localeCompare(b.file);
  });

  const summary = {
    totalVaccinationCandidates: candidates.length,
    pendingVaccinationCandidates: candidates.filter((item) => item.medical_review_status !== "reviewed").length,
    reviewedVaccinationCandidates: candidates.filter((item) => item.medical_review_status === "reviewed").length,
    priority1PendingCandidates: candidates.filter((item) => item.priority === 1).length,
    priority2PendingCandidates: candidates.filter((item) => item.priority === 2).length
  };

  console.log("Clinical Portal 2026 — vaccination governance review-pack audit");
  console.log(JSON.stringify(summary, null, 2));

  [1, 2, 3].forEach((priority) => {
    const group = candidates.filter((item) => item.priority === priority);
    console.log(`\n## Priority ${priority} vaccination candidates (${group.length})`);
    group.forEach((item) => {
      console.log(`- ${item.file}`);
      console.log(`  title: ${item.title}`);
      console.log(`  category: ${item.category}`);
      console.log(`  status/review: ${item.status}/${item.medical_review_status}`);
      console.log(`  last_reviewed: ${item.last_reviewed || "MISSING"}`);
      console.log(`  governance_flags: ${item.governanceFlags.join(", ")}`);
    });
  });
}

audit();
