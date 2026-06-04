// Netlify build script — generates posts/index.json automatically
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'posts');

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir);
}

const files = fs.readdirSync(postsDir)
  .filter(f => f.endsWith('.md'))
  .sort()
  .reverse(); // newest first by filename

fs.writeFileSync(
  path.join(postsDir, 'index.json'),
  JSON.stringify(files, null, 2)
);

console.log('Built posts/index.json with', files.length, 'entries:', files);
