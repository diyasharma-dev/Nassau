import https from 'https';
import fs from 'fs';
import path from 'path';

const downloads = [
  {
    name: 'nassau-county-official-homestar.webp',
    url: 'https://www.homestarinspectionsny.com/assets/optimized/service-areas/nassau-county-c652285446.webp'
  },
  {
    name: 'inspect-1-daren.webp',
    url: 'https://www.homestarinspectionsny.com/assets/optimized/inspect-1-ae64b8fd87.webp'
  },
  {
    name: 'inspect-2-daren.webp',
    url: 'https://www.homestarinspectionsny.com/assets/optimized/inspect-2-3de3d8f5a2.webp'
  },
  {
    name: 'inspect-3-daren.webp',
    url: 'https://www.homestarinspectionsny.com/assets/optimized/inspect-3-954b2eb352.webp'
  },
  {
    name: 'inspect-4-daren.webp',
    url: 'https://www.homestarinspectionsny.com/assets/optimized/inspect-4-3c8bb651aa.webp'
  },
  {
    name: 'qhi-og-banner.png',
    url: 'https://www.queenshomeinspectorny.com/og-image.png'
  },
  {
    name: 'bayside-detached-real.webp',
    url: 'https://www.queenshomeinspectorny.com/assets/optimized/queens/bayside-detached-v3-cf051599d3.webp'
  },
  {
    name: 'rockaway-coastal-real.webp',
    url: 'https://www.queenshomeinspectorny.com/assets/optimized/queens/rockaway-coastal-v3-534c06512d.webp'
  },
  {
    name: 'roslyn-historic-van-nostrand.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Van_Nostrand-Starkins_House_from_Main_Street_and_East_Broadway.JPG'
  },
  {
    name: 'denton-homestead-nassau.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Denton_Homestead%2C_East_Rockaway-1.JPG'
  },
  {
    name: 'levittown-historic-house.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Levittown_houses._LOC_gsc.5a25986.jpg'
  }
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
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
      file.on('finish', () => {
        file.close(() => resolve(filePath));
      });
    });
    req.on('error', reject);
  });
}

async function run() {
  for (const item of downloads) {
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
