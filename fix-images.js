import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/images');
const srcDir = path.resolve('src/assets/images');

// Verified residential house photos on Unsplash
const images = {
  'hero-house.jpg': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
  'nassau-colonial-hero.jpg': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  'video-thumb-1.jpg': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  'video-thumb-2.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  'video-thumb-3.jpg': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
  'video-thumb-4.jpg': 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80'
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
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
  for (const [name, url] of Object.entries(images)) {
    const pubDest = path.join(outDir, name);
    const srcDest = path.join(srcDir, name);
    try {
      await download(url, pubDest);
      fs.copyFileSync(pubDest, srcDest);
      console.log(`Successfully replaced/downloaded: ${name}`);
    } catch (e) {
      console.error(`Failed ${name}:`, e.message);
    }
  }
}

run();
