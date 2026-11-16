import https from 'https';

async function searchWiki(query) {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=' + encodeURIComponent(query) + '&srnamespace=6&format=json&srlimit=8';
    https.get(url, { headers: { 'User-Agent': 'NassauHomeInspector/1.0 (daren@homestarinspectionsny.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          console.log('=== ' + query + ' ===');
          if (j.query && j.query.search) {
            j.query.search.forEach(s => console.log('  ' + s.title));
          }
          resolve();
        } catch(e) { resolve(); }
      });
    }).on('error', () => resolve());
  });
}

async function run() {
  await searchWiki('Sea Cliff New York house');
  await searchWiki('Floral Park New York house');
  await searchWiki('Locust Valley New York house');
  await searchWiki('Mineola New York house');
  await searchWiki('Garden City Long Island house');
}
run();
