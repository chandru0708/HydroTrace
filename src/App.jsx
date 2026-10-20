import React from 'react';
import Navbar from './components/Navbar';
import TelemetryBar from './components/TelemetryBar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionFlow from './components/SolutionFlow';
import Innovations from './components/Innovations';
import PfasModule from './components/PfasModule';
import MicroplasticModule from './components/MicroplasticModule';
import Architecture from './components/Architecture';
import FieldWorkflow from './components/FieldWorkflow';
import TriageTiers from './components/TriageTiers';
import TestValidity from './components/TestValidity';
import SignedCode from './components/SignedCode';
import OfflineSync from './components/OfflineSync';
import SourceMap from './components/SourceMap';
import Prototype from './components/Prototype';
import CostBreakdown from './components/CostBreakdown';
import LiveDemo from './components/LiveDemo';
import Challenges from './components/Challenges';
import ValidationRoadmap from './components/ValidationRoadmap';
import Scalability from './components/Scalability';
import Impact from './components/Impact';
import SystemView from './components/SystemView';
import FinalVision from './components/FinalVision';
import References from './components/References';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050B18] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Live Instrument Telemetry Status Ribbon */}
        <TelemetryBar />

        {/* Section 01: The Problem */}
        <ProblemSection />

        {/* Section 02: Our Solution (Snake Layout) */}
        <SolutionFlow />

        {/* Section 03: Key Innovations */}
        <Innovations />

        {/* Section 04: PFAS Module (Pre-concentration + MIP/NIP + DIY Potentiostat + DPV) */}
        <PfasModule />

        {/* Section 05: Microplastic Module (Nile Red + Optical Train + MFI Gauge) */}
        <MicroplasticModule />

        {/* Section 06: Complete Technical Architecture */}
        <Architecture />

        {/* Section 07: Field Workflow */}
        <FieldWorkflow />

        {/* Section 08: Honest Triage Tiers */}
        <TriageTiers />

        {/* Section 09: Test Validity Checks */}
        <TestValidity />

        {/* Section 10: Signed 12-Character SMS Code */}
        <SignedCode />

        {/* Section 11: Offline-First Reporting */}
        <OfflineSync />

        {/* Section 12: Source Intelligence Map */}
        <SourceMap />

        {/* Section 13: Prototype Blueprint & Exploded View */}
        <Prototype />

        {/* Section 14: Cost Breakdown & Lab Comparison */}
        <CostBreakdown />

        {/* Section 15: Simulated Live Field Test Demo */}
        <LiveDemo />

        {/* Section 16: Engineering Challenges & Answers */}
        <Challenges />

        {/* Section 17: Validation Roadmap */}
        <ValidationRoadmap />

        {/* Section 18: Scalability & National Network */}
        <Scalability />

        {/* Section 19: Impact */}
        <Impact />

        {/* Section 20: Complete System View */}
        <SystemView />

        {/* Final Vision & Call to Action */}
        <FinalVision />

        {/* Academic & Statutory References */}
        <References />
      </main>

      {/* Project Footer */}
      <Footer />
    </div>
  );
}
