const { defineConfig } = require("@playwright/test");

const browserChannel =
  process.env.PLAYWRIGHT_CHANNEL ||
  (process.platform === "win32" ? "msedge" : undefined);

const selectedTestFiles = process.argv
  .filter((argument) => !argument.startsWith("-"))
  .map((argument) => argument.replace(/\\/g, "/"))
  .filter((argument) => /(?:^|\/)tests\/.*\.spec\.js$/.test(argument));

const isOnlyDraftGuideSpecSelected =
  selectedTestFiles.length === 1 &&
  selectedTestFiles[0].endsWith("tests/new-guides-draft.spec.js");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  globalSetup: isOnlyDraftGuideSpecSelected ? undefined : "./tools/playwright-global-setup.js",
  use: {
    baseURL: process.env.BASE_URL || "http://127.0.0.1:4173",
    browserName: "chromium",
    channel: browserChannel,
    ignoreHTTPSErrors: true,
    headless: true
  },
  reporter: [
    ["list"],
    ["html", { open: "never" }]
  ]
});
