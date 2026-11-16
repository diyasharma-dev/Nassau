import https from 'https';
import fs from 'fs';
import path from 'path';

const files = [
  { name: 'great-neck-actual-house.jpg', title: 'File:Ben Rebhuhn House, Great Neck Estates, Long Island, New York A.jpg' },
  { name: 'manhasset-actual-street.jpg', title: 'File:Street in Strathmore Village, Strathmore, Manhasset, Long Island, New York June 15, 2021 C.jpg' },
  { name: 'massapequa-actual-house.jpg', title: 'File:House at 390 Ocean Avenue; Massapequa, New York.jpg' },
  { name: 'locust-valley-actual-house.jpg', title: 'File:Cook-Cornelius House; Locust Valley, NY.jpg' },
  { name: 'mineola-actual-house.jpg', title: 'File:Shortridge Drive, Mineola, NY August 14, 2025.jpg' },
  { name: 'sea-cliff-actual-house.jpg', title: 'File:137 Prospect Ave, Sea Cliff, NY.jpg' }
];

async function getWikiUrl(title) {
  return new Promise((resolve, reject) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&titles=' + encodeURIComponent(title) + '&prop=imageinfo&iiprop=url&format=json';
    https.get(url, { headers: { 'User-Agent': 'NassauHomeInspector/1.0 (daren@homestarinspectionsny.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          const pages = j.query.pages;
          const pageId = Object.keys(pages)[0];
          const info = pages[pageId].imageinfo;
          if (info && info.length > 0) {
            resolve(info[0].url);
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'NassauHomeInspector/1.0 (daren@homestarinspectionsny.com)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of files) {
    try {
      console.log('Querying URL for:', item.title);
      const url = await getWikiUrl(item.title);
      if (url) {
        console.log('Downloading:', item.name, 'from', url);
        const destPub = path.resolve('public/images', item.name);
        const destSrc = path.resolve('src/assets/images', item.name);
        await download(url, destPub);
        fs.copyFileSync(destPub, destSrc);
        const stats = fs.statSync(destPub);
        console.log(`Saved ${item.name} (${stats.size} bytes)`);
      } else {
        console.log('No URL found for', item.title);
      }
    } catch (e) {
      console.error('Error for', item.name, e.message);
    }
  }
}
run();
