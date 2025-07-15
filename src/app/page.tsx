"use client";

import dynamic from "next/dynamic";
import BannerSection from "@/components/BannerSection";
import ProfileSection from "@/components/ProfileSection";
import InterfaceSection from "@/components/InterfaceSection";
import NumberRateSection from "@/components/NumberRateSection";
import ReviewSection from "@/components/ReviewSection";
import AnimationSection from "@/components/AnimationSection";
import ContactSection from "@/components/ContactSection";
import "./globals.css";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black">
      <div className="fixed top-0 left-0 w-full h-screen z-50 pointer-events-none">
        <Scene />
      </div>

      <div className="relative z-10">
        <section className="min-h-[200vh]">
          <BannerSection />
          <ProfileSection />
          <InterfaceSection />
          <NumberRateSection />
          <ReviewSection />
          <AnimationSection />
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
