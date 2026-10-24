import sharp from 'sharp';
import { mkdirSync, copyFileSync, unlinkSync, readdirSync, existsSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// 1. Copy Megala resume PDF
const resumeSrc = 'C:/Users/MegalaM/Downloads/MEGALA_M_FlowCV_Resume_2026-09-29.pdf';
if (existsSync(resumeSrc)) {
  copyFileSync(resumeSrc, `${OUT}/Megala_M_Resume.pdf`);
  console.log('Megala resume PDF copied.');
}

// 2. Remove legacy assets if present
try { unlinkSync(`${OUT}/Saichandru_S_Resume.pdf`); } catch (e) {}
try { unlinkSync('saichandru_portrait.jpg'); } catch (e) {}
try { unlinkSync('test-trim.jpg'); } catch (e) {}
try { unlinkSync('test-rotate.jpg'); } catch (e) {}
try { unlinkSync('test-rotate2.jpg'); } catch (e) {}

// 3. Megala portrait image
const portraitSrc = 'C:/Users/MegalaM/Downloads/WhatsApp Image 2026-10-23 at 3.44.46 PM.jpeg';
copyFileSync(portraitSrc, 'megala_portrait.jpg');
copyFileSync(portraitSrc, `${OUT}/megala_portrait.jpg`);

// Generate responsive portraits
for (const w of [1100, 720, 420]) {
  await sharp(portraitSrc)
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 92, effort: 6 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}
console.log('Portraits generated.');

// Generate social share image (1200x630)
const portraitSocial = await sharp(portraitSrc)
  .resize({ height: 580, width: 500, fit: 'cover', position: 'top' })
  .webp({ quality: 90 })
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: '#07070a',
  },
})
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="78%" cy="45%" r="45%">
            <stop offset="0%" stop-color="#e50914" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#e50914" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    {
      input: portraitSocial,
      gravity: 'southeast',
    },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="270" font-family="Impact, 'Arial Narrow', sans-serif" font-size="108" fill="#f4f1ec" letter-spacing="4">MEGALA M</text>
        <text x="78" y="335" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#e50914" letter-spacing="8">ASPIRING SOFTWARE DEVELOPER</text>
        <text x="78" y="380" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="16" fill="#a7a6ad" letter-spacing="4">PYTHON • FLUTTER • FIREBASE • SQL • DOCKER • POWER BI</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 90 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('OG image generated.');

// Certificates processing
const certDir = `${OUT}/certificates`;
mkdirSync(certDir, { recursive: true });

// Clean old certificates
for (const f of readdirSync(certDir)) {
  try { unlinkSync(`${certDir}/${f}`); } catch (e) {}
}

const certs = [
  { src: 'WhatsApp Image 2026-10-23 at 3.40.44 PM (1).jpeg', dest: 'cert-lnt-python-challenge.jpg', trim: false, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.45 PM (1).jpeg', dest: 'cert-capabl-ai-agents-n8n.jpg', trim: false, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.46 PM (1).jpeg', dest: 'cert-hackerrank-python-basic.jpg', trim: false, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.46 PM (2).jpeg', dest: 'cert-imagecon-python-fundamentals.jpg', trim: false, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.45 PM (2).jpeg', dest: 'cert-tcs-ion-yuva-ai.jpg', trim: false, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.47 PM (3).jpeg', dest: 'cert-qmos-embedded-systems.jpg', trim: false, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.43 PM.jpeg', dest: 'cert-techforge-fullstack-internship.jpg', trim: true, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.47 PM.jpeg', dest: 'cert-agentic-ai-saksham.jpg', trim: false, rotate: 270 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.46 PM.jpeg', dest: 'cert-excel-expo-ai-hazard.jpg', trim: false, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.44 PM (2).jpeg', dest: 'cert-iste-ramanujan-level3.jpg', trim: false, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.45 PM.jpeg', dest: 'cert-iste-ramanujan-level2.jpg', trim: false, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.44 PM.jpeg', dest: 'cert-imagecon-engineers-day.jpg', trim: true, rotate: 0 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.47 PM (1).jpeg', dest: 'cert-karpagam-data-analytics.jpg', trim: false, rotate: 270 },
  { src: 'WhatsApp Image 2026-10-23 at 3.40.47 PM (2).jpeg', dest: 'cert-karpagam-code-twins.jpg', trim: false, rotate: 0 }
];

for (const c of certs) {
  const fullSrc = `C:/Users/MegalaM/Downloads/${c.src}`;
  if (existsSync(fullSrc)) {
    let pipeline = sharp(fullSrc);
    if (c.rotate) {
      pipeline = pipeline.rotate(c.rotate);
    }
    if (c.trim) {
      pipeline = pipeline.trim();
    }
    await pipeline
      .jpeg({ quality: 92 })
      .toFile(`${certDir}/${c.dest}`);
    console.log(`Processed cert: ${c.dest}`);
  } else {
    console.warn(`File not found: ${fullSrc}`);
  }
}

console.log('All Megala assets processed successfully!');
