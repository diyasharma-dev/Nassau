import fs from 'fs';

const html = fs.readFileSync('nassau-official-page.html', 'utf-8');

const sectionRegex = /<section\b[^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/section>/gi;
let match;
let i = 1;
while ((match = sectionRegex.exec(html)) !== null) {
  const cls = match[1];
  const body = match[2];
  fs.writeFileSync(`official-section-${i}-${cls.replace(/\s+/g, '_')}.html`, match[0]);
  console.log(`Wrote official-section-${i}.html`);
  i++;
}
