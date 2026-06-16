const fs = require("node:fs/promises");
const path = require("node:path");
const QRCode = require("qrcode");

const baseUrl = "https://medical-portal-brown.vercel.app/html-conditions/";
const pageSlugs = [
  "01-croup-parent-guide",
  "02-bronchiolitis-parent-guide",
  "03-middle-ear-infection-parent-guide",
  "04-conjunctivitis-parent-guide",
  "05-tonsillitis-parent-guide",
  "06-impetigo-parent-guide",
  "11-hives-parent-guide",
  "12-head-lice-parent-guide",
  "13-vulvovaginitis-parent-guide",
  "17-molluscum-parent-guide",
  "18-eczema-parent-guide",
  "19-ringworm-parent-guide",
  "20-scabies-parent-guide",
  "acne-in-teenagers-parent-guide",
  "adolescent-nutrition-10-to-19-years",
  "autism-early-concerns-parent-awareness-guide",
  "autism-early-signs-parent-guide",
  "back-pain-and-posture-parent-guide",
  "bcg-scar-and-lump",
  "bedwetting-nocturnal-enuresis-parent-guide",
  "breastfeeding-parent-guide",
  "catch-up-vaccination-parent-guide",
  "chickenpox",
  "childhood-overweight-and-obesity",
  "clubfoot-parent-guide",
  "common-cold-in-children",
  "complementary-feeding-after-6-months",
  "cough-in-children",
  "covid-19-in-children",
  "daytime-wetting-parent-guide",
  "delayed-puberty-in-children",
  "developmental-dysplasia-of-hip-parent-guide",
  "developmental-milestones-parent-guide",
  "diphtheria",
  "early-puberty-in-children",
  "fever-after-vaccination",
  "fever-in-children",
  "flat-feet-parent-guide",
  "growing-pains-parent-guide",
  "hand-foot-mouth-disease",
  "hand-hygiene-and-cough-etiquette",
  "healthy-teen-independence-parent-guide",
  "hpv-vaccine-parent-guide",
  "hyperthyroidism-in-children",
  "hypothyroidism-in-children",
  "infectious-mononucleosis",
  "influenza-vaccine-parent-guide",
  "intoeing-parent-guide",
  "iron-rich-diet-iron-deficiency-prevention",
  "learning-difficulties-school-support-parent-guide",
  "menstrual-health-parent-guide",
  "missed-or-delayed-vaccines",
  "mosquito-bite-prevention",
  "07-meningitis-parent-guide",
  "08-urinary-tract-infection-parent-guide",
  "14-measles-parent-guide",
  "15-whooping-cough-parent-guide",
  "16-pneumonia-parent-guide",
  "nutrition-1-to-2-years",
  "osgood-schlatter-parent-guide",
  "physical-activity-for-teenagers-parent-guide",
  "picky-eating",
  "positive-behaviour-guidance-parent-guide",
  "preschool-nutrition-2-to-5-years",
  "puberty-and-normal-growth-changes-parent-guide",
  "puberty-parent-guide",
  "school-age-nutrition-5-to-12-years",
  "scoliosis-parent-guide",
  "screen-time-and-behaviour-parent-guide",
  "screen-time-parent-guide",
  "severs-disease-parent-guide",
  "short-stature-in-children",
  "sleep-problems-in-children-parent-guide",
  "speech-and-language-delay-parent-guide",
  "stuttering-parent-guide",
  "teen-sleep-habits-parent-guide",
  "temper-tantrums-and-behaviour-regulation-parent-guide",
  "thumb-sucking-parent-guide",
  "thyroid-disorders-in-children",
  "tics-parent-guide",
  "travel-vaccination-for-children",
  "types-of-short-stature",
  "vaccination-faq-for-parents",
  "vaccination-in-children-with-asthma-allergy",
  "vaccination-in-special-medical-conditions",
  "vaccination-records-and-missed-doses",
  "vaccination-why-it-matters",
  "vaccine-myths-and-misconceptions",
  "vaccine-side-effects-and-aftercare",
  "baby-crying-what-is-normal",
  "colic-in-babies",
  "infant-colic-parent-guide",
  "reflux-in-children",
  "rickettsial-fever-scrub-typhus",
  "constipation-in-children",
  "gastroenteritis-diarrhoea",
  "abdominal-pain-in-children",
  "newborn-weight-loss-and-gain",
  "formula-feeding-guidance",
  "growth-faltering-poor-weight-gain",
  "breastfeeding-basics-parent-guide",
  "safe-food-water-and-deworming",
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
