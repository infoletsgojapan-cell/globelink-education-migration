import React, { useState } from 'react';
import {
  Languages,
  BookOpen,
  Calendar,
  Clock,
  Laptop,
  CheckCircle2,
  FileCheck2,
  MessageCircle,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PageId, JapaneseCourse } from '../types';
import { COMPANY_INFO } from '../data/company';
import { JAPANESE_COURSES, JAPAN_ONLINE_LEARNING_FEATURES } from '../data/courses';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface LetsGoJapanPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const LetsGoJapanPage: React.FC<LetsGoJapanPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const [selectedCourse, setSelectedCourse] = useState<JapaneseCourse | null>(null);

  const getWhatsAppCourseUrl = (course: JapaneseCourse) => {
    const text = `Hello GlobeLink / Let's Go Japan! I am interested in enrolling in the ${course.title} (${course.code}). Please share current batch start dates, timetable, and registration details.`;
    return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Let's Go Japan | Japanese Language Classes & Education Division"
        description="Let's Go Japan by GlobeLink: JLPT N5, N4, N3, JFT-Basic, NAT-TEST, Kanji mastery, and spoken Japanese classes for Sri Lankan students and SSW candidates."
        canonicalPath="/lets-go-japan"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: "Let's Go Japan", path: '/lets-go-japan' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: "Let's Go Japan" }]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner with Japanese Aesthetic Touch */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        {/* Subtle Japanese flag inspired red accent circle */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-950/80 border border-rose-800/80 rounded-full text-xs font-bold text-rose-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>Let&apos;s Go Japan &bull; 日本へ行こう</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Master Japanese with Sri Lanka&apos;s Dedicated Pathway Academy
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From zero Japanese to JLPT N3 and SSW Tokutei Ginou proficiency. Live interactive online classes, comprehensive past paper drills, Kanji mnemonics, and certified immigration study hours.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" /> JLPT N5, N4, N3
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" /> JFT-Basic (SSW)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" /> NAT-TEST (5Q / 4Q / 3Q)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" /> Live Interactive Batches
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Conflicting Information Notice Banner (Flagged for client verification as requested in prompt) */}
      <section className="bg-amber-50 border-b border-amber-200 py-3 px-4 text-xs text-amber-900">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Client Verification Notice:</strong> Course schedules, exact intake launch dates, and fee installments are updated regularly based on seasonal JLPT exam deadlines. All fees below reflect current standard batch guidelines and are subject to confirmation upon candidate enrollment.
          </p>
        </div>
      </section>

      {/* Course Catalog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Available Courses &amp; Programs
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Let&apos;s Go Japan Course Portfolio
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Select any course to view full syllabus highlights, duration, and direct WhatsApp inquiry options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JAPANESE_COURSES.map(course => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {course.code}
                    </span>
                    <span className="text-slate-500 font-medium">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {course.title}
                  </h3>

                  {course.japaneseTitle && (
                    <p className="text-xs font-medium text-rose-600 mt-1 mb-3">
                      {course.japaneseTitle}
                    </p>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {course.targetAudience}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    {course.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta Specs */}
                  <div className="bg-slate-50 rounded-xl p-3 space-y-1.5 text-xs text-slate-600 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" /> Duration:
                      </span>
                      <span className="font-semibold text-slate-900">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" /> Hours:
                      </span>
                      <span className="font-semibold text-slate-900">{course.hours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Laptop className="w-3 h-3 text-slate-400" /> Delivery:
                      </span>
                      <span className="font-semibold text-sky-700">{course.mode}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                      <span className="text-slate-500 font-medium">Course Fee:</span>
                      <span className="font-bold text-slate-900">{course.feeLkr.split('(')[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <a
                    href={getWhatsAppCourseUrl(course)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire Course on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs text-center transition-colors"
                  >
                    View Full Syllabus &amp; Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Learning Information Showcase */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              Digital Learning Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              How Online Learning Works at Let&apos;s Go Japan
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              We bring high-touch Japanese pedagogy straight to your device, wherever you reside in Sri Lanka or abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JAPAN_ONLINE_LEARNING_FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
                <div className="w-9 h-9 rounded-xl bg-sky-950 text-sky-400 border border-sky-800/80 flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">{feature.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}

            <div className="bg-gradient-to-br from-rose-950/70 to-slate-900 p-6 rounded-2xl border border-rose-800/60 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-rose-900 text-rose-300 flex items-center justify-center mb-3">
                  <Languages className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">Official JLPT &amp; NAT Registration</h3>
                <p className="text-xs text-rose-200 leading-relaxed">
                  We guide students through official Japanese embassy and test center registration cycles in Colombo with zero confusion.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello GlobeLink, I need assistance registering for the upcoming JLPT / NAT-TEST examination.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-rose-300 hover:text-white inline-flex items-center gap-1"
                >
                  Exam Assistance Desk &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-sky-400">{selectedCourse.code} &middot; {selectedCourse.level}</span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedCourse.title}</h3>
                {selectedCourse.japaneseTitle && (
                  <p className="text-xs text-rose-400 font-medium">{selectedCourse.japaneseTitle}</p>
                )}
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md"
              >
                &times;
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Target Audience &amp; Prerequisites</h4>
                <p className="text-slate-600 leading-relaxed">{selectedCourse.targetAudience}</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-semibold text-slate-900">{selectedCourse.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Hours:</span>
                  <span className="font-semibold text-slate-900">{selectedCourse.hours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Schedule:</span>
                  <span className="font-semibold text-slate-900">{selectedCourse.schedule}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Course Fee:</span>
                  <span className="font-semibold text-slate-900">{selectedCourse.feeLkr}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Curriculum &amp; Syllabus Coverage</h4>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                  {selectedCourse.syllabusOverview.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Key Course Advantages</h4>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                  {selectedCourse.highlights.map((hl, idx) => (
                    <li key={idx} className="leading-relaxed">{hl}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-[11px]">
                * Schedules and fees are editable per intake. Direct WhatsApp confirmation ensures you are enrolled in the next upcoming batch.
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors"
              >
                Close
              </button>
              <a
                href={getWhatsAppCourseUrl(selectedCourse)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Reserve Seat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="letsgojapan-inquiry"
            title="Enroll in Let's Go Japan Classes"
            subtitle="Send your language goals and preferred batch timings to our academic coordinators."
            initialDestination="Japan"
            initialService="Let's Go Japan Language Courses"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
