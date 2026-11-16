import https from 'https';
import fs from 'fs';
import path from 'path';

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
          if (info && info.length > 0) resolve(info[0].url);
          else resolve(null);
        } catch (e) { reject(e); }
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
      if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', (err) => fs.unlink(dest, () => reject(err)));
    }).on('error', reject);
  });
}

async function run() {
  const url = await getWikiUrl('File:Levittown NY Weber House 01.jpg');
  console.log('URL:', url);
  if (url) {
    await download(url, path.resolve('public/images/levittown-weber-house-color.jpg'));
    console.log('Downloaded color Levittown house!');
  }
}
run();
