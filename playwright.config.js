const { defineConfig } = require("@playwright/test");

const browserChannel =
  process.env.PLAYWRIGHT_CHANNEL ||
  (process.platform === "win32" ? "msedge" : undefined);

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  webServer: {
    command: "node node_modules/http-server/bin/http-server . -p 4173 -c-1 --silent",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true,
    timeout: 30000
  },
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
