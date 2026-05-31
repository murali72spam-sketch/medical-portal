const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const conditionsDir = path.join(root, "html-conditions");

const rules = [
  {
    key: "vaccination",
    label: "Vaccination / immunisation",
    priority: 1,
    matches: (record) =>
      record.category === "Vaccination" ||
      /vaccin|immunis|immuniz|catch-up|bcg|hpv/i.test(`${record.file} ${record.title} ${record.slug}`)
  },
  {
    key: "dose-medication",
    label: "Dose / medication / treatment wording",
    priority: 1,
    matches: (record, bodyText) =>
      /\b(dose|dosing|mg|mcg|mL|minimum interval|antibiotic|steroid|insulin|levothyroxine|salbutamol|adrenaline|epinephrine|emergency treatment|treatment algorithm)\b/i.test(bodyText)
  },
  {
    key: "serious-infection",
    label: "Serious infection / systemic illness",
    priority: 2,
    matches: (record) =>
      /\b(osteomyelitis|typhoid|pneumonia|measles|pertussis|whooping-cough|dengue|meningitis|encephalitis|sepsis|tuberculosis|malaria|rickettsial|scrub-typhus|uti|urinary-tract-infection|covid|diphtheria|infectious-mononucleosis)\b/i.test(`${record.file} ${record.title} ${record.slug}`)
  },
  {
    key: "emergency-high-caution",
    label: "Emergency / high-caution recognition",
    priority: 2,
    matches: (record) =>
      /\b(danger-signs|urgent-care|urgent-medical-care|red-flags|first-aid|anaphylaxis|poison|poisoning|burn|burns|scald|scalds|head-injury|concussion|choking|foreign-body|animal-bite|dog-bite|seizure|kawasaki|mis-c)\b/i.test(`${record.file} ${record.title} ${record.slug}`)
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
    last_reviewed: readMeta(html, "last_reviewed")
  };
}

function ruleMatches(record, bodyText) {
  return rules
    .filter((rule) => rule.matches(record, bodyText))
    .map((rule) => ({ key: rule.key, label: rule.label, priority: rule.priority }));
}

function uniqueRiskGroups(matches) {
  return [...new Set(matches.map((match) => match.label))];
}

function audit() {
  const files = getHtmlFiles(conditionsDir);
  const candidates = [];

  files.forEach((file) => {
    const html = fs.readFileSync(path.join(conditionsDir, file), "utf8");
    const record = metadataFor(file, html);
    const matches = ruleMatches(record, bodyTextForScan(html));

    if (!matches.length) return;

    const highestPriority = Math.min(...matches.map((match) => match.priority));
    candidates.push({
      ...record,
      priority: highestPriority,
      riskGroups: uniqueRiskGroups(matches)
    });
  });

  candidates.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    const aPending = a.medical_review_status !== "reviewed";
    const bPending = b.medical_review_status !== "reviewed";
    if (aPending !== bPending) return aPending ? -1 : 1;
    return a.file.localeCompare(b.file);
  });

  const pendingCandidates = candidates.filter((item) => item.medical_review_status !== "reviewed");
  const reviewedCandidates = candidates.filter((item) => item.medical_review_status === "reviewed");
  const summary = {
    totalHtmlFiles: files.length,
    highRiskCandidates: candidates.length,
    pendingHighRiskCandidates: pendingCandidates.length,
    reviewedHighRiskCandidates: reviewedCandidates.length,
    priority1PendingCandidates: pendingCandidates.filter((item) => item.priority === 1).length,
    priority2PendingCandidates: pendingCandidates.filter((item) => item.priority === 2).length
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
