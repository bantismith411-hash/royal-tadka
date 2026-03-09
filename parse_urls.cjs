const fs = require('fs');
const html = fs.readFileSync('annette.html', 'utf8');
const urls = html.match(/https:\/\/[^"'\s\)]+/g);
if (urls) {
  const mediaUrls = urls.filter(u => u.match(/\.(mp4|webm|jpg|jpeg|png|gif)/i) || u.includes('video') || u.includes('image'));
  console.log([...new Set(mediaUrls)].slice(0, 20).join('\n'));
} else {
  console.log('No urls found');
}
