const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const conditionsDir = path.join(root, "html-conditions");

const riskRules = [
  {
    key: "vaccination",
    label: "Vaccination / immunisation",
    priority: 1,
    pattern: /vaccin|immunis|immuniz|catch-up|bcg|hpv|acvip|iap/i
  },
  {
    key: "dose-medication",
    label: "Dose / medication / treatment wording",
    priority: 1,
    pattern: /\b(dose|dosing|mg|mcg|mL|antibiotic|steroid|insulin|levothyroxine|salbutamol|adrenaline|epinephrine|emergency treatment|treatment algorithm|minimum interval)\b/i
  },
  {
    key: "emergency-high-caution",
    label: "Emergency / high-caution recognition",
    priority: 2,
    pattern: /\b(emergency|danger signs|urgent|red flags|breathing difficulty|unconscious|seizure|anaphylaxis|poison|burn|head injury|meningitis|kawasaki|mis-c)\b/i
  },
  {
    key: "serious-infection",
    label: "Serious infection / systemic illness",
    priority: 2,
    pattern: /\b(osteomyelitis|typhoid|pneumonia|measles|pertussis|dengue|meningitis|sepsis|tuberculosis|uti|urinary tract infection)\b/i
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
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function textForScan(html) {
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
    status: readMeta(html, "status"),
    medical_review_status: readMeta(html, "medical_review_status"),
    last_reviewed: readMeta(html, "last_reviewed"),
    references: readMeta(html, "references")
  };
}

function ruleMatches(record, scanText) {
  return riskRules
    .filter((rule) => rule.pattern.test(`${record.file} ${record.title} ${record.slug} ${record.category} ${record.references} ${scanText}`))
    .map((rule) => ({ key: rule.key, label: rule.label, priority: rule.priority }));
}

function audit() {
  const files = getHtmlFiles(conditionsDir);
  const candidates = [];

  files.forEach((file) => {
    const html = fs.readFileSync(path.join(conditionsDir, file), "utf8");
    const record = metadataFor(file, html);
    const matches = ruleMatches(record, textForScan(html));

    if (!matches.length) return;

    const highestPriority = Math.min(...matches.map((match) => match.priority));
    candidates.push({
      ...record,
      priority: highestPriority,
      riskGroups: matches.map((match) => match.label)
    });
  });

  candidates.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    if (a.medical_review_status !== b.medical_review_status) {
      if (a.medical_review_status === "pending-clinician-review") return -1;
      if (b.medical_review_status === "pending-clinician-review") return 1;
    }
    return a.file.localeCompare(b.file);
  });

  const summary = {
    totalHtmlFiles: files.length,
    highRiskCandidates: candidates.length,
    pendingHighRiskCandidates: candidates.filter((item) => item.medical_review_status !== "reviewed").length,
    reviewedHighRiskCandidates: candidates.filter((item) => item.medical_review_status === "reviewed").length
  };

  console.log("Clinical Portal 2026 — high-risk clinical review sprint audit");
  console.log(JSON.stringify(summary, null, 2));

  [1, 2].forEach((priority) => {
    const group = candidates.filter((item) => item.priority === priority);
    console.log(`\n## Priority ${priority} candidates (${group.length})`);
    group.forEach((item) => {
      console.log(`- ${item.file}`);
      console.log(`  title: ${item.title}`);
      console.log(`  category: ${item.category}`);
      console.log(`  status/review: ${item.status}/${item.medical_review_status}`);
      console.log(`  last_reviewed: ${item.last_reviewed || "MISSING"}`);
      console.log(`  risk_groups: ${item.riskGroups.join("; ")}`);
    });
  });
}

audit();
