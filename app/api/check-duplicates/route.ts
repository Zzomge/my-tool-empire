import { NextResponse } from 'next/server';
import data from '../../[slug]/data.json';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const slugs = data.map((item: any) => item.slug.toLowerCase());
  const names = data.map((item: any) => item.name.toLowerCase());

  const slugSet = new Set(slugs);
  const nameSet = new Set(names);

  const duplicateSlugs = slugs.length - slugSet.size;
  const duplicateNames = names.length - nameSet.size;

  return NextResponse.json({
    total: data.length,
    uniqueSlugs: slugSet.size,
    uniqueNames: nameSet.size,
    duplicates: Math.max(duplicateSlugs, duplicateNames),
    duplicateSlugs,
    duplicateNames
  });
}
