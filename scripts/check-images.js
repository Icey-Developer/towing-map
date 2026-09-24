const fs = require('fs');
const path = require('path');
const https = require('https');

const componentsDir = path.join(__dirname, '..', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
const urls = new Set();

for (const file of files) {
  const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
  const matches = content.matchAll(/(https:\/\/images\.unsplash\.com\/[^\s'"`]+|\/[a-zA-Z0-9_\-\.]+\.(jpg|png|webp|svg))/g);
  for (const m of matches) {
    urls.add(m[1]);
  }
}

console.log('Total URLs found:', urls.size);
for (const u of urls) {
  console.log('-', u);
}
