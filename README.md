
# 🐾 Scruffy to Fluffy — React Rebuild

A fast, responsive React + Vite single-page application converting the WordPress website **[scruffytofluffy.in](https://scruffytofluffy.in/)** into modern React.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🎨 Tech Stack
- **React 19 + JSX**
- **Vite 8** (lightning-fast HMR and bundling)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router v7** (client-side routing)
- **Swiper 14** (touch-enabled carousels for transformations & testimonials)
- **Lucide React** (modern iconography)
- **Google Fonts** (`Fredoka` for display headings, `Readex Pro` for body)

---

## 🗂️ Project Structure

```
src/
├── App.jsx                     # Router & route definitions
├── main.jsx                    # Entry point
├── index.css                   # Tailwind v4 styles & Swiper overrides
│
├── data/
│   └── siteData.js             # Structured brand data, packages, testimonials, FAQs
│
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Sticky nav, brand logo, mobile burger, CTA
│   │   └── Footer.jsx          # Footer links, social links, pre-footer banner
│   ├── ui/
│   │   ├── Icons.jsx           # SVG icons (Paw, Bone, Splash, Socials, Google)
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp chat button (+91 9004116634)
│   └── home/
│       ├── HeroSection.jsx         # Hero with CTAs, illustrations & dog photo
│       ├── SocialProofBanner.jsx   # Van service banner + 4 key stats
│       ├── AboutSection.jsx        # Story, promise badge, mini transformation carousel
│       ├── ServicesIcons.jsx       # 6 service categories (Hygiene, Haircut, etc.)
│       ├── ValuesSection.jsx       # Transparency, Teamwork, Doorstep convenience
│       ├── ServiceCards.jsx        # Basic (₹1499), Deluxe (₹2199), Ticks (₹2499)
│       ├── BookingFormSection.jsx  # Dual booking: Native form + WhatsForm iframe
│       ├── TestimonialsSlider.jsx  # Swiper client review carousel + Google 4.6 badge
│       ├── LocationSection.jsx     # Coverage areas, van photo, FAQ accordion
│       ├── GalleryCarousel.jsx     # 5-slide transformation gallery
│       └── InstagramFollow.jsx     # @scruffytofluffy5 social feed banner
│
└── pages/
    ├── Home.jsx                # Full homepage
    ├── About.jsx               # About Us page
    ├── Services.jsx            # Detailed services breakdown
    ├── Pricing.jsx             # Pricing & package comparison
    ├── BookAppointment.jsx     # Booking page with benefits & care policy
    ├── Contact.jsx             # Contact hub & direct inquiry form
    ├── Locations.jsx           # Mumbai & Navi Mumbai coverage zones
    ├── PrivacyPolicy.jsx       # Privacy policy
    └── TermsOfUse.jsx          # Terms of use
```

---

## 🌟 Key Features
- **All 13 Homepage Sections** fully migrated and styled to match the original design.
- **Dual Booking System**:
  - Native instant booking form that compiles a formatted WhatsApp message to `+91 9004116634`.
  - Embedded **WhatsForm** (`whatsform.com/C6t2-p`) iframe toggleable directly in the UI.
- **Mobile-Responsive**: Designed mobile-first with sticky nav and smooth drawer menu.
- **Zero WordPress Bloat**: Blazing fast load times with optimized Vite bundling.
#
