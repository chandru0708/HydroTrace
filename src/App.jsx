import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionFlow from './components/SolutionFlow';
import Innovations from './components/Innovations';
import PfasModule from './components/PfasModule';
import MicroplasticModule from './components/MicroplasticModule';
import HowItWorks from './components/HowItWorks';
import FieldWorkflow from './components/FieldWorkflow';
import TriageTiers from './components/TriageTiers';
import TestValidity from './components/TestValidity';
import SignedCode from './components/SignedCode';
import Reporting from './components/Reporting';
import SourceMap from './components/SourceMap';
import Prototype from './components/Prototype';
import CostBreakdown from './components/CostBreakdown';
import LiveDemo from './components/LiveDemo';
import Challenges from './components/Challenges';
import ValidationRoadmap from './components/ValidationRoadmap';
import Scalability from './components/Scalability';
import FinalVision from './components/FinalVision';
import References from './components/References';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // 60Hz / 120Hz smooth refresh rate momentum scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="hydrotrace-app">
      {/* Editorial Top Navigation */}
      <Navbar />

      {/* Hero Section (Paper bg + Teal Organic Blob) */}
      <Hero />

      {/* 01 Problem Section (Solid Dark Ink Spread) */}
      <ProblemSection />

      {/* 02 Solution Flow (Sky bg + 8 River Stations) */}
      <SolutionFlow />

      {/* 03 Innovations (Butter bg + 6 Solid Bento Tiles) */}
      <Innovations />

      {/* 04 PFAS Module (Solid Violet bg + 4 Lab-bench Stops) */}
      <PfasModule />

      {/* 05 Microplastic Module (Peach bg + Clock-face 5-step Stepper) */}
      <MicroplasticModule />

      {/* 06 How It Connects (Paper bg + Marker System Blueprint) */}
      <HowItWorks />

      {/* 07 Field Workflow (Solid Teal bg + Synchronized OLED Screen) */}
      <FieldWorkflow />

      {/* 08 Triage Framework (Paper bg + 3 Solid-color Posters) */}
      <TriageTiers />

      {/* 09 Valid-Test Quality Checks (Lilac bg + Clipboard Checklist) */}
      <TestValidity />

      {/* 10 Cryptographic Signed Code (Ink bg + Yellow Hero Bitfield) */}
      <SignedCode />

      {/* 11 Zero-Infrastructure Reporting (Butter bg + 3 Comic Panels) */}
      <Reporting />

      {/* 12 Spatial District Surveillance (Sky bg + Interactive Village Map) */}
      <SourceMap />

      {/* 13 Hardware Prototype (Paper bg + Exploded Blueprint) */}
      <Prototype />

      {/* 14 Unit Economics & Cost (Peach bg + BOM Bar Chart & Receipt) */}
      <CostBreakdown />

      {/* 15 Live Field Test Demo (Ink bg + Accelerated State Machine) */}
      <LiveDemo />

      {/* 16 Engineering Challenges (Lilac bg + Pinned Notebook Slips) */}
      <Challenges />

      {/* 17 Validation Roadmap (Paper bg + 5 Milestone Flags) */}
      <ValidationRoadmap />

      {/* 18 Scale & Impact (Solid Teal bg + PIB JJM Figures) */}
      <Scalability />

      {/* 19 Final Vision (Solid Coral bg + SIH Badges) */}
      <FinalVision />

      {/* References & Bibliography (Paper bg + Printed Citations) */}
      <References />

      {/* Footer (Dark Ink bg + Hackathon Details) */}
      <Footer />
    </div>
  );
}
