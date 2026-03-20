"use client";

import React from 'react';
import ScholarshipHero from "@/components/Scholarship/HeroSection";
import StatsSection from "@/components/Scholarship/StatsSection";
import ServicesGrid from "@/components/Scholarship/ServicesGrid";
import FacilitiesSection from "@/components/Scholarship/FacilitiesSection";
import BenefitsSection from "@/components/Scholarship/BenefitsSection";
import CommitmentSection from "@/components/Scholarship/CommitmentSection";
import GallerySection from "@/components/Scholarship/GallerySection";
import CTASection from "@/components/Scholarship/CTASection";

export default function ScholarshipSection() {
  return (
    <>
      <ScholarshipHero />
      <StatsSection />
      <ServicesGrid />
      <FacilitiesSection />
      <BenefitsSection />
      <CommitmentSection />
      <GallerySection />
      <CTASection />
    </>
  );
}