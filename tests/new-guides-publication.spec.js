const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const approvedOrigin = "https://www.drmuraligopal.com";

const publishedGuides = [
  {
    title: "Breathing Difficulty in Children",
    relativePath: "html-conditions/breathing-difficulty-in-children-parent-guide.html",
    canonical: `${approvedOrigin}/html-conditions/breathing-difficulty-in-children-parent-guide.html`,
    backlinks: [
      "html-conditions/cough-in-children.html",
      "html-conditions/01-croup-parent-guide.html",
      "html-conditions/02-bronchiolitis-parent-guide.html",
      "html-conditions/16-pneumonia-parent-guide.html",
      "html-conditions/asthma-in-children.html",
      "html-conditions/red-flags-urgent-care.html",
      "html-conditions/when-to-seek-urgent-medical-care-parent-guide.html"
    ]
  },
  {
    title: "Dehydration in Babies and Children",
    relativePath: "html-conditions/dehydration-in-babies-and-children-parent-guide.html",
    canonical: `${approvedOrigin}/html-conditions/dehydration-in-babies-and-children-parent-guide.html`,
    backlinks: [
      "html-conditions/gastroenteritis-diarrhoea.html",
      "html-conditions/fever-in-children.html",
      "html-conditions/02-bronchiolitis-parent-guide.html",
      "html-conditions/abdominal-pain-in-children.html",
      "html-conditions/red-flags-urgent-care.html",
      "html-conditions/when-to-seek-urgent-medical-care-parent-guide.html"
    ]
  }
];

function absolutePath(relativePath) {
  return path.join(root, relativePath);
}

function read(relativePath) {
  return fs.readFileSync(absolutePath(relativePath), "utf8");
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

function bodyHtml(html) {
  return html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i)?.[1] || "";
}

function countOccurrences(text, pattern) {
  return (text.match(pattern) || []).length;
}

test.describe("New breathing and dehydration publication governance", () => {
  test("published guide files exist and carry reviewed metadata", () => {
    const canonicalSet = new Set();

    for (const guide of publishedGuides) {
      expect(fs.existsSync(absolutePath(guide.relativePath)), `${guide.relativePath} should exist`).toBe(true);

      const html = read(guide.relativePath);
      expect(metaContent(html, "title")).toBe(guide.title);
      expect(metaContent(html, "description")).not.toBe("");
      expect(metaContent(html, "author")).toBe("Dr. Murali Gopal");
      expect(metaContent(html, "last_reviewed")).toBe("2026-08-03");
      expect(metaContent(html, "references")).not.toBe("");
      expect(metaContent(html, "status")).toBe("published");
      expect(metaContent(html, "medical_review_status")).toBe("reviewed");
      expect(metaContent(html, "robots")).toBe("");
      expect(html).not.toMatch(/\bnoindex\b|\bnofollow\b/i);
      expect(canonicalUrls(html)).toEqual([guide.canonical]);
      expect(html).not.toMatch(/<meta\s+name=["'](?:hero_image|hero_alt|visual_context)["']/i);

      canonicalSet.add(guide.canonical);
    }

    expect(canonicalSet.size).toBe(publishedGuides.length);
  });

  test("published pages show reviewed wording, disclaimer, references, and safe headings", () => {
    for (const guide of publishedGuides) {
      const html = read(guide.relativePath);
      const body = bodyHtml(html);

      expect(body).toContain("Reviewed");
      expect(body).toContain("3 August 2026");
      expect(body).toMatch(/<h2[^>]*>\s*Medical disclaimer\s*<\/h2>/i);
      expect(body).toMatch(/<h2[^>]*>\s*References\s*<\/h2>/i);
      expect(body).toMatch(/class=["'][^"']*notice-disclaimer/i);
      expect(body).toMatch(/class=["'][^"']*badge-reviewed/i);
      expect(body).not.toMatch(/\bdraft\b|\bpending-review\b|Pending final medical review/i);
      expect(hasValidHeadingOrder(headingLevels(html))).toBe(true);
      expect(headingLevels(html).filter((level) => level === 1)).toHaveLength(1);
    }
  });

  test("published guides are present exactly once in index and sitemap", () => {
    const index = JSON.parse(read("data/conditions-index.json"));
    const sitemap = read("sitemap.xml");

    for (const guide of publishedGuides) {
      const resources = index.filter((resource) => resource.url === guide.relativePath);
      expect(resources, `${guide.relativePath} should be indexed once`).toHaveLength(1);
      expect(resources[0].status).toBe("published");
      expect(resources[0].medical_review_status).toBe("reviewed");
      expect(resources[0].title).toBe(guide.title);

      expect(countOccurrences(sitemap, new RegExp(`<loc>${guide.canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>`, "g"))).toBe(1);
    }
  });

  test("published guides are discoverable from generated homepage resource data", () => {
    const resources = JSON.parse(read("data/conditions-index.json"));
    const titles = resources.map((resource) => resource.title);

    for (const guide of publishedGuides) {
      expect(titles.filter((title) => title === guide.title)).toHaveLength(1);
    }
  });

  test("intended contextual backlinks exist without duplicates", () => {
    for (const guide of publishedGuides) {
      const basename = path.basename(guide.relativePath);

      for (const backlinkFile of guide.backlinks) {
        const hrefs = linkedHrefs(read(backlinkFile));
        expect(
          hrefs.filter((href) => href === `./${basename}`),
          `${backlinkFile} should link once to ${basename}`
        ).toHaveLength(1);
      }
    }
  });

  test("published content contains no obvious dosing patterns or treatment tables", () => {
    for (const guide of publishedGuides) {
      const html = read(guide.relativePath);
      expect(html).not.toMatch(/\b(?:mg|mcg|microgram|mL|ml|units?)\s*\/\s*kg\b/i);
      expect(html).not.toMatch(/\b(?:BD|TID|QID|OD)\b/);
      expect(html).not.toMatch(/<table\b/i);
      expect(html).not.toMatch(/Plan\s*[ABC]\b/i);
    }
  });

  for (const guide of publishedGuides) {
    test(`${guide.title} renders on mobile without overflow and hides print controls`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`/${guide.relativePath}`, { waitUntil: "domcontentloaded" });

      await expect(page.getByRole("heading", { name: guide.title, level: 1 })).toBeVisible();
      await expect(page.getByText(/3 August 2026/i).first()).toBeVisible();
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
