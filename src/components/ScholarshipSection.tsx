"use client";

import React from 'react';
import ScholarshipHero from "@/components/Scholarship/PadhoIndia";
import BenefitsSection from "@/components/Scholarship/BenefitsSection";
import ExclusiveMemberDiscount from "@/components/Scholarship/ExclusiveMemberDiscount";
import ServicesGrid from "@/components/Scholarship/ServicesGrid";
import ScholarshipSection1 from "@/components/Scholarship/ScholarshipSection1";
//import FacilitiesSection from "@/components/Scholarship/FacilitiesSection";
import GallerySection from "@/components/Scholarship/GallerySection";
import CTASection from "@/components/Scholarship/CTASection";
import StatsSection from "@/components/Scholarship/StatsSection";
import CommitmentSection from "@/components/Scholarship/CommitmentSection";

export default function ScholarshipSection() {
  return (
    <>
      <ScholarshipHero />
      <BenefitsSection /> 
      <ExclusiveMemberDiscount />
       <ServicesGrid />
      <ScholarshipSection1 />
      <StatsSection />
      <CommitmentSection />
      <GallerySection />
      <CTASection />
    </>
  );
}