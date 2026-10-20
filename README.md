# HydroTrace – PFAS & Microplastic Field Test Kit
> *"Trace the invisible. Test every source."*

**Smart India Hackathon 2026 · Problem Statement PS 26252**  
**Team:** AbyssX 786 · **Team ID:** 195737  
**Category:** Hardware · **Theme:** Clean & Green Technology  
**Organization:** Ministry of Jal Shakti (MoJS) — National Jal Jeevan Mission (NJJM), Department of Drinking Water & Sanitation (DDWS)

---

## Overview

**HydroTrace** is a low-cost handheld field kit that screens **ONE 250 mL drinking-water sample** for **TWO classes of emerging contaminants (PFAS and microplastics)** in **30–40 minutes**, and reports a tamper-proof result from any phone (or no phone).

It functions as a **first-tier field triage tool**: it screens rural water sources at the village tap or borewell so that only suspect samples are routed to NABL-accredited laboratories for confirmatory LC-MS/MS and µ-FTIR analysis.

---

## Core Design Targets

- **Reusable Reader Hardware:** ≈ ₹2,700 (single-unit prototype parts: ₹2,690)
- **Consumables per Test:** ₹150–200 (WAX cartridge, MIP/NIP strip, glass-fibre filter, sealed ampoules)
- **Protocol Time:** 30–40 minutes for both tests
- **PFAS Screening Range:** Tens of ppt to low ppb after 40–60× WAX pre-concentration
- **Microplastics Resolution:** Particles visible in audit macro photo down to ~20 µm
- **Cost Efficiency:** Approximately 50× cheaper per test than commercial laboratory LC-MS/MS testing

---

## Diagnostic Architecture: One Sample, Two Tests

A spring-loaded syringe pushes 250 mL of water through a 25 mm glass-fibre filter (which catches insoluble microplastics). The filtrate flows directly into a disposable weak anion exchange (WAX) cartridge (which captures dissolved PFAS chains). One manual push feeds both assays.

### 1. PFAS Electrochemical Module
- **Pre-concentration:** 250 mL elutes in 0.5 mL ammoniated methanol (100× theoretical, 40–60× field recovery based on US EPA Method 533 principles).
- **Dual Working Electrodes:** Screen-printed carbon strip with WE1 (molecularly imprinted polymer o-phenylenediamine template for PFOA/PFOS) and WE2 (non-imprinted reference polymer).
- **Matrix-Corrected Metric:**
  $$S_{net} = \frac{\Delta I_{0,MIP} - \Delta I_{MIP}}{\Delta I_{0,MIP}} - \frac{\Delta I_{0,NIP} - \Delta I_{NIP}}{\Delta I_{0,NIP}}$$
  Subtracting the NIP electrode cancels out hardness and salinity fluctuations common in rural borewells.
- **₹320 DIY Potentiostat:** MCP6004 quad op-amp (virtual ground 1.65 V, control amp, transimpedance amp Rf 10 kΩ, Cf 100 pF), MCP4725 12-bit DAC (0.8 mV step), ADS1115 16-bit ADC, and CD4053 analog switch.

### 2. Microplastic Optical Module
- **Optical Stack:** 470 nm blue LED with excitation short-pass filter, BPW34 silicon PIN photodiode behind a 550 nm emission long-pass filter.
- **Background-Subtracted Index:**
  $$MFI = I_{stained} - I_{blank}$$
  Subtracting the unstained blank filter reading removes background autofluorescence from sand, silt, and glass fibres.
- **Staining:** 3 drops of Nile Red in ethanol (never acetone, which dissolves plastics).
- **Audit Photo:** ESP32-S3 macro camera captures a ~25 KB JPEG under blue excitation to confirm filter usage and flag particles $\ge 20\ \mu\text{m}$.

### 3. Cryptographic Zero-App Telemetry
- **60-Bit Crockford Base32 Signed Code:** Encodes 16-bit Device ID, 3-bit PFAS tier, 3-bit Microplastic tier, 12-bit monotonic hardware test counter, and 26-bit HMAC-SHA256 signature (e.g. `7H4K-9M2X-8B3Q`).
- **Triple-Tier Connectivity:**
  1. *No Phone:* 0.96" OLED screen + traffic-light LEDs + onboard non-volatile flash.
  2. *Keypad Phone:* Worker transmits the 12-character code by 2G SMS.
  3. *Smartphone:* Wi-Fi captive-portal web page without installing any app.

---

## Actionable Triage Framework (Never "Safe")

HydroTrace classifies water sources into operational triage tiers:
- **GREEN (Not Detected / Low MFI):** Routine retest schedule (6-month cycle).
- **AMBER (Detected – Monitor / Moderate MFI):** Retest within 2 weeks, automated advisory to Block Development Officer.
- **RED (High – Send to Lab / High MFI):** Automated Chain-of-Custody ticket created; courier dispatched to deliver sample to an NABL laboratory for LC-MS/MS confirmation.

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Local Run
```bash
# Clone the repository
git clone https://github.com/chandru0708/HydroTrace.git
cd HydroTrace

# Install dependencies
npm install --legacy-peer-deps

# Start Vite development server
npm run dev
```

### Production Build
```bash
npm run build
```

---

## Technical & Statutory References
1. Karimian N. et al., *ACS Sensors*, 2018 (0.04 nM LOD MIP sensor).
2. Maes T. et al., *Scientific Reports*, 2017 (Nile Red microplastic tagging).
3. Rowe A.A. et al., *PLoS ONE*, 2011 (Open-source CheapStat potentiostat).
4. US EPA Method 533 (WAX anion-exchange pre-concentration reference).
5. Central Pollution Control Board (CPCB) reply to NGT, OA No. 548/2024 (PFAS in Chennai lakes).
6. Bureau of Indian Standards, IS 10500:2012 Drinking Water Specification.
7. US EPA Federal Register, 20 May 2026 (4 ppt enforceable MCLs).
8. PIB Jal Jeevan Mission Factsheet, Feb 2025 (15.44 Cr tap connections, 24.80 L trained FTK women).
