const data = require('./app/[slug]/data.json');
const fs = require('fs');

const baseUrl = 'https://meralcocalc.vercel.app';

const urls = [
  { url: baseUrl, priority: 1, changeFreq: 'daily' },
  { url: `${baseUrl}/about-us`, priority: 0.5, changeFreq: 'monthly' },
  { url: `${baseUrl}/contact-us`, priority: 0.5, changeFreq: 'monthly' },
  { url: `${baseUrl}/privacy-policy`, priority: 0.5, changeFreq: 'monthly' },
  ...data.map(tool => ({ url: `${baseUrl}/${tool.slug}`, priority: 0.8, changeFreq: 'monthly' }))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${u.changeFreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('./public/sitemap_a.xml', xml);
console.log('sitemap_a.xml created in public directory');
