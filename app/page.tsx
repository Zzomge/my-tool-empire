import { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Electricity Cost Calculator Philippines | Calculate Home Appliance Energy Costs',
  description: 'Free electricity cost calculator for home appliances in the Philippines. Calculate daily, monthly, and yearly energy costs for air fryers, refrigerators, TVs, microwaves, and more. Save money on your Meralco bill.',
  keywords: 'electricity cost calculator Philippines, Meralco rate calculator, energy cost calculator, home appliance power consumption, save electricity Philippines, air fryer cost, refrigerator cost',
  openGraph: {
    title: 'Electricity Cost Calculator Philippines',
    description: 'Calculate electricity costs for home appliances in the Philippines. Save money on your electric bill.',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeContent />;
}
