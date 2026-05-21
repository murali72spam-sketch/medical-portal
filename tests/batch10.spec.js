const { test, expect } = require("@playwright/test");

// Production QA should use the public production alias:
// BASE_URL=https://medical-portal-brown.vercel.app npm run qa:batch10
// Protected Vercel preview/deployment URLs can redirect to Vercel Authentication.
const publicProductionUrl = "https://medical-portal-brown.vercel.app";

const batch10Resources = [
  {
    title: "Normal Newborn Care",
    path: "/html-conditions/normal-newborn-care-parent-guide.html",
    indexedUrl: "html-conditions/normal-newborn-care-parent-guide.html",
    image: "normal-newborn-care.png"
  },
  {
    title: "Newborn Danger Signs",
    path: "/html-conditions/neonatal-danger-signs-parent-guide.html",
    indexedUrl: "html-conditions/neonatal-danger-signs-parent-guide.html",
    image: "neonatal-danger-signs.png"
  },
  {
    title: "Umbilical Cord Care",
    path: "/html-conditions/umbilical-cord-care-parent-guide.html",
    indexedUrl: "html-conditions/umbilical-cord-care-parent-guide.html",
    image: "umbilical-cord-care.png"
  },
  {
    title: "Newborn Jaundice",
    path: "/html-conditions/newborn-jaundice-parent-guide.html",
    indexedUrl: "html-conditions/newborn-jaundice-parent-guide.html",
    image: "newborn-jaundice.png"
  },
  {
    title: "Breastfeeding Basics",
    path: "/html-conditions/breastfeeding-basics-parent-guide.html",
    indexedUrl: "html-conditions/breastfeeding-basics-parent-guide.html",
    image: "breastfeeding-basics.png"
  },
  {
    title: "Infant Colic",
    path: "/html-conditions/infant-colic-parent-guide.html",
    indexedUrl: "html-conditions/infant-colic-parent-guide.html",
    image: "infant-colic.png"
  }
];

function isVercelLoginUrl(url) {
  return /https:\/\/vercel\.com\/login/i.test(url);
}

function vercelLoginMessage(url) {
  return [
    `Batch 10 QA was redirected to Vercel login: ${url}`,
    `Use the public production alias (${publicProductionUrl}) for production browser QA.`,
    "Protected Vercel preview/deployment URLs are expected to fail these public page-opening checks."
  ].join(" ");
}

async function expectNotVercelLogin(responseOrPage) {
  const url = typeof responseOrPage.url === "function" ? responseOrPage.url() : responseOrPage.url();

  if (isVercelLoginUrl(url)) {
    throw new Error(vercelLoginMessage(url));
  }
}

async function waitForImagesToSettle(page) {
  await page.locator("img").evaluateAll((images) =>
    Promise.all(
      images.map((image) => {
        if (image.complete) {
          return Promise.resolve();
        }

        return new Promise((resolve) => {
          const done = () => resolve();
          image.addEventListener("load", done, { once: true });
          image.addEventListener("error", done, { once: true });
          setTimeout(done, 10000);
        });
      })
    )
  );
}

test.describe("Batch 10 newborn and infant care automated QA", () => {
  test("Batch 10 resources are correctly indexed without duplicates", async ({ request }) => {
    const response = await request.get("/data/conditions-index.json");
    await expectNotVercelLogin(response);
    expect(response.ok()).toBeTruthy();

    const resources = await response.json();
    expect(Array.isArray(resources)).toBeTruthy();

    for (const expected of batch10Resources) {
      const sameTitle = resources.filter((resource) => resource.title === expected.title);
      expect(sameTitle, `${expected.title} should appear exactly once in index`).toHaveLength(1);

      const resource = sameTitle[0];

      expect(resource.url).toBe(expected.indexedUrl);
      expect(resource.resource_type).toBe("parent-guide");
      expect(resource.status).toBeTruthy();
      expect(resource.last_reviewed).toBeTruthy();
      expect(resource.references).toBeTruthy();

      expect(resource.hero_image || "").toContain(expected.image);
      expect(resource.hero_alt || "").not.toBe("");

      expect(JSON.stringify(resource)).not.toContain(".png.png");
    }

    const legacyNeonatal = resources.filter(
      (resource) => resource.url === "html-conditions/neonatal-danger-signs.html"
    );
    expect(legacyNeonatal, "Legacy neonatal-danger-signs.html should not remain indexed").toHaveLength(0);
  });

  for (const resource of batch10Resources) {
    test(`${resource.title} page opens and passes visual-safety checks`, async ({ page }) => {
      const response = await page.goto(resource.path, { waitUntil: "domcontentloaded" });
      await expectNotVercelLogin(page);

      expect(response?.ok(), `${resource.title} should load from the configured public site`).toBeTruthy();

      await expect(page.getByRole("heading", { name: resource.title, level: 1 })).toBeVisible();

      await expect(page.getByRole("heading", { name: /medical disclaimer/i })).toBeVisible();
      await expect(page.getByRole("heading", { name: /references/i })).toBeVisible();
      await expect(page.getByText(/last reviewed/i).first()).toBeVisible();

      const heroImage = page.locator(`img[src*="${resource.image}"]`);
      await expect(heroImage).toHaveCount(1);
      await waitForImagesToSettle(page);

      const brokenImages = await page.locator("img").evaluateAll((images) =>
        images
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.getAttribute("src"))
      );

      expect(brokenImages).toEqual([]);

      const pageHtml = await page.content();
      expect(pageHtml).not.toContain(".png.png");
    });
  }
});
