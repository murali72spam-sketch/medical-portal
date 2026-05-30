const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const conditionsDir = path.join(root, "html-conditions");

const reviewModePhrases = [
  /draft resource/i,
  /clinician review pending/i,
  /pending clinician review/i,
  /internal review only/i,
  /under development/i,
  /needs-verification/i,
  /pending-clinician-review/i
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

function getBodyText(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html.replace(/<head[\s\S]*?<\/head>/i, "");

  return body
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--([\s\S]*?)-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findBodyMatches(bodyText) {
  return reviewModePhrases
    .filter((pattern) => pattern.test(bodyText))
    .map((pattern) => pattern.source.replace(/\\/g, ""));
}

function audit() {
  const files = getHtmlFiles(conditionsDir);
  const conflicts = [];
  const pendingWithBodyNotice = [];
  const summary = {
    totalHtmlFiles: files.length,
    reviewedPublished: 0,
    pendingOrDraft: 0,
    reviewedPublishedVisibleConflicts: 0,
    pendingOrDraftVisibleNotices: 0
  };

  for (const file of files) {
    const fullPath = path.join(conditionsDir, file);
    const html = fs.readFileSync(fullPath, "utf8");
    const title = readMeta(html, "title") || file;
    const status = readMeta(html, "status");
    const medicalReviewStatus = readMeta(html, "medical_review_status");
    const isReviewedPublished = status === "published" && medicalReviewStatus === "reviewed";
    const isPendingOrDraft = status === "draft" || medicalReviewStatus === "pending-clinician-review" || medicalReviewStatus === "needs-verification";
    const bodyMatches = findBodyMatches(getBodyText(html));

    if (isReviewedPublished) summary.reviewedPublished += 1;
    if (isPendingOrDraft) summary.pendingOrDraft += 1;

    if (isReviewedPublished && bodyMatches.length > 0) {
      conflicts.push({ file, title, status, medicalReviewStatus, bodyMatches });
    }

    if (isPendingOrDraft && bodyMatches.length > 0) {
      pendingWithBodyNotice.push({ file, title, status, medicalReviewStatus, bodyMatches });
    }
  }

  summary.reviewedPublishedVisibleConflicts = conflicts.length;
  summary.pendingOrDraftVisibleNotices = pendingWithBodyNotice.length;

  console.log("Clinical Portal 2026 — public status consistency audit");
  console.log(JSON.stringify(summary, null, 2));

  if (conflicts.length > 0) {
    console.log("\nReviewed + published resources with visible draft/pending/internal-review wording:");
    conflicts.forEach((item) => {
      console.log(`- ${item.file} | ${item.title} | matches: ${item.bodyMatches.join(", ")}`);
    });
  } else {
    console.log("\nNo reviewed + published resources contain visible draft/pending/internal-review wording.");
  }

  if (pendingWithBodyNotice.length > 0) {
    console.log("\nPending/draft resources with visible review-mode wording, allowed if direct-link warning is intended:");
    pendingWithBodyNotice.forEach((item) => {
      console.log(`- ${item.file} | ${item.title} | ${item.status}/${item.medicalReviewStatus} | matches: ${item.bodyMatches.join(", ")}`);
    });
  }

  if (conflicts.length > 0) {
    process.exitCode = 1;
  }
}

audit();
