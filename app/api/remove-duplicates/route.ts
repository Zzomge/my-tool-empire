import { NextResponse } from 'next/server';
import data from '../../[slug]/data.json';
import fs from 'fs';
import path from 'path';

export async function POST() {
  const dataFilePath = path.join(process.cwd(), 'app/[slug]/data.json');
  
  // Backup
  fs.copyFileSync(dataFilePath, dataFilePath + '.backup');
  
  const seenSlugs = new Set();
  const seenNames = new Set();
  const uniqueData: any[] = [];

  data.forEach((item: any) => {
    const slugLower = item.slug.toLowerCase();
    const nameLower = item.name.toLowerCase();
    
    if (!seenSlugs.has(slugLower) && !seenNames.has(nameLower)) {
      seenSlugs.add(slugLower);
      seenNames.add(nameLower);
      uniqueData.push(item);
    }
  });

  // Write cleaned data
  fs.writeFileSync(dataFilePath, JSON.stringify(uniqueData, null, 2));

  return NextResponse.json({
    original: data.length,
    after: uniqueData.length,
    removed: data.length - uniqueData.length
  });
}
