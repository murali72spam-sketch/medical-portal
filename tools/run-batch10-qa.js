const { spawn } = require("child_process");
const http = require("http");
const path = require("path");

const localBaseUrl = "http://127.0.0.1:4173";
const baseUrl = process.env.BASE_URL || localBaseUrl;
const args = ["test", "tests/batch10.spec.js", ...process.argv.slice(2)];

function waitForServer(url, timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;

  return new Promise((resolve, reject) => {
    const check = () => {
      const request = http.get(url, (response) => {
        response.resume();
        resolve();
      });

      request.on("error", (error) => {
        if (Date.now() > deadline) {
          reject(error);
          return;
        }

        setTimeout(check, 250);
      });

      request.setTimeout(2000, () => {
        request.destroy();
      });
    };

    check();
  });
}

function run(command, commandArgs, options = {}) {
  return spawn(command, commandArgs, {
    cwd: path.resolve(__dirname, ".."),
    env: { ...process.env, BASE_URL: baseUrl },
    stdio: "inherit",
    windowsHide: true,
    ...options
  });
}

async function main() {
  let server;

  if (!process.env.BASE_URL) {
    const httpServerBin = path.resolve(__dirname, "..", "node_modules", "http-server", "bin", "http-server");
    server = run(process.execPath, [httpServerBin, ".", "-p", "4173", "-c-1", "--silent"], {
      stdio: "ignore"
    });

    await waitForServer(localBaseUrl);
  }

  const playwrightCli = path.resolve(
    __dirname,
    "..",
    "node_modules",
    "@playwright",
    "test",
    "cli.js"
  );

  const exitCode = await new Promise((resolve) => {
    const child = run(process.execPath, [playwrightCli, ...args]);
    child.on("exit", (code) => resolve(code ?? 1));
  });

  if (server) {
    server.kill();
  }

  process.exit(exitCode);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
