const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'components');
const publicDir = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

let totalChecked = 0;
let missingCount = 0;
const checkedPaths = new Set();

for (const file of files) {
  const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
  // Match any relative path in public starting with /
  const matches = content.matchAll(/['"](\/(?:site-images\/[a-zA-Z0-9_\-\.]+|[a-zA-Z0-9_\-\.]+\.(?:jpg|png|webp|svg)))['"]/g);
  for (const m of matches) {
    const src = m[1];
    if (checkedPaths.has(src)) continue;
    checkedPaths.add(src);
    totalChecked++;
    const localPath = path.join(publicDir, src);
    if (!fs.existsSync(localPath)) {
      console.error(`[MISSING] referenced in ${file}: ${src} -> ${localPath}`);
      missingCount++;
    } else {
      const stat = fs.statSync(localPath);
      console.log(`[OK] ${src} (${stat.size} bytes)`);
    }
  }
}

console.log(`\nVerification Summary: Checked ${totalChecked} unique images, ${missingCount} missing.`);
if (missingCount > 0) {
  process.exit(1);
} else {
  console.log('100% of all image assets are verified and exist on disk!');
}
