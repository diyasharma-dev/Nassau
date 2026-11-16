import https from 'https';
import fs from 'fs';

const url = 'https://www.homestarinspectionsny.com/areas/nassau-county';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('nassau-official-page.html', data);
    console.log('Saved nassau-official-page.html, size:', data.length);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
