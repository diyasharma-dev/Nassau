import fs from 'fs';

const html = fs.readFileSync('nassau-official-page.html', 'utf-8');

// Extract title, meta description
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);

console.log('=== PAGE TITLE ===');
console.log(titleMatch ? titleMatch[1] : 'None');

console.log('=== META DESCRIPTION ===');
console.log(metaDescMatch ? metaDescMatch[1] : 'None');

// Extract all headings (h1, h2, h3, h4)
const headings = [];
const headingRegex = /<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi;
let match;
while ((match = headingRegex.exec(html)) !== null) {
  const tag = match[1];
  const text = match[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  headings.push(`${tag.toUpperCase()}: ${text}`);
}

console.log('\n=== HEADINGS ===');
headings.forEach(h => console.log(h));

// Extract all images
const imgRegex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push({ src: match[1], alt: match[2] });
}
console.log('\n=== IMAGES ===');
images.forEach(img => console.log(`${img.src} | Alt: ${img.alt}`));
