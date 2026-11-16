import https from 'https';
import fs from 'fs';
import path from 'path';

const files = [
  {
    name: 'levittown-actual-house.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Levittown_houses._LOC_gsc.5a25986.jpg'
  },
  {
    name: 'garden-city-actual-house.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Seventh_Apostle_House%2C_GCNY_Historical_Society.jpg'
  },
  {
    name: 'garden-city-street-view.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Garden_City%2C_New_York.jpg'
  },
  {
    name: 'roslyn-willet-titus-house.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Willet_Titus_House%28Beacon%29%3B_Roslyn%2C_New_York.JPG'
  }
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'NassauHomeInspector/1.0 (https://homestarinspectionsny.com; daren@homestarinspectionsny.com)'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filePath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(filePath)));
    }).on('error', reject);
  });
}

async function run() {
  for (const item of files) {
    const dest = path.join('public/images', item.name);
    try {
      await download(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`✓ Downloaded ${item.name} (${stat.size} bytes)`);
    } catch (err) {
      console.error(`✗ Failed ${item.name}:`, err.message);
    }
  }
}

run();
