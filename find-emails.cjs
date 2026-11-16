const fs = require('fs');
const html = fs.readFileSync('nassau-official-page.html', 'utf8');
const regex = /email-protection#([a-f0-9]+)/gi;
let match;
function decodeCfEmail(encoded) {
  let k = parseInt(encoded.substr(0, 2), 16);
  let email = '';
  for (let i = 2; i < encoded.length; i += 2) {
    email += String.fromCharCode(parseInt(encoded.substr(i, 2), 16) ^ k);
  }
  return email;
}
while ((match = regex.exec(html)) !== null) {
  console.log('Found CF email:', decodeCfEmail(match[1]));
}
const mailtoRegex = /mailto:([^\s\"'>]+)/gi;
while ((match = mailtoRegex.exec(html)) !== null) {
  console.log('Found mailto:', match[1]);
}
