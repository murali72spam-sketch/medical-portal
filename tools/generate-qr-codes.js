const fs = require("node:fs/promises");
const path = require("node:path");
const QRCode = require("qrcode");

const baseUrl = "https://medical-portal-brown.vercel.app/html-conditions/";
const pageSlugs = [
  "common-cold-in-children",
  "02-bronchiolitis-parent-guide",
  "01-croup-parent-guide",
  "cough-in-children",
  "hand-hygiene-and-cough-etiquette",
  "thumb-sucking-parent-guide",
  "developmental-milestones-parent-guide",
  "flat-feet-parent-guide",
  "intoeing-parent-guide",
  "nutrition-1-to-2-years",
  "picky-eating",
  "preschool-nutrition-2-to-5-years",
  "school-age-nutrition-5-to-12-years",
  "speech-and-language-delay-parent-guide",
  "stuttering-parent-guide",
  "mosquito-bite-prevention",
];

async function generateQrCodes() {
  const outputDirectory = path.join(__dirname, "..", "assets", "qr");
  await fs.mkdir(outputDirectory, { recursive: true });

  for (const slug of pageSlugs) {
    const url = `${baseUrl}${slug}.html`;
    const svg = await QRCode.toString(url, {
      type: "svg",
      errorCorrectionLevel: "M",
      margin: 2,
      width: 320,
      color: {
        dark: "#102A43",
        light: "#FFFFFF",
      },
    });

    await fs.writeFile(path.join(outputDirectory, `${slug}.svg`), svg, "utf8");
  }

  console.log(`Generated ${pageSlugs.length} QR codes in assets/qr.`);
}

generateQrCodes().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
