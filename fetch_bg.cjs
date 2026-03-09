const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'www.annettescratchtotable.com',
  port: 443,
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (d) => {
    data += d;
  });
  res.on('end', () => {
    fs.writeFileSync('annette.html', data);
    console.log('Saved to annette.html');
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
