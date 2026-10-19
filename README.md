# GlobeLink Education and Migration Consultants (Globe Link Edu)
> **Your Career Partner Connecting You to the World**

Welcome to the official web portal for **GlobeLink Education and Migration Consultants**, a Sri Lankan education, Japanese language training (Let's Go Japan), international career development, and ethical migration consultancy based in Nittambuwa, Sri Lanka.

---

## 🏛️ Brand Identity
- **Main Title / Short Name:** Globe Link Edu
- **Full Business Name:** GlobeLink Education and Migration Consultants
- **Tagline:** *Your Career Partner Connecting You to the World*
- **Positioning:** Education, Japanese language training (Let's Go Japan), international career development, and legitimate migration consultancy.
- **Color Palette:** Dark Navy Blue (`#0F172A` / `#0A192F`), Crisp White (`#FFFFFF`), Vibrant Light Blue (`#0284C7` / `#38BDF8`), and Red Accents (`#E11D48` / `#DC2626`).
- **Typography:** Plus Jakarta Sans & Noto Sans JP for clear Japanese character rendering.

---

## 📄 Site Structure & Pages
The application includes 11 full pages with semantic HTML, SEO meta tags, OpenGraph cards, and Schema.org structured data:

1. **Home (`/`)**: Hero section, About GlobeLink summary, Let's Go Japan featured division, Your Career Partner program overview, destinations showcase, 4-step consultation process, why choose GlobeLink, FAQ accordions, and inquiry form.
2. **About Us (`/about`)**: Full mission, ethical consulting standards, core pillars, office address, and verified client notices.
3. **Education Consultancy (`/education-consultancy`)**: Student profile assessment, international education pathways, institutional research, application documentation support, scholarship information, and Japanese language integration.
4. **Let's Go Japan (`/lets-go-japan`)**: Flagship Japanese language division landing page featuring JLPT N5, N4, N3, JFT-Basic, NAT-TEST, past papers, Kanji mastery, spoken Japanese (Kaiwa), online Zoom/Meet learning details, and direct WhatsApp booking.
5. **Japanese Language Courses (`/japanese-language-courses`)**: Comprehensive course catalog with interactive level filters, hourly breakdowns, schedules, fee installment plans, and syllabi.
6. **Your Career Partner Program (`/career-partner`)**: *"Build Your Future. Expand Your Boundaries."* Strategic career profile assessment, Gulf/Japanese CV tailoring, interview prep, destination requirements, work visa checklist, and pre-departure briefings.
7. **International Career Opportunities (`/international-careers`)**: Interactive destination cards for Japan, Dubai, United Arab Emirates, and Maldives with key living/working highlights, services available, visa categories supported, and compliance notices.
8. **Migration & Visa Support (`/migration-visa-support`)**: Compliance-first documentation support, certified translations, financial sponsor affidavits, Certificate of Eligibility (COE) audits, and ethical pledge.
9. **Contact Us (`/contact`)**: Hotlines (+94 76 498 6049, +94 77 112 9703), official emails, Nittambuwa office location, interactive Google Map embed, direct driving directions, Facebook links, and inquiry form.
10. **Privacy Policy (`/privacy-policy`)**: Data governance, storage security, and confidentiality.
11. **Terms and Conditions (`/terms-and-conditions`)**: Transparent service agreement, non-guarantee disclosures, and candidate document authenticity requirements.

---

## 🛠️ Technology Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Motion
- **SEO & Meta:** Schema.org JSON-LD (`EducationalOrganization`, `BreadcrumbList`, `FAQPage`), XML Sitemap, Robots.txt, OpenGraph, Twitter Cards.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ☁️ Supabase Lead Generation Setup

GlobeLink features a persistent lead generation engine for candidate inquiries. It safely connects to Supabase via standard client credentials without exposing server service-role keys.

### 1. Database Table Schema
Run the following SQL in your **Supabase SQL Editor** (`https://app.supabase.com`):

```sql
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  preferred_destination TEXT,
  service_category TEXT,
  education_career_interest TEXT,
  preferred_contact_method TEXT DEFAULT 'WhatsApp',
  message TEXT,
  consent_given BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'new'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit new inquiries (INSERT only)
CREATE POLICY "Allow anonymous lead insert"
  ON public.inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated administrative staff to view all inquiries
CREATE POLICY "Allow authenticated staff read"
  ON public.inquiries
  FOR SELECT
  TO authenticated
  USING (true);
```

### 2. Environment Variables
Add these to your `.env` (or Netlify Environment Variables):

```env
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-public-key"
```

*Note: If Supabase credentials are not configured, the website automatically operates in **Safe Fallback Mode**, presenting an informative setup modal while enabling candidate inquiries to be forwarded directly to GlobeLink consultants via WhatsApp (+94 76 498 6049) so no lead is ever lost.*

---

## 🌐 Netlify Deployment

The project is pre-configured with `netlify.toml` for zero-configuration Netlify deployment:

1. Push your repository to **GitHub**.
2. Connect the repository in **Netlify**.
3. Netlify automatically detects the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. In **Site Settings > Environment Variables**, add your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` if using Supabase.
5. Deploy site!

---

## 📞 Verified Business Information
- **Primary Hotline:** `+94 76 498 6049`
- **Secondary Phone:** `+94 77 112 9703`
- **Primary Email:** `contact@globelinkedu.com`
- **Secondary Email:** `letsgojapan.work@gmail.com`
- **Official Website:** `www.globelinkedu.com`
- **Office Address:** `No. 33, Janadahara Shopping Complex, Horagolla, Nittambuwa, Sri Lanka`
- **Facebook Communities:**
  - `fb.com/LetsGoJapan`
  - `fb.com/GlobeLinkEducationAndMigrationConsultants`
