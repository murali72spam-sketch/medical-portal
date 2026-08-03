const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const root = path.join(__dirname, "..");
const approvedOrigin = "https://www.drmuraligopal.com";

const draftGuides = [
  {
    title: "Breathing Difficulty in Children",
    relativePath: "html-conditions/breathing-difficulty-in-children-parent-guide.html",
    canonical: `${approvedOrigin}/html-conditions/breathing-difficulty-in-children-parent-guide.html`
  },
  {
    title: "Dehydration in Babies and Children",
    relativePath: "html-conditions/dehydration-in-babies-and-children-parent-guide.html",
    canonical: `${approvedOrigin}/html-conditions/dehydration-in-babies-and-children-parent-guide.html`
  }
];

function absolutePath(relativePath) {
  return path.join(root, relativePath);
}

function read(relativePath) {
  return fs.readFileSync(absolutePath(relativePath), "utf8");
}

function htmlFilesUnder(relativeDir) {
  return fs
    .readdirSync(absolutePath(relativeDir))
    .filter((name) => name.endsWith(".html"))
    .map((name) => path.join(relativeDir, name).replace(/\\/g, "/"));
}

function metaContent(html, name) {
  const match = html.match(
    new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["']([^"']*)["']`, "i")
  );
  return match?.[1] || "";
}

function canonicalUrls(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)]
    .map((match) => match[0])
    .filter((tag) => /\brel=["']canonical["']/i.test(tag))
    .map((tag) => tag.match(/\bhref=["']([^"']+)["']/i)?.[1] || "");
}

function linkedHrefs(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function isPublishedResource(html) {
  return metaContent(html, "status") === "published";
}

function headingLevels(html) {
  return [...html.matchAll(/<h([1-6])\b[^>]*>/gi)].map((match) => Number(match[1]));
}

function hasValidHeadingOrder(levels) {
  if (levels.filter((level) => level === 1).length !== 1) {
    return false;
  }

  for (let index = 1; index < levels.length; index += 1) {
    if (levels[index] - levels[index - 1] > 1) {
      return false;
    }
  }

  return true;
}

test.describe("New breathing and dehydration draft-guide governance", () => {
  test("draft guide files exist and carry required draft metadata", () => {
    for (const guide of draftGuides) {
      expect(fs.existsSync(absolutePath(guide.relativePath)), `${guide.relativePath} should exist`).toBe(true);

      const html = read(guide.relativePath);
      expect(metaContent(html, "title")).toBe(guide.title);
      expect(metaContent(html, "description")).not.toBe("");
      expect(metaContent(html, "author")).toBe("Dr. Murali Gopal");
      expect(metaContent(html, "last_reviewed")).toBe("2026-08-03");
      expect(metaContent(html, "references")).not.toBe("");
      expect(metaContent(html, "status")).toBe("draft");
      expect(metaContent(html, "medical_review_status")).toBe("pending-review");
      expect(metaContent(html, "robots").replace(/\s+/g, "")).toBe("noindex,nofollow");
      expect(canonicalUrls(html)).toEqual([guide.canonical]);
      expect(html).not.toMatch(/<meta\s+name=["'](?:hero_image|hero_alt|visual_context)["']/i);
    }
  });

  test("draft pages show pending-review wording, disclaimer, references, and safe headings", () => {
    for (const guide of draftGuides) {
      const html = read(guide.relativePath);
      expect(html).toContain("Draft &mdash; Pending Medical Review");
      expect(html).toContain("Draft evidence review: 3 August 2026");
      expect(html).toContain("Pending final medical review before publication");
      expect(html).toMatch(/<h2[^>]*>\s*Medical disclaimer\s*<\/h2>/i);
      expect(html).toMatch(/<h2[^>]*>\s*References\s*<\/h2>/i);
      expect(html).toMatch(/class=["'][^"']*notice-disclaimer/i);
      expect(html).not.toMatch(/<span[^>]*class=["'][^"']*badge-reviewed[^"']*["'][^>]*>/i);
      expect(html).not.toMatch(/<span[^>]*>\s*Published\s*<\/span>/i);
      expect(html).not.toMatch(/<strong>\s*Medically reviewed\s*<\/strong>/i);
      expect(html).not.toMatch(/Clinician reviewed/i);
      expect(hasValidHeadingOrder(headingLevels(html))).toBe(true);
      expect(headingLevels(html).filter((level) => level === 1)).toHaveLength(1);
    }
  });

  test("draft guides are excluded from generated discovery surfaces and existing published links", () => {
    const index = JSON.parse(read("data/conditions-index.json"));
    const sitemap = read("sitemap.xml");
    const homepage = read("index.html");
    const publishedPages = htmlFilesUnder("html-conditions").filter((file) => {
      if (draftGuides.some((guide) => guide.relativePath === file)) {
        return false;
      }
      return isPublishedResource(read(file));
    });

    for (const guide of draftGuides) {
      const basename = path.basename(guide.relativePath);
      expect(index.some((resource) => resource.url === guide.relativePath)).toBe(false);
      expect(sitemap).not.toContain(guide.canonical);
      expect(homepage).not.toContain(basename);

      for (const pageFile of publishedPages) {
        const hrefs = linkedHrefs(read(pageFile));
        expect(hrefs, `${pageFile} should not link to draft ${basename}`).not.toContain(`./${basename}`);
        expect(hrefs, `${pageFile} should not link to draft ${basename}`).not.toContain(guide.relativePath);
        expect(hrefs, `${pageFile} should not link to draft ${basename}`).not.toContain(`/${guide.relativePath}`);
        expect(hrefs, `${pageFile} should not link to draft ${basename}`).not.toContain(guide.canonical);
      }
    }
  });

  test("draft content contains no obvious dosing patterns or treatment tables", () => {
    for (const guide of draftGuides) {
      const html = read(guide.relativePath);
      expect(html).not.toMatch(/\b(?:mg|mcg|microgram|mL|ml|units?)\s*\/\s*kg\b/i);
      expect(html).not.toMatch(/\b(?:BD|TID|QID|OD)\b/);
      expect(html).not.toMatch(/<table\b/i);
      expect(html).not.toMatch(/Plan\s*[ABC]\b/i);
    }
  });

  for (const guide of draftGuides) {
    test(`${guide.title} renders on mobile without overflow and hides print controls`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(pathToFileURL(absolutePath(guide.relativePath)).href, {
        waitUntil: "domcontentloaded"
      });

      await expect(page.getByRole("heading", { name: guide.title, level: 1 })).toBeVisible();
      await expect(page.getByText(/Draft evidence review: 3 August 2026/i).first()).toBeVisible();
      await expect(page.getByRole("heading", { name: /Medical disclaimer/i })).toBeVisible();
      await expect(page.getByRole("heading", { name: /References/i })).toBeVisible();

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth
      );
      expect(hasHorizontalOverflow).toBe(false);

      await page.emulateMedia({ media: "print" });
      await expect(page.locator(".handout-tools")).toBeHidden();
      await expect(page.locator(".print-guide-button")).toBeHidden();
    });
  }
});
