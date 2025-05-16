'use client';
import { useEffect, useState } from 'react';
import { lazy } from 'react';
import Image from 'next/image';
// const Dashboard = lazy(() => import('@/pages/dashboard/index'));
import Header from '@/pages-ui/landing-page/Header';
import HeroSection from '@/pages-ui/landing-page/HeroSection';
import AboutSection from '@/pages-ui/landing-page/AboutSection';
import SpecialtiesSection from '@/pages-ui/landing-page/SpecialtiesSection';
import StellarValuesSection from '@/pages-ui/landing-page/StellarValuesSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="fade-in">
          <Header />
          <HeroSection />
          <AboutSection />
          <SpecialtiesSection />
          <StellarValuesSection />

        </div>
      )}
    </div>
  );
}
