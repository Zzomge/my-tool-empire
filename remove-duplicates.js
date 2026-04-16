const data = require('./app/[slug]/data.json');
const fs = require('fs');

const seenSlugs = new Set();
const seenNames = new Set();
const uniqueData = [];

data.forEach((item, index) => {
  const slugLower = item.slug.toLowerCase();
  const nameLower = item.name.toLowerCase();
  
  if (!seenSlugs.has(slugLower) && !seenNames.has(nameLower)) {
    seenSlugs.add(slugLower);
    seenNames.add(nameLower);
    uniqueData.push(item);
  } else {
    console.log(`Removing duplicate at index ${index}: ${item.name} (${item.slug})`);
  }
});

console.log('\nOriginal items:', data.length);
console.log('After removing duplicates:', uniqueData.length);
console.log('Removed:', data.length - uniqueData.length);

// Backup original file
fs.copyFileSync('./app/[slug]/data.json', './app/[slug]/data.json.backup');
console.log('\nBackup saved to data.json.backup');

// Write cleaned data
fs.writeFileSync('./app/[slug]/data.json', JSON.stringify(uniqueData, null, 2));
console.log('Cleaned data written to data.json');
