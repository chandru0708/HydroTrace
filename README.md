# Jal-Drishti (जल-दृष्टि — "Water Vision")
### Smart India Hackathon 2026 · Problem Statement 26252
**Ministry of Jal Shakti (MoJS) · National Jal Jeevan Mission (NJJM) · Department of Drinking Water & Sanitation (DDWS)**

> *"See the Invisible. Screen Every Source. Act Before Exposure."*

---

## 🌊 Project Identity & Problem Statement

* **Problem Statement ID:** PS 26252 — *Development of Field Test Kits for Detection and Monitoring of Emerging Contaminants (PFAS, Microplastics, etc.) in Drinking Water Sources and Water Supply Systems*
* **Category:** Hardware
* **Theme:** Clean & Green Technology
* **Domain:** Emerging Contaminants / Drinking-Water Safety / Rural Water-Quality Surveillance
* **Target Users:** Village water testers (FTK women under Jal Jeevan Mission), Village Water & Sanitation Committees (VWSC), Block & District water testing laboratories, Public Health Engineering Departments (PHED), and national programme managers on WQMIS.

---

## 🎯 Core Engineering Objective

**Jal-Drishti** is a low-cost handheld field kit that screens **one 250 mL drinking-water sample** for **two classes of emerging contaminants (PFAS and microplastics)** in **30–40 minutes**, generating a tamper-evident, cryptographically signed result reportable from any keypad phone (or smartphone) without continuous internet.

It operates as a **first-tier triage tool**: flagging suspect sources so that expensive, scarce central laboratory resources (LC-MS/MS and µ-FTIR) are dispatched exclusively to verified priority locations.

### Key Design Targets (Single-Unit Prototype)
* **Reusable Reader Cost:** ≈ ₹2,690 (single-unit prototype parts)
* **Consumables Cost per Test:** ₹150–200
* **Protocol Time per Sample:** 30–40 minutes (WAX elution and Nile Red staining run concurrently)
* **PFAS Screening Dynamic Range:** Tens of ppt to low ppb (following 40–60× WAX pre-concentration)
* **Microplastic Particle Detection:** $\ge 20\ \mu\text{m}$ (optical index + macro audit photography)
* **Cost Advantage:** ~50× cheaper per test than commercial laboratory LC-MS/MS (~₹8,000 reference estimate)

---

## 🔬 Core Technology: One Sample, Two Tests

A single spring-assisted push drives 250 mL of water through a series-coupled jig:
1. **Glass-Fibre Filter (25 mm, 1.6 µm):** Retains particulate microplastics.
2. **Weak Anion Exchange (WAX) Cartridge:** Directly receives the passing filtrate, adsorbing anionic perfluoroalkyl substances (PFOA/PFOS).

### 1. PFAS Electrochemical Engine
* **WAX Sorbent Enrichment:** 250 mL sample $\rightarrow$ eluted in 0.5 mL ammoniated methanol $\rightarrow$ diluted 1:4 into ~2.5 mL phosphate buffer ($40\text{–}60\times$ net recovery).
* **Differential Sensor Strip:** Screen-printed carbon strip with dual working electrodes:
  * **WE1 (MIP):** Molecularly imprinted poly(o-phenylenediamine) cavities complementary to PFOA/PFOS templates.
  * **WE2 (NIP):** Non-imprinted polymer serving as a simultaneous blank matrix reference.
* **Redox Probe:** 5 mM $[Fe(CN)_6]^{3-/4-}$ ferri/ferrocyanide probe. When PFAS fills MIP cavities, electron transfer is blocked and the DPV peak current drops ($\Delta I$).
* **DIY Potentiostat (≈ ₹320 BOM):**
  * **MCP6004:** Quad op-amp (virtual ground 1.65 V, reference buffer, control amp, transimpedance amp with $R_f = 10\text{ k}\Omega$, $C_f = 100\text{ pF}$).
  * **MCP4725:** 12-bit DAC for excitation staircases (0.8 mV step resolution).
  * **ADS1115:** 16-bit ADC ($\pm 2.048\text{ V}$ range, $\sim 6\text{ nA/step}$).
  * **CD4053:** Multiplexer switching between MIP and NIP electrodes during 60 s DPV scans.
  * **LP2985:** Dedicated 3.3 V low-noise analog rail.
* **Groundwater Matrix Correction:**
  $$S_{net} = \frac{\Delta I_{0,MIP} - \Delta I_{MIP}}{\Delta I_{0,MIP}} - \frac{\Delta I_{0,NIP} - \Delta I_{NIP}}{\Delta I_{0,NIP}}$$
  Subtracting NIP response cancels conductivity and hardness variations typical of Indian borewells.

### 2. Microplastics Optical Engine
* **25 mm Filter in PP Holder:** Traps particles $\ge 20\ \mu\text{m}$.
* **Background Subtraction:** Light-tight dark-box with 470 nm blue LED and BPW34 photodiode behind a 550 nm long-pass filter reads unstained background scatter ($I_{blank}$).
* **Fluorophore Staining:** 3 drops of Nile Red in ethanol (never acetone, which would dissolve polystyrene/polycarbonate).
* **Microplastic Fluorescence Index:**
  $$\text{MFI} = I_{stained} - I_{blank}$$
* **Audit Photo:** ESP32-S3 camera with macro optic captures a 25 KB compressed JPEG under blue light for supervisory verification and blob tracking.

---

## 🔒 Cryptographic Field Telemetry (60-Bit Crockford Base32)

Every test produces a 12-character code that can be sent via standard 2G SMS from any ₹1,000 keypad phone:

| Field | Bits | Description |
| :--- | :---: | :--- |
| **Device ID** | 16 | Hardware UID mapped to GPS habitation |
| **PFAS Tier** | 3 | Green / Amber / Red triage band |
| **Microplastic Tier** | 3 | Low / Moderate / High MFI band |
| **Test Counter** | 12 | Monotonic hardware counter (prevents replay fraud) |
| **HMAC-SHA256 Signature** | 26 | Cryptographic signature derived from per-device eFuse key |

* **Alphabet:** Crockford Base32 drops `I`, `L`, `O`, `U` to eliminate transcription errors on keypad phones.
* **Tamper Resistance:** Modifying any character causes immediate signature rejection (1 in 67 million chance of a forged code passing).

---

## 📊 Honest Triage Architecture (No "Safe" Labels)

Because India currently has no statutory PFAS threshold in IS 10500:2012, results are actionable operational triage directives:
* 🟢 **GREEN (Not Detected / Low MFI):** Below kit detection limit $\rightarrow$ routine quarterly retest schedule.
* 🟡 **AMBER (Detected – Monitor / Moderate MFI):** $\rightarrow$ retest within 14 days, automated alert to Block Water & Sanitation Officer.
* 🔴 **RED (High – Send to Lab / High MFI):** $\rightarrow$ automated sample dispatch to NABL laboratory for LC-MS/MS confirmation.

---

## 🛠️ Reusable Reader Bill of Materials (≈ ₹2,690)

| Subsystem Component | Cost (INR) |
| :--- | :---: |
| ESP32-S3 Camera Board + Clip-on Macro Lens | ₹950 |
| Fluidics jig, 25mm PP filter holder, PCB, IP65 dark-box chassis | ₹550 |
| DIY Potentiostat (MCP6004, ADS1115, MCP4725, CD4053, 0.1% resistors) | ₹320 |
| Fluorescence Optics (470nm blue LED, short-pass + 550nm long-pass, BPW34) | ₹300 |
| Power Subsystem (18650 2600mAh cell, TP4056 USB-C, LP2985 LDO) | ₹250 |
| Display & User Feedback (0.96" I2C OLED, DS3231 RTC, traffic LEDs, buzzer) | ₹220 |
| Elution Heater Block (Optional desolvation) | ₹100 |
| **Total Reusable Reader BOM** | **≈ ₹2,690** |

---

## 💻 Tech Stack & Getting Started

Built with React (Vite 6), Tailwind CSS v4, Framer Motion, and Lucide React.

```bash
# Clone the repository
git clone https://github.com/chandru0708/HydroTrace.git

# Navigate to project directory
cd HydroTrace

# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build
```

---

## 📚 Scientific References & Statutory Sources

1. **Karimian N. et al. (2018):** *"Electrochemosensor for trace analysis of PFOS in water based on a molecularly imprinted poly(o-phenylenediamine) polymer"*, ACS Sensors, 3(4), 856–864. [DOI: 10.1021/acssensors.8b00154](https://doi.org/10.1021/acssensors.8b00154)
2. **Maes T. et al. (2017):** *"A rapid-screening approach to detect and quantify microplastics based on fluorescent tagging with Nile Red"*, Scientific Reports 7, 44501. [DOI: 10.1038/srep44501](https://doi.org/10.1038/srep44501)
3. **Rowe A.A. et al. (2011):** *"CheapStat: an open-source, 'do-it-yourself' potentiostat for analytical and educational applications"*, PLoS ONE 6(9): e23783. [DOI: 10.1371/journal.pone.0023783](https://doi.org/10.1371/journal.pone.0023783)
4. **US EPA Method 533 (2019):** *Determination of Selected PFAS in Drinking Water by Anion Exchange SPE and LC/MS/MS*.
5. **Central Pollution Control Board (CPCB) (2024):** Reply in NGT OA No. 548/2024 regarding PFAS presence in Chennai lakes and BIS IS 10500 revision.
6. **Press Information Bureau (PIB), MoJS (Feb 2025):** Jal Jeevan Mission Factsheet (15.44 Cr tap connections, 24.8 Lakh FTK-trained women, 2,162 WQMIS water laboratories).

---

## ⚖️ Scientific & Regulatory Disclaimer

Jal-Drishti is an early-stage **hardware prototype concept** developed for Smart India Hackathon 2026. It is designed specifically as a field screening triage instrument, not a laboratory replacement. It has not received regulatory certification; all performance figures represent engineering design targets. Red flagged screening outcomes require confirmatory laboratory analysis via NABL-accredited LC-MS/MS.
