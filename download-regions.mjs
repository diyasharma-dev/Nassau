import https from 'https';
import fs from 'fs';
import path from 'path';

const regions = [
  { name: 'region-queens.webp', url: 'https://www.homestarinspectionsny.com/assets/optimized/service-areas/queens-6765cdc344.webp' },
  { name: 'region-brooklyn.webp', url: 'https://www.homestarinspectionsny.com/assets/optimized/service-areas/brooklyn-f95531743b.webp' },
  { name: 'region-bronx.webp', url: 'https://www.homestarinspectionsny.com/assets/optimized/service-areas/bronx-ddc0b4758c.webp' },
  { name: 'region-manhattan.webp', url: 'https://www.homestarinspectionsny.com/assets/optimized/service-areas/manhattan-eacc770ae9.webp' },
  { name: 'region-staten-island.webp', url: 'https://www.homestarinspectionsny.com/assets/optimized/service-areas/staten-island-057904c388.webp' },
  { name: 'region-suffolk-county.webp', url: 'https://www.homestarinspectionsny.com/assets/optimized/service-areas/suffolk-county-38ced1db90.webp' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', (err) => fs.unlink(dest, () => reject(err)));
    }).on('error', reject);
  });
}

async function run() {
  for (const r of regions) {
    try {
      const dest = path.resolve('public/images', r.name);
      await download(r.url, dest);
      console.log('Downloaded', r.name);
    } catch(e) {
      console.error('Error for', r.name, e.message);
    }
  }
}
run();
