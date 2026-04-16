import { NextResponse } from 'next/server';
import data from '../../[slug]/data.json';
import fs from 'fs';
import path from 'path';

function generateSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function generateAppliance(template: any, category: string) {
  const slug = generateSlug(template.name);
  return {
    name: template.name,
    slug: slug,
    wattage: template.wattage,
    category: category,
    description: `${template.name}. Calculate electricity costs.`,
    detailedGuide: `${template.name} typically use ${template.wattage * 0.8}-${template.wattage * 1.2}W. They're designed for efficient operation. In the Philippines, ${template.name.toLowerCase()} are commonly used.`,
    comparison: `${template.name} (${template.wattage}W) vs Standard model (${Math.round(template.wattage * 0.8)}W): Compare energy efficiency.`,
    faq: [
      `How much electricity does a ${template.name.toLowerCase()} use?`,
      `Is a ${template.name.toLowerCase()} energy-efficient?`,
      `What is the best ${template.name.toLowerCase()} brand in the Philippines?`,
      `How can I reduce my ${template.name.toLowerCase()}'s electricity consumption?`
    ]
  };
}

export async function POST() {
  const dataFilePath = path.join(process.cwd(), 'app/[slug]/data.json');
  
  // Backup
  fs.copyFileSync(dataFilePath, dataFilePath + '.before-gen');
  
  const existingSlugs = new Set(data.map((item: any) => item.slug.toLowerCase()));
  const existingNames = new Set(data.map((item: any) => item.name.toLowerCase()));

  const categories = ['Kitchen', 'Entertainment', 'Cooling', 'Office', 'Health', 'Laundry', 'Cleaning'];
  
  const baseTemplates: any = {
    Kitchen: [
      { name: "Electric Rice Cooker", wattage: 500 },
      { name: "Electric Pressure Cooker", wattage: 1000 },
      { name: "Electric Steamer", wattage: 800 },
      { name: "Electric Griddle", wattage: 1500 },
      { name: "Electric Wok", wattage: 1500 },
      { name: "Electric Skillet", wattage: 1200 },
      { name: "Electric Grill", wattage: 1400 },
      { name: "Electric Bread Maker", wattage: 600 },
      { name: "Electric Coffee Grinder", wattage: 150 },
      { name: "Electric Espresso Machine", wattage: 1200 },
      { name: "Electric Tea Kettle", wattage: 1500 },
      { name: "Electric Hot Pot", wattage: 1000 },
      { name: "Electric Crepe Maker", wattage: 800 },
      { name: "Electric Waffle Maker", wattage: 1000 },
      { name: "Electric Panini Press", wattage: 1200 },
      { name: "Electric Sandwich Maker", wattage: 800 },
      { name: "Electric Food Dehydrator", wattage: 500 },
      { name: "Electric Vacuum Sealer", wattage: 150 },
      { name: "Electric Meat Grinder", wattage: 500 },
      { name: "Electric Slicer", wattage: 200 },
      { name: "Electric Juicer", wattage: 800 },
      { name: "Electric Citrus Juicer", wattage: 150 },
      { name: "Electric Ice Cream Maker", wattage: 150 },
      { name: "Electric Yogurt Maker", wattage: 50 },
      { name: "Electric Pasta Maker", wattage: 200 },
      { name: "Electric Pizza Oven", wattage: 1200 },
      { name: "Electric Convection Oven", wattage: 2000 },
      { name: "Electric Microwave Convection", wattage: 1500 },
      { name: "Electric Built-in Oven", wattage: 2500 },
      { name: "Electric Wall Oven", wattage: 3000 },
      { name: "Electric Dishwasher", wattage: 1200 },
      { name: "Electric Compact Dishwasher", wattage: 800 },
      { name: "Electric Ice Maker", wattage: 150 },
      { name: "Electric Wine Cooler", wattage: 80 },
      { name: "Electric Water Boiler", wattage: 2000 },
      { name: "Electric Instant Hot Water", wattage: 3000 },
      { name: "Electric Tankless Water Heater", wattage: 8000 },
      { name: "Electric Storage Water Heater", wattage: 4000 },
      { name: "Electric Pool Heater", wattage: 5000 },
      { name: "Electric Spa Heater", wattage: 4000 },
      { name: "Electric Sauna Heater", wattage: 6000 },
      { name: "Electric Towel Warmer", wattage: 100 },
      { name: "Electric Floor Heating", wattage: 2000 },
      { name: "Electric Radiator Heater", wattage: 1500 },
      { name: "Electric Ceramic Heater", wattage: 1500 },
      { name: "Electric Infrared Heater", wattage: 1200 },
      { name: "Electric Space Heater", wattage: 1500 },
      { name: "Electric Baseboard Heater", wattage: 1500 },
      { name: "Electric Wall Heater", wattage: 2000 }
    ],
    Entertainment: [
      { name: "LED TV 32 Inch", wattage: 60 },
      { name: "LED TV 43 Inch", wattage: 90 },
      { name: "LED TV 50 Inch", wattage: 100 },
      { name: "LED TV 55 Inch", wattage: 120 },
      { name: "LED TV 65 Inch", wattage: 150 },
      { name: "OLED TV 55 Inch", wattage: 130 },
      { name: "QLED TV 55 Inch", wattage: 140 },
      { name: "4K TV 55 Inch", wattage: 110 },
      { name: "Smart TV 43 Inch", wattage: 85 },
      { name: "Android TV 43 Inch", wattage: 80 },
      { name: "Home Theater Projector", wattage: 300 },
      { name: "Portable Projector", wattage: 200 },
      { name: "4K Projector", wattage: 350 },
      { name: "AV Receiver", wattage: 400 },
      { name: "Sound Bar", wattage: 50 },
      { name: "Sound Bar with Subwoofer", wattage: 80 },
      { name: "Subwoofer", wattage: 100 },
      { name: "Bluetooth Speaker", wattage: 20 },
      { name: "Smart Speaker", wattage: 10 },
      { name: "Gaming Monitor 27 Inch", wattage: 40 },
      { name: "4K Monitor 27 Inch", wattage: 45 },
      { name: "Ultrawide Monitor", wattage: 70 },
      { name: "Gaming Laptop", wattage: 200 },
      { name: "Desktop Computer", wattage: 150 },
      { name: "Gaming Desktop", wattage: 500 },
      { name: "All-in-One PC", wattage: 200 },
      { name: "Mini PC", wattage: 50 },
      { name: "NAS Server", wattage: 100 },
      { name: "Router", wattage: 12 },
      { name: "Mesh WiFi System", wattage: 15 },
      { name: "WiFi Extender", wattage: 8 },
      { name: "Wireless Printer", wattage: 40 },
      { name: "Laser Printer", wattage: 400 },
      { name: "3D Printer", wattage: 250 },
      { name: "Webcam", wattage: 5 },
      { name: "Security Camera", wattage: 10 },
      { name: "Smart Door Lock", wattage: 5 },
      { name: "Smart Thermostat", wattage: 5 },
      { name: "Smart Bulb LED", wattage: 9 }
    ],
    Cooling: [
      { name: "Window Air Conditioner", wattage: 1000 },
      { name: "Split Air Conditioner 1 HP", wattage: 800 },
      { name: "Split Air Conditioner 2 HP", wattage: 1600 },
      { name: "Central Air Conditioner", wattage: 3500 },
      { name: "Portable Air Conditioner", wattage: 1200 },
      { name: "Ductless Mini Split", wattage: 1500 },
      { name: "Inverter Air Conditioner", wattage: 1000 },
      { name: "Evaporative Cooler", wattage: 300 },
      { name: "Pedestal Fan", wattage: 60 },
      { name: "Wall Mount Fan", wattage: 50 },
      { name: "USB Fan", wattage: 5 },
      { name: "Misting Fan", wattage: 100 },
      { name: "Industrial Fan", wattage: 500 },
      { name: "Circulator Fan", wattage: 45 },
      { name: "Bathroom Exhaust Fan", wattage: 40 },
      { name: "Kitchen Range Hood", wattage: 300 },
      { name: "Air Purifier", wattage: 50 },
      { name: "HEPA Air Purifier", wattage: 70 },
      { name: "Smart Air Purifier", wattage: 55 },
      { name: "Humidifier", wattage: 50 },
      { name: "Cool Mist Humidifier", wattage: 40 },
      { name: "Ultrasonic Humidifier", wattage: 35 },
      { name: "Dehumidifier", wattage: 300 },
      { name: "Portable Dehumidifier", wattage: 250 },
      { name: "Basement Dehumidifier", wattage: 500 }
    ],
    Office: [
      { name: "Laptop Computer", wattage: 65 },
      { name: "Desktop Computer Standard", wattage: 150 },
      { name: "All-in-One Computer", wattage: 200 },
      { name: "Mini Computer", wattage: 50 },
      { name: "Workstation Computer", wattage: 500 },
      { name: "Computer Monitor 24 Inch", wattage: 30 },
      { name: "Computer Monitor 27 Inch", wattage: 40 },
      { name: "Ultrawide Monitor", wattage: 70 },
      { name: "Printer Laser", wattage: 400 },
      { name: "Printer All-in-One", wattage: 50 },
      { name: "Scanner Flatbed", wattage: 25 },
      { name: "Multifunction Printer", wattage: 60 },
      { name: "Shredder", wattage: 200 },
      { name: "Photocopier", wattage: 500 },
      { name: "Projector Office", wattage: 300 },
      { name: "Conference Phone", wattage: 15 },
      { name: "Headset Wireless", wattage: 5 },
      { name: "Telephone System", wattage: 50 },
      { name: "Network Router", wattage: 12 },
      { name: "UPS Battery Backup", wattage: 50 },
      { name: "Coffee Machine Office", wattage: 1500 },
      { name: "Water Cooler Office", wattage: 100 },
      { name: "Vending Machine", wattage: 500 },
      { name: "Desk Lamp LED", wattage: 10 },
      { name: "Emergency Light", wattage: 10 },
      { name: "Electric Door Lock", wattage: 10 }
    ],
    Health: [
      { name: "Blood Pressure Monitor", wattage: 10 },
      { name: "Digital Thermometer", wattage: 5 },
      { name: "Nebulizer", wattage: 100 },
      { name: "Compressor Nebulizer", wattage: 120 },
      { name: "CPAP Machine", wattage: 70 },
      { name: "Oxygen Concentrator", wattage: 300 },
      { name: "Fitness Tracker", wattage: 5 },
      { name: "Smart Watch", wattage: 5 },
      { name: "Body Fat Scale", wattage: 10 },
      { name: "Baby Monitor", wattage: 15 },
      { name: "Video Baby Monitor", wattage: 20 },
      { name: "Breast Pump Electric", wattage: 50 },
      { name: "Bottle Warmer", wattage: 100 },
      { name: "Electric Toothbrush", wattage: 5 },
      { name: "Water Flosser", wattage: 20 },
      { name: "Hair Dryer Professional", wattage: 2000 },
      { name: "Hair Straightener", wattage: 100 },
      { name: "Massage Gun", wattage: 50 },
      { name: "Massage Chair", wattage: 200 },
      { name: "Foot Massager", wattage: 40 },
      { name: "Treadmill Electric", wattage: 600 },
      { name: "Exercise Bike", wattage: 150 },
      { name: "Spin Bike", wattage: 200 },
      { name: "Rowing Machine", wattage: 150 },
      { name: "Multi Gym", wattage: 400 },
      { name: "Smart Dumbbells", wattage: 10 },
      { name: "Smart Jump Rope", wattage: 5 },
      { name: "Fitness Mirror", wattage: 100 },
      { name: "Smart Fitness Trainer", wattage: 50 },
      { name: "Virtual Reality Headset", wattage: 15 },
      { name: "Smart Mattress", wattage: 50 },
      { name: "White Noise Machine", wattage: 20 },
      { name: "Infrared Sauna Blanket", wattage: 300 },
      { name: "Portable Sauna", wattage: 1500 },
      { name: "Hot Tub", wattage: 4000 },
      { name: "Pool Pump", wattage: 1500 },
      { name: "Pool Heater Electric", wattage: 5000 }
    ],
    Laundry: [
      { name: "Washing Machine Top Load", wattage: 500 },
      { name: "Washing Machine Front Load", wattage: 400 },
      { name: "Washing Machine Compact", wattage: 300 },
      { name: "Washer Dryer Combo", wattage: 700 },
      { name: "Dryer Electric", wattage: 3000 },
      { name: "Dryer Heat Pump", wattage: 1500 },
      { name: "Clothes Steamer", wattage: 1500 },
      { name: "Handheld Steamer", wattage: 1000 },
      { name: "Steam Generator Iron", wattage: 2400 },
      { name: "Travel Iron", wattage: 800 },
      { name: "Carpet Cleaner", wattage: 800 },
      { name: "Steam Cleaner", wattage: 1200 },
      { name: "Steam Mop", wattage: 1000 },
      { name: "Vacuum Robot", wattage: 50 },
      { name: "Robot Mop", wattage: 60 },
      { name: "Handheld Vacuum", wattage: 200 },
      { name: "Stick Vacuum", wattage: 250 },
      { name: "Cordless Vacuum", wattage: 300 },
      { name: "Canister Vacuum", wattage: 600 },
      { name: "Upright Vacuum", wattage: 700 },
      { name: "Wet Dry Vacuum", wattage: 1000 },
      { name: "Central Vacuum System", wattage: 1500 },
      { name: "Air Compressor", wattage: 1500 },
      { name: "Portable Air Compressor", wattage: 1000 }
    ],
    Cleaning: [
      { name: "Robot Vacuum Cleaner", wattage: 50 },
      { name: "Handheld Vacuum Cleaner", wattage: 200 },
      { name: "Stick Vacuum Cleaner", wattage: 250 },
      { name: "Cordless Vacuum Cleaner", wattage: 300 },
      { name: "Canister Vacuum Cleaner", wattage: 600 },
      { name: "Upright Vacuum Cleaner", wattage: 700 },
      { name: "Steam Cleaner", wattage: 1200 },
      { name: "Steam Mop", wattage: 1000 },
      { name: "Hard Floor Cleaner", wattage: 500 },
      { name: "Floor Polisher", wattage: 400 },
      { name: "Pressure Washer", wattage: 1500 },
      { name: "Electric Pressure Washer", wattage: 2000 },
      { name: "Window Cleaner", wattage: 500 },
      { name: "Pool Cleaner", wattage: 200 },
      { name: "Leaf Blower Electric", wattage: 500 },
      { name: "Electric Lawn Mower", wattage: 1500 },
      { name: "Robot Lawn Mower", wattage: 100 },
      { name: "Electric Hedge Trimmer", wattage: 600 },
      { name: "Electric Chainsaw", wattage: 1500 },
      { name: "Electric Snow Blower", wattage: 2000 },
      { name: "Electric Heater Garage", wattage: 5000 },
      { name: "Electric Mosquito Killer", wattage: 20 }
    ]
  };

  const newAppliances: any[] = [];
  let generatedCount = 0;
  const targetCount = 500;
  let attemptCount = 0;
  const maxAttempts = 10000;

  while (generatedCount < targetCount && attemptCount < maxAttempts) {
    attemptCount++;
    
    const category = categories[Math.floor(Math.random() * categories.length)];
    const templates = baseTemplates[category];
    
    if (!templates || templates.length === 0) continue;
    
    const template = templates[Math.floor(Math.random() * templates.length)];
    
    const variations = ['Pro', 'Plus', 'Elite', 'Premium', 'Advanced', 'Basic', 'Standard', 'Compact', 'Portable', 'Mini', 'Max', 'Ultra', 'Smart', 'Digital', 'Automatic'];
    const variation = variations[Math.floor(Math.random() * variations.length)];
    
    let newName;
    if (Math.random() > 0.5 && !template.name.includes(variation)) {
      newName = `${template.name} ${variation}`;
    } else {
      newName = template.name;
    }
    
    const newSlug = generateSlug(newName);
    
    if (!existingSlugs.has(newSlug) && !existingNames.has(newName.toLowerCase())) {
      const appliance = generateAppliance({ ...template, name: newName }, category);
      newAppliances.push(appliance);
      existingSlugs.add(newSlug);
      existingNames.add(newName.toLowerCase());
      generatedCount++;
    }
  }

  const combinedData = [...data, ...newAppliances];
  fs.writeFileSync(dataFilePath, JSON.stringify(combinedData, null, 2));

  const byCategory = categories.map(cat => ({
    category: cat,
    count: newAppliances.filter(a => a.category === cat).length
  }));

  return NextResponse.json({
    generated: generatedCount,
    total: combinedData.length,
    attempts: attemptCount,
    byCategory
  });
}
