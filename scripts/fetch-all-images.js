const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'public', 'site-images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Curated list of high quality verified automotive Unsplash images
const imageMap = {
  // Brands
  'ferrari-red.jpg': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&fit=crop',
  'lambo-yellow.jpg': 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&fit=crop',
  'porsche-green.jpg': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&fit=crop',
  
  // Products (wheels)
  'wheel-1.jpg': 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=500&fit=crop',
  'wheel-2.jpg': 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=500&fit=crop',
  'wheel-3.jpg': 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=500&fit=crop',
  'wheel-4.jpg': 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&fit=crop',
  
  // Products (spares/parts)
  'part-brake.jpg': 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&fit=crop',
  'part-suspension.jpg': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&fit=crop',
  'part-engine.jpg': 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=500&fit=crop',
  'part-exhaust.jpg': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&fit=crop',
  
  // Towing services
  'tow-service-1.jpg': 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&fit=crop',
  'tow-service-2.jpg': 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&fit=crop',
  'tow-service-3.jpg': 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500&fit=crop',
  'tow-service-4.jpg': 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&fit=crop',
  
  // Banner smoke / drift
  'drift-smoke.jpg': 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&fit=crop',
  'highway-night.jpg': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1600&fit=crop',
  
  // Safety gear / articles (3 cards in reference)
  'article-engine.jpg': 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&fit=crop',
  'article-oil.jpg': 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&fit=crop',
  'article-battery.jpg': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&fit=crop',
  
  // Gallery
  'gallery-speedo.jpg': 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=600&fit=crop',
  'gallery-green-car.jpg': 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600&fit=crop',
  'gallery-wheel-close.jpg': 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&fit=crop',
  'gallery-rim-detail.jpg': 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=600&fit=crop',
  'gallery-dark-wheel.jpg': 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&fit=crop',
  'gallery-track.jpg': 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&fit=crop',
  
  // Spotlight
  'spotlight-tyres.jpg': 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=800&fit=crop'
};

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadUrl(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading all local images...');
  for (const [filename, url] of Object.entries(imageMap)) {
    const dest = path.join(outDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`[EXISTS] ${filename}`);
      continue;
    }
    try {
      await downloadUrl(url, dest);
      console.log(`[DOWNLOADED] ${filename}`);
    } catch (err) {
      console.error(`[FAIL] ${filename}: ${err.message}`);
    }
  }
  console.log('Done downloading assets!');
}

run();
