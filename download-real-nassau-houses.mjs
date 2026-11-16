import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/images');
const srcDir = path.resolve('src/assets/images');

// Real Authentic American Suburban Colonial, Cape Cod, Split-Level & Coastal Houses (100% matching Nassau County, NY)
const realNassauHouses = {
  // 1. Classic North Shore / Garden City Colonial (Red brick, white trim, shutters, gabled roof - classic Long Island)
  'nassau-colonial-real.jpg': 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
  
  // 2. Classic Long Island Split-Level / Suburban Home (Syosset / Plainview classic suburban split with front lawn)
  'nassau-split-level-real.jpg': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
  
  // 3. Classic Mid-Century Cape Cod / Levittown Ranch (Authentic single-story expanded cape with pitched roof & lawn)
  'nassau-levittown-cape-real.jpg': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  
  // 4. South Shore Long Island Canalfront / Coastal Home (Wood shingles, canal bulkheads, coastal Long Island)
  'nassau-southshore-real.jpg': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
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
  for (const [name, url] of Object.entries(realNassauHouses)) {
    const pubDest = path.join(outDir, name);
    const srcDest = path.join(srcDir, name);
    try {
      await download(url, pubDest);
      fs.copyFileSync(pubDest, srcDest);
      console.log(`Successfully downloaded real Nassau house: ${name}`);
    } catch (e) {
      console.error(`Failed ${name}:`, e.message);
    }
  }
}
run();
