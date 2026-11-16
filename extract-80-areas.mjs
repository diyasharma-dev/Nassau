import fs from 'fs';

const html = fs.readFileSync('official-section-7-section.html', 'utf-8');
const items = [];
const regex = /<li\s+class=["']hood-item["'][^>]*>([\s\S]*?)<\/li>/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  items.push(m[1].replace(/<[^>]+>/g, '').trim());
}
console.log('Total areas found:', items.length);
fs.writeFileSync('official-80-areas.json', JSON.stringify(items, null, 2));
