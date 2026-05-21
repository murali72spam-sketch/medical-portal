const { defineConfig } = require("@playwright/test");

const browserChannel =
  process.env.PLAYWRIGHT_CHANNEL ||
  (process.platform === "win32" ? "msedge" : undefined);

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
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
