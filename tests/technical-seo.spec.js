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

function rgbValues(color) {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  expect(match, `Expected rgb color, received ${color}`).not.toBeNull();
  return match.slice(1, 4).map(Number);
}

function relativeLuminance(color) {
  const values = rgbValues(color).map((value) => {
    const channel = value / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;
  });

  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
}

function contrastRatio(foreground, background) {
  const lighter = Math.max(relativeLuminance(foreground), relativeLuminance(background));
  const darker = Math.min(relativeLuminance(foreground), relativeLuminance(background));
  return (lighter + 0.05) / (darker + 0.05);
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

  test("selected resource filter chips use readable active styling", async ({ page }) => {
    const chipStyles = (selector) =>
      page.locator(selector).evaluate((element) => {
        const styles = window.getComputedStyle(element);
        return {
          backgroundColor: styles.backgroundColor,
          borderColor: styles.borderColor,
          color: styles.color
        };
      });

    const allFilter = page.locator('[data-category-filter="All"]');
    const respiratory = page.locator('[data-category-filter="Respiratory"]');
    const gastrointestinal = page.locator('[data-category-filter="Gastrointestinal"]');
    const medication = page.locator('[data-category-filter="Medication Information"]');

    await expect(allFilter).toHaveAttribute("aria-pressed", "true");
    await expect(allFilter).toContainText(`(${expectedResourceCount})`);

    const selectedAll = await chipStyles('[data-category-filter="All"]');
    const unselectedRespiratory = await chipStyles('[data-category-filter="Respiratory"]');

    expect(selectedAll.color).toBe("rgb(255, 255, 255)");
    expect(contrastRatio(selectedAll.color, selectedAll.backgroundColor)).toBeGreaterThanOrEqual(4.5);
    expect(selectedAll.backgroundColor).not.toBe(unselectedRespiratory.backgroundColor);
    expect(selectedAll.borderColor).not.toBe(unselectedRespiratory.borderColor);

    await respiratory.click();
    await expect(respiratory).toHaveAttribute("aria-pressed", "true");
    await expect(gastrointestinal).toHaveAttribute("aria-pressed", "false");

    const selectedRespiratory = await chipStyles('[data-category-filter="Respiratory"]');
    const unselectedGastrointestinal = await chipStyles('[data-category-filter="Gastrointestinal"]');

    expect(selectedRespiratory.color).toBe("rgb(255, 255, 255)");
    expect(
      contrastRatio(selectedRespiratory.color, selectedRespiratory.backgroundColor)
    ).toBeGreaterThanOrEqual(4.5);
    expect(selectedRespiratory.backgroundColor).not.toBe(
      unselectedGastrointestinal.backgroundColor
    );

    await expect(medication).toBeDisabled();
    await expect(medication).toHaveAttribute("aria-pressed", "false");
    expect((await chipStyles('[data-category-filter="Medication Information"]')).backgroundColor).not.toBe(
      selectedRespiratory.backgroundColor
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
