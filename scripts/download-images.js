const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'public', 'site-images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const urls = [
  'https://images.unsplash.com/photo-1562904292-7b7a73c1a07a?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&h=1080&fit=crop'
];

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadUrl(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(dest);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Testing image downloads to verify availability...');
  for (let i = 0; i < urls.length; i++) {
    const u = urls[i];
    const filename = `img_${i + 1}.jpg`;
    const dest = path.join(outDir, filename);
    try {
      await downloadUrl(u, dest);
      const stat = fs.statSync(dest);
      console.log(`[OK] ${filename} downloaded (${stat.size} bytes)`);
    } catch (e) {
      console.error(`[ERR] ${u}: ${e.message}`);
    }
  }
}

run();
