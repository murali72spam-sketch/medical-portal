const { defineConfig } = require("@playwright/test");

const useExternalBaseUrl = Boolean(process.env.BASE_URL);

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || "http://127.0.0.1:4173",
    browserName: "chromium",
    headless: true
  },
  webServer: useExternalBaseUrl
    ? undefined
    : {
        command: "npx http-server . -p 4173 -c-1",
        url: "http://127.0.0.1:4173",
        reuseExistingServer: true,
        timeout: 30000
      },
  reporter: [
    ["list"],
    ["html", { open: "never" }]
  ]
});
