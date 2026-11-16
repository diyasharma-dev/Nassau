import https from 'https';
import fs from 'fs';

function apiGet(title) {
  return new Promise((resolve, reject) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
    https.get(url, {
      headers: {
        'User-Agent': 'NassauHomeInspector/1.0 (https://homestarinspectionsny.com; daren@homestarinspectionsny.com)'
      }
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          const info = pages[pageId].imageinfo;
          if (info && info[0]) {
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

async function run() {
  const titles = [
    'File:Levittown houses. LOC gsc.5a25986.jpg',
    'File:Levittown houses. LOC gsc.5a25987.jpg',
    'File:Seventh Apostle House, GCNY Historical Society.jpg',
    'File:Garden City, New York.jpg',
    'File:Sands Point Light.jpg',
    'File:Hempstead House at Sands Point Preserve.jpg',
    'File:Willet Titus House(Beacon); Roslyn, New York.JPG'
  ];

  for (const t of titles) {
    const url = await apiGet(t);
    console.log(t, '=>', url);
  }
}

run();
