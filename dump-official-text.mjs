import fs from 'fs';

const html = fs.readFileSync('nassau-official-page.html', 'utf-8');

// Strip tags except structural or convert nicely
const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
if (!mainMatch) {
  console.log('No <main> tag found, using body');
}
const content = mainMatch ? mainMatch[0] : html;

// Clean text extraction
function cleanHtml(raw) {
  return raw
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|section|article|h1|h2|h3|h4|li|ul|ol)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');
}

fs.writeFileSync('nassau-official-clean-content.txt', cleanHtml(content));
console.log('Saved nassau-official-clean-content.txt');
