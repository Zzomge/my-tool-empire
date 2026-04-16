const data = require('./app/[slug]/data.json');

const slugs = data.map(item => item.slug);
const names = data.map(item => item.name.toLowerCase());

const duplicates = {
  slugs: [],
  names: []
};

// Check for duplicate slugs
const slugSet = new Set();
slugs.forEach((slug, index) => {
  if (slugSet.has(slug)) {
    duplicates.slugs.push({ index, slug });
  }
  slugSet.add(slug);
});

// Check for duplicate names (case insensitive)
const nameSet = new Set();
names.forEach((name, index) => {
  if (nameSet.has(name)) {
    duplicates.names.push({ index, name: data[index].name });
  }
  nameSet.add(name);
});

console.log('Total items:', data.length);
console.log('Unique slugs:', slugSet.size);
console.log('Unique names:', nameSet.size);
console.log('\nDuplicate slugs:', duplicates.slugs.length);
console.log('Duplicate names:', duplicates.names.length);

if (duplicates.slugs.length > 0) {
  console.log('\nDuplicate slug details:');
  duplicates.slugs.forEach(d => console.log(`  Index ${d.index}: ${d.slug}`));
}

if (duplicates.names.length > 0) {
  console.log('\nDuplicate name details:');
  duplicates.names.forEach(d => console.log(`  Index ${d.index}: ${d.name}`));
}

// Export existing slugs for checking new items
const fs = require('fs');
fs.writeFileSync('./existing-slugs.json', JSON.stringify([...slugSet], null, 2));
fs.writeFileSync('./existing-names.json', JSON.stringify([...nameSet], null, 2));
console.log('\nExisting slugs saved to existing-slugs.json');
console.log('Existing names saved to existing-names.json');
