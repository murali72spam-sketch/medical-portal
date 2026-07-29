const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const approvedOrigin = "https://www.drmuraligopal.com";

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function publishedResourceCount() {
  return JSON.parse(read("data/conditions-index.json"))
    .filter((resource) => resource.status === "published").length;
}

function sitemapUrls() {
  return [...read("sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1]
  );
}

function canonicalUrls(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)]
    .map((match) => match[0])
    .filter((tag) => /\brel=["']canonical["']/i.test(tag))
    .map((tag) => tag.match(/\bhref=["']([^"']+)["']/i)?.[1] || "");
}

test.describe("Technical SEO governance", () => {
  test("sitemap URLs are unique and exactly self-canonicalized", () => {
    const urls = sitemapUrls();
    expect(new Set(urls).size).toBe(urls.length);

    for (const url of urls) {
      expect(url.startsWith(`${approvedOrigin}/`)).toBeTruthy();
      const pathname = new URL(url).pathname;
      const file = pathname === "/" ? "index.html" : pathname.slice(1);
      expect(canonicalUrls(read(file))).toEqual([url]);
    }
  });

  test("redirect configuration is permanent, stable, and excluded from discovery", () => {
    const redirects = JSON.parse(read("vercel.json")).redirects;
    expect(redirects).toEqual([
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/html-conditions/bedwetting-parent-guide.html",
        destination: "/html-conditions/bedwetting-nocturnal-enuresis-parent-guide.html",
        permanent: true
      },
      {
        source: "/html-conditions/temper-tantrums-parent-guide.html",
        destination: "/html-conditions/temper-tantrums-and-behaviour-regulation-parent-guide.html",
        permanent: true
      }
    ]);

    const sitemap = read("sitemap.xml");
    const index = JSON.parse(read("data/conditions-index.json"));
    for (const redirect of redirects) {
      expect(sitemap).not.toContain(`${approvedOrigin}${redirect.source}</loc>`);
      expect(index.some((resource) => `/${resource.url}` === redirect.source)).toBe(false);
      expect(redirects.some((candidate) => candidate.source === redirect.destination)).toBe(false);
    }
  });

  test("deployed public HTML contains no index.html homepage links", () => {
    const files = [
      "index.html",
      "profile.html",
      "404.html",
      ...fs.readdirSync(path.join(root, "legal"))
        .filter((name) => name.endsWith(".html"))
        .map((name) => `legal/${name}`),
      ...fs.readdirSync(path.join(root, "html-conditions"))
        .filter((name) => name.endsWith(".html"))
        .map((name) => `html-conditions/${name}`)
    ];

    for (const file of files) {
      expect(read(file), file).not.toMatch(/\bhref=["'][^"']*index\.html/i);
    }
  });
});

test.describe("Homepage filter-state regression", () => {
  const expectedResourceCount = publishedResourceCount();
  const expectedResourceCountLabel = `${expectedResourceCount} resources`;

  test.beforeEach(async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
  });

  test("first load and clear restore all published resources", async ({ page }) => {
    const count = page.locator("[data-resource-count]");
    const empty = page.locator("[data-empty-state]");
    const input = page.locator("[data-resource-search]");
    const allFilter = page.locator('[data-category-filter="All"]');

    await expect(count).toHaveText(expectedResourceCountLabel);
    await expect(empty).toBeHidden();
    await expect(input).toHaveValue("");
    await expect(allFilter).toHaveAttribute("aria-pressed", "true");
    await expect(allFilter).toContainText(`(${expectedResourceCount})`);

    await input.fill("no-such-resource-technical-seo");
    await expect(empty).toBeVisible();
    await page.locator("[data-clear-filters]").click();

    await expect(count).toHaveText(expectedResourceCountLabel);
    await expect(empty).toBeHidden();
    await expect(input).toHaveValue("");
    await expect(allFilter).toHaveAttribute("aria-pressed", "true");
    await expect(allFilter).toContainText(`(${expectedResourceCount})`);
  });

  test("category, search, clear, and keyboard state remain synchronized", async ({ page }) => {
    const respiratory = page.locator('[data-category-filter="Respiratory"]');
    await respiratory.focus();
    await page.keyboard.press("Enter");
    await expect(respiratory).toHaveAttribute("aria-pressed", "true");

    await page.locator("[data-resource-search]").fill("no-such-resource-technical-seo");
    await expect(page.locator("[data-empty-state]")).toBeVisible();
    await page.locator("[data-clear-filters]").click();

    await expect(respiratory).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator('[data-category-filter="All"]')).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    await expect(page.locator("[data-resource-count]")).toHaveText(
      expectedResourceCountLabel
    );
  });

  test("pageshow restoration resets mismatched browser-restored controls", async ({ page }) => {
    await page.evaluate(() => {
      const input = document.querySelector("[data-resource-search]");
      input.value = "stale restored search";
      document
        .querySelector('[data-category-filter="Respiratory"]')
        .setAttribute("aria-pressed", "true");
      document.querySelector("[data-empty-state]").classList.remove("hidden");
      window.dispatchEvent(new PageTransitionEvent("pageshow", { persisted: true }));
    });

    await expect(page.locator("[data-resource-search]")).toHaveValue("");
    await expect(page.locator("[data-resource-count]")).toHaveText(
      expectedResourceCountLabel
    );
    await expect(page.locator("[data-empty-state]")).toBeHidden();
    await expect(page.locator('[data-category-filter="All"]')).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    await expect(page.locator('[data-category-filter="Respiratory"]')).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  });
});
