// Netlify build script — generates posts/index.json, rss.xml and sitemap.xml
const fs = require('fs');
const path = require('path');

const SITE = 'https://jjgdev-porfolio.netlify.app';
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

// ── Parse posts (same split('---') approach as the site, no regex) ──
function parseFrontmatter(text) {
  const parts = text.split('---');
  if (parts.length < 3) return { meta: {}, body: text };
  const meta = {};
  parts[1].trim().split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    meta[key] = val;
  });
  return { meta, body: parts.slice(2).join('---').trim() };
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const posts = files.map(fn => {
  const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(postsDir, fn), 'utf8'));
  return {
    fn,
    title: meta.title || fn,
    date: new Date(meta.date || Date.now()),
    preview: meta.preview || body.split('.')[0] + '.'
  };
}).sort((a, b) => b.date - a.date);

// ── rss.xml ──
const items = posts.map(p => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/#entradas</link>
      <guid isPermaLink="false">${esc(p.fn)}</guid>
      <pubDate>${p.date.toUTCString()}</pubDate>
      <description>${esc(p.preview)}</description>
    </item>`).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>JJGdev — Blog</title>
    <link>${SITE}/#entradas</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Blog de aprendizaje de JJGdev — desarrollo web en público, errores incluidos.</description>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(__dirname, 'rss.xml'), rss);
console.log('Built rss.xml with', posts.length, 'items');

// ── sitemap.xml ──
const lastmod = (posts[0] ? posts[0].date : new Date()).toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
console.log('Built sitemap.xml (lastmod ' + lastmod + ')');
