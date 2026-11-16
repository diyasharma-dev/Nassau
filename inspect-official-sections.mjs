import fs from 'fs';

const html = fs.readFileSync('nassau-official-page.html', 'utf-8');

// Match sections in <main>
const sectionRegex = /<section\b[^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/section>/gi;
let match;
let i = 1;
while ((match = sectionRegex.exec(html)) !== null) {
  const cls = match[1];
  const body = match[2];
  const h2 = body.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h1 = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log(`\n--- Section ${i++}: .${cls} ---`);
  if (h1) console.log('H1:', h1[1].replace(/<[^>]+>/g, '').trim());
  if (h2) console.log('H2:', h2[1].replace(/<[^>]+>/g, '').trim());
}
