import https from 'https';
import fs from 'fs';

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    const qHtml = await fetchUrl('https://www.queenshomeinspectorny.com/');
    const qMatches = qHtml.match(/https?:\/\/[^"'<>\s]+\.(?:jpg|jpeg|png|webp)/gi) || [];
    const qRel = qHtml.match(/(?:src|href)=["']([^"'<>\s]+\.(?:jpg|jpeg|png|webp))["']/gi) || [];
    console.log('--- Queens Home Inspector Images ---');
    console.log([...new Set([...qMatches, ...qRel])].slice(0, 30));

    const hHtml = await fetchUrl('https://www.homestarinspectionsny.com/');
    const hMatches = hHtml.match(/https?:\/\/[^"'<>\s]+\.(?:jpg|jpeg|png|webp)/gi) || [];
    const hRel = hHtml.match(/(?:src|href)=["']([^"'<>\s]+\.(?:jpg|jpeg|png|webp))["']/gi) || [];
    console.log('--- HomeStar Images ---');
    console.log([...new Set([...hMatches, ...hRel])].slice(0, 30));
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
