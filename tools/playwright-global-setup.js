const { spawn } = require("child_process");
const http = require("http");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

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

async function waitForServerToClose(url, timeoutMs = 10000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      await waitForServer(url, 250);
      await new Promise((resolve) => setTimeout(resolve, 250));
    } catch {
      return;
    }
  }
}

module.exports = async () => {
  if (process.env.BASE_URL) {
    return;
  }

  try {
    await waitForServer(baseUrl, 1000);
    return;
  } catch {
    // Start the local static server below.
  }

  const httpServerBin = path.join(root, "node_modules", "http-server", "bin", "http-server");
  const server = spawn(process.execPath, [httpServerBin, ".", "-p", String(port), "-c-1", "--silent"], {
    cwd: root,
    stdio: "ignore",
    windowsHide: true
  });

  await waitForServer(baseUrl);

  return async () => {
    const exited = new Promise((resolve) => {
      server.once("exit", resolve);
    });

    if (!server.killed && server.exitCode === null) {
      server.kill();
      await Promise.race([
        exited,
        new Promise((resolve) => setTimeout(resolve, 5000))
      ]);
    }

    await waitForServerToClose(baseUrl);
  };
};
