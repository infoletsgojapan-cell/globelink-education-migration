import React, { useState } from 'react';
import {
  Globe2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Compass,
  ArrowRight,
  ShieldCheck,
  Building,
  Plane
} from 'lucide-react';
import { PageId, Destination } from '../types';
import { COMPANY_INFO } from '../data/company';
import { DESTINATIONS } from '../data/destinations';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface InternationalCareersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const InternationalCareersPage: React.FC<InternationalCareersPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(DESTINATIONS[0]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="International Career Opportunities & Destinations | GlobeLink"
        description="Explore legitimate career and education destinations in Japan, Dubai, the United Arab Emirates, and the Maldives with GlobeLink Consultants."
        canonicalPath="/international-careers"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Destinations & Careers', path: '/international-careers' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: 'International Career Opportunities & Destinations' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              Verified Country Pathways
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              International Destinations &amp; Career Opportunities
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every country maintains distinct labor regulations, language benchmarks, and visa entry pathways. Discover how GlobeLink supports candidates ethically in each market.
            </p>
          </div>
        </div>
      </section>

      {/* Explicit Destination Notice */}
      <section className="bg-sky-50 border-b border-sky-100 py-3.5 px-4 text-xs text-sky-900">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Selective Destination Notice:</strong> We do not imply that every program, student visa, or work category is universally available for all destinations. Each application is contingent upon host country immigration regulations, verified qualifications, and authentic sponsor/employer quotas.
          </p>
        </div>
      </section>

      {/* Destination Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              Explore Country Guides
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Select an International Destination
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Click any country to review the detailed scope of services, visa categories, and immigration compliance requirements.
            </p>
          </div>

          {/* Destination Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {DESTINATIONS.map(dest => {
              const isSelected = selectedDestination?.id === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-sky-500'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-2xl">{dest.flagEmoji}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-sky-400"></span>}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {dest.country}
                    </h3>
                    <p className={`text-[11px] line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {dest.tagline.split('for')[1] || dest.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Destination Full Detail View */}
          {selectedDestination && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                <img
                  src={selectedDestination.heroImage}
                  alt={`${selectedDestination.country} education and career pathway`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
                  <span className="text-3xl mb-1 block">{selectedDestination.flagEmoji}</span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                    {selectedDestination.country}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 mt-1">
                    {selectedDestination.tagline}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Overview */}
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">Country Overview &amp; Market Dynamics</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedDestination.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Supported Services */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-sky-600" />
                      GlobeLink Services Available for {selectedDestination.country}
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {selectedDestination.servicesAvailable.map((srv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visa Categories */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-sky-600" />
                      Relevant Visa Categories Supported
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {selectedDestination.visaCategoriesSupported.map((v, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-3">Key Living &amp; Working Highlights</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    {selectedDestination.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0"></span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal & Regulatory Compliance Notice */}
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <p className="font-bold text-amber-950 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    Regulatory &amp; Compliance Verification for {selectedDestination.country}
                  </p>
                  <p className="leading-relaxed">
                    {selectedDestination.complianceNotice}
                  </p>
                </div>

                {/* Action Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    Interested in {selectedDestination.country}? Speak directly with our advisory desk.
                  </p>
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello GlobeLink, I am inquiring about education and career pathways in ${selectedDestination.country}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    <span>Inquire about {selectedDestination.country} on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12">
            <DisclaimerBanner />
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="destination-inquiry"
            title="Book a Destination Consultation"
            subtitle="Select your preferred country and describe your current educational or career background."
            initialDestination={selectedDestination?.country || 'Japan'}
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
