import React, { useState } from 'react';
import {
  GraduationCap,
  Clock,
  Calendar,
  Laptop,
  CheckCircle2,
  Filter,
  MessageCircle,
  HelpCircle,
  FileCheck2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PageId, JapaneseCourse } from '../types';
import { COMPANY_INFO } from '../data/company';
import { JAPANESE_COURSES } from '../data/courses';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface JapaneseCoursesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const JapaneseCoursesPage: React.FC<JapaneseCoursesPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const [filterLevel, setFilterLevel] = useState<'all' | 'foundation' | 'intermediate' | 'exam-prep' | 'skills'>('all');
  const [selectedCourse, setSelectedCourse] = useState<JapaneseCourse | null>(null);

  const filteredCourses = JAPANESE_COURSES.filter(course => {
    if (filterLevel === 'all') return true;
    if (filterLevel === 'foundation') return course.code === 'LGJ-N5';
    if (filterLevel === 'intermediate') return course.code === 'LGJ-N4' || course.code === 'LGJ-N3';
    if (filterLevel === 'exam-prep') return course.code === 'LGJ-PAP' || course.code === 'LGJ-JFT' || course.code === 'LGJ-NAT';
    if (filterLevel === 'skills') return course.code === 'LGJ-KNJ' || course.code === 'LGJ-SPK';
    return true;
  });

  const getWhatsAppCourseUrl = (course: JapaneseCourse) => {
    const text = `Hello GlobeLink, I want to inquire about the ${course.title} (${course.code}). Please send me fee installments and class timetable.`;
    return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Japanese Language Courses | JLPT N5, N4, N3, JFT & NAT-TEST | GlobeLink"
        description="Explore GlobeLink's complete Japanese language course catalog: JLPT N5-N3, NAT-TEST, JFT-Basic CBT, Kanji workshops, and spoken Japanese classes in Sri Lanka."
        canonicalPath="/japanese-language-courses"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: "Let's Go Japan", path: '/lets-go-japan' },
          { name: 'Japanese Language Courses', path: '/japanese-language-courses' }
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Let's Go Japan", pageId: 'lets-go-japan' },
          { name: 'Japanese Language Courses' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">
              Official Course Catalog &amp; Syllabus
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Japanese Language Courses &amp; Exam Classes
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Curated syllabus structures tailored for JLPT exams, Specified Skilled Worker (SSW) Tokutei Ginou benchmarks, and everyday conversational fluency in Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Courses */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Functional Segmented Filter Buttons (compliant with frontend-design skill) */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => setFilterLevel('all')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  filterLevel === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Courses ({JAPANESE_COURSES.length})
              </button>
              <button
                onClick={() => setFilterLevel('foundation')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  filterLevel === 'foundation'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                JLPT N5 Foundation
              </button>
              <button
                onClick={() => setFilterLevel('intermediate')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  filterLevel === 'intermediate'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                JLPT N4 &amp; N3 Intermediate
              </button>
              <button
                onClick={() => setFilterLevel('exam-prep')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  filterLevel === 'exam-prep'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Papers, JFT &amp; NAT-TEST
              </button>
              <button
                onClick={() => setFilterLevel('skills')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  filterLevel === 'skills'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Kanji &amp; Spoken Kaiwa
              </button>
            </div>

            <div className="text-xs text-slate-500">
              Showing <strong>{filteredCourses.length}</strong> available courses
            </div>
          </div>

          {/* Course List Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                        {course.code}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-2">
                        {course.title}
                      </h3>
                      {course.japaneseTitle && (
                        <p className="text-xs font-medium text-rose-600 mt-0.5">
                          {course.japaneseTitle}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      {course.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {course.targetAudience}
                  </p>

                  <div className="bg-slate-50 rounded-xl p-3.5 space-y-2 text-xs text-slate-700 border border-slate-100">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Duration:</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Class Hours:</span>
                        <span className="font-semibold">{course.hours}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60">
                      <span className="text-slate-400 block text-[11px]">Schedule:</span>
                      <span className="font-medium text-slate-800">{course.schedule}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Standard Tuition:</span>
                      <span className="font-bold text-slate-900 text-sm">{course.feeLkr}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-800 block mb-1.5">
                      Syllabus Breakdown:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {course.syllabusOverview.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppCourseUrl(course)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                  >
                    View All Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <DisclaimerBanner />
          </div>
        </div>
      </section>

      {/* Detail Modal */}
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
                className="text-slate-400 hover:text-white p-1 rounded-md text-xl"
              >
                &times;
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700 max-h-[70vh] overflow-y-auto">
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
                  <span className="text-slate-500">Tuition Fee:</span>
                  <span className="font-semibold text-slate-900">{selectedCourse.feeLkr}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Detailed Syllabus:</h4>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                  {selectedCourse.syllabusOverview.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Course Highlights:</h4>
                <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                  {selectedCourse.highlights.map((hl, idx) => (
                    <li key={idx} className="leading-relaxed">{hl}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300"
              >
                Close
              </button>
              <a
                href={getWhatsAppCourseUrl(selectedCourse)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Enroll via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="courses-inquiry"
            title="Register for an Upcoming Japanese Batch"
            subtitle="Let our coordinators know which level or exam you are targeting."
            initialDestination="Japan"
            initialService="Let's Go Japan Language Courses"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
