const fs = require('fs');
const { execSync } = require('child_process');

// ตั้งค่าจำนวน appliances ที่ต้องการเพิ่ม
const TARGET_COUNT = 500;

console.log('='.repeat(60));
console.log('ADD APPLIANCES - ALL IN ONE SCRIPT');
console.log('='.repeat(60));
console.log(`Target: Add ${TARGET_COUNT} new appliances`);
console.log('');

// แสดงจำนวนปัจจุบัน
const currentData = require('./app/[slug]/data.json');
console.log(`Current items: ${currentData.length}`);
console.log('');

// ถามยืนยัน
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Do you want to add ${TARGET_COUNT} new appliances? (yes/no): `, (answer) => {
  if (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'y') {
    console.log('Cancelled. No changes made.');
    rl.close();
    process.exit(0);
  }
  rl.close();
  proceedWithAddition();
});

function proceedWithAddition() {

// Step 1: Check duplicates
console.log('Step 1: Checking duplicates...');
try {
  execSync('node check-duplicates.js', { stdio: 'inherit' });
} catch (e) {
  console.log('Error checking duplicates');
}

// Step 2: Remove duplicates
console.log('\nStep 2: Removing duplicates...');
try {
  execSync('node remove-duplicates.js', { stdio: 'inherit' });
} catch (e) {
  console.log('Error removing duplicates');
}

// Step 3: Generate new appliances
console.log('\nStep 3: Generating new appliances...');
try {
  execSync('node generate-appliances.js', { stdio: 'inherit' });
} catch (e) {
  console.log('Error generating appliances');
}

// Step 4: Update sitemap
console.log('\nStep 4: Updating sitemap...');
try {
  execSync('node generate-sitemap.js', { stdio: 'inherit' });
} catch (e) {
  console.log('Error updating sitemap');
}

// Step 5: Show summary
console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));

const data = require('./app/[slug]/data.json');
console.log(`Total items: ${data.length}`);

// Check duplicates again
const slugs = data.map(item => item.slug.toLowerCase());
const names = data.map(item => item.name.toLowerCase());
const slugSet = new Set(slugs);
const nameSet = new Set(names);

console.log(`Unique slugs: ${slugSet.size}`);
console.log(`Unique names: ${nameSet.size}`);
console.log(`Duplicate slugs: ${slugs.length - slugSet.size}`);
console.log(`Duplicate names: ${names.length - nameSet.size}`);

// Count by category
const categories = {};
data.forEach(item => {
  categories[item.category] = (categories[item.category] || 0) + 1;
});

console.log('\nPer category:');
Object.entries(categories).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count}`);
});

console.log('\n' + '='.repeat(60));
console.log('NEXT STEPS');
console.log('='.repeat(60));
console.log('Run these commands to commit and push:');
console.log('');
console.log('  git add app/[slug]/data.json public/sitemap_a.xml');
console.log('  git commit -m "Add new appliances and update sitemap"');
console.log('  git push');
console.log('');
console.log('Or run:');
console.log('');
console.log('  npm run deploy');
console.log('');
console.log('='.repeat(60));
}
