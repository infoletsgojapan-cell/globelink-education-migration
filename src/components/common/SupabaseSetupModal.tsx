import React, { useState, useEffect } from 'react';
import { X, Check, Copy, Database, ShieldCheck, ExternalLink, Download, KeyRound, Globe, RefreshCw, AlertCircle } from 'lucide-react';
import { getSupabaseConfig, saveSupabaseConfig, isSupabaseConfigured, testSupabaseConnection } from '../../services/inquiryService';

interface SupabaseSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupabaseSetupModal: React.FC<SupabaseSetupModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [projectUrl, setProjectUrl] = useState('');
  const [publishableKey, setPublishableKey] = useState('sb_publishable_FBAcmrh-ZP_pavaxs05RYg_aSxXpI1a');
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [testing, setTesting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const config = getSupabaseConfig();
      setProjectUrl(config.url || '');
      setPublishableKey(config.key || 'sb_publishable_FBAcmrh-ZP_pavaxs05RYg_aSxXpI1a');
      setTestResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveAndTest = async () => {
    if (!projectUrl.trim()) {
      setTestResult({
        success: false,
        message: 'Please provide your Supabase Project URL (e.g. https://xyzcompany.supabase.co)'
      });
      return;
    }

    setTesting(true);
    setTestResult(null);

    saveSupabaseConfig(projectUrl.trim(), publishableKey.trim());
    const res = await testSupabaseConnection(projectUrl.trim(), publishableKey.trim());
    setTestResult(res);
    setTesting(false);
  };

  const configured = isSupabaseConfigured();
  const [activeSqlTab, setActiveSqlTab] = useState<'inquiries' | 'announcements'>('inquiries');

  const inquiriesSqlSchema = `-- =========================================================
-- GlobeLink Education & Migration Consultants
-- Inquiries Table Schema with Row Level Security (RLS)
-- Run this in your Supabase SQL Editor (https://app.supabase.com)
-- =========================================================

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

-- Allow anonymous visitors to submit new inquiries (INSERT only with consent_given = true)
CREATE POLICY "Allow anonymous lead insert"
  ON public.inquiries
  FOR INSERT
  TO anon
  WITH CHECK (consent_given = true);

-- Allow authenticated administrative staff to view all inquiries
CREATE POLICY "Allow authenticated staff read"
  ON public.inquiries
  FOR SELECT
  TO authenticated
  USING (true);
`;

  const announcementsSqlSchema = `-- =========================================================
-- GlobeLink Education & Migration Consultants
-- Announcements & Events Schema with Row Level Security (RLS)
-- Run this in your Supabase SQL Editor (https://app.supabase.com)
-- =========================================================

CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  title_si TEXT,
  title_ta TEXT,
  title_ja TEXT,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  description_si TEXT,
  description_ta TEXT,
  description_ja TEXT,
  event_date TIMESTAMPTZ,
  registration_opens TIMESTAMPTZ,
  deadline TIMESTAMPTZ,
  format TEXT DEFAULT 'Online',
  official_url TEXT,
  status TEXT DEFAULT 'Upcoming',
  is_published BOOLEAN DEFAULT true
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- 1. Public Read Policy: Anyone (anon and authenticated) can read published announcements
CREATE POLICY "Allow public read published announcements"
  ON public.announcements
  FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- 2. Authenticated Admin Policy: Only authenticated staff can manage announcements
CREATE POLICY "Allow authenticated staff manage announcements"
  ON public.announcements
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
`;

  const activeSql = activeSqlTab === 'inquiries' ? inquiriesSqlSchema : announcementsSqlSchema;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeSql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadLocalBackups = () => {
    try {
      const data = localStorage.getItem('globelink_local_inquiries') || '[]';
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `globelink-inquiries-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
    } catch {
      alert('No stored local inquiries found.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Database className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="font-bold text-base">Supabase Database Integration Setup</h3>
              <p className="text-xs text-slate-300">
                Secure cloud storage configuration for candidate leads
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-sm text-slate-700 max-h-[75vh] overflow-y-auto">
          {/* Status Badge */}
          <div className="p-3.5 rounded-xl border flex items-center justify-between text-xs bg-slate-50 border-slate-200">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${configured ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              <span className="font-semibold text-slate-900">
                Current Status: {configured ? 'Supabase Connected' : 'Configuration Pending (Offline Mode)'}
              </span>
            </div>
            {configured ? (
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Live Sync Active
              </span>
            ) : (
              <span className="text-amber-800 font-medium">
                Direct WhatsApp fallback active
              </span>
            )}
          </div>

          {/* Active Configuration & Connection Tester */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <KeyRound className="w-4 h-4 text-sky-600" />
              Connected Supabase Credentials
            </h4>

            <div className="space-y-2 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Supabase Project URL:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={projectUrl}
                    onChange={(e) => setProjectUrl(e.target.value)}
                    placeholder="https://ktnyyfaufxxoxdxzolya.supabase.co"
                    className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 font-mono text-xs bg-white text-slate-900"
                  />
                  <button
                    onClick={handleSaveAndTest}
                    disabled={testing}
                    className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5 shrink-0"
                  >
                    {testing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                    <span>{testing ? 'Testing...' : 'Save & Test'}</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Publishable Anon Key:
                </label>
                <input
                  type="text"
                  value={publishableKey}
                  onChange={(e) => setPublishableKey(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 font-mono text-xs bg-slate-100 text-slate-700"
                />
              </div>

              {testResult && (
                <div
                  className={`p-3 rounded-lg border text-xs flex items-start gap-2 animate-in fade-in ${
                    testResult.success
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  {testResult.success ? (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  )}
                  <p className="leading-relaxed">{testResult.message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 text-sm">Next Step: Ensure the Table Exists in Supabase</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Open your{' '}
              <a
                href="https://supabase.com/dashboard/project/ktnyyfaufxxoxdxzolya/sql/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 font-semibold inline-flex items-center gap-0.5 hover:underline"
              >
                Supabase SQL Editor <ExternalLink className="w-3 h-3" />
              </a>{' '}
              and execute the script below. This creates the <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">inquiries</code> table with Row Level Security (RLS) allowing anonymous candidate submissions.
            </p>
          </div>

          {/* SQL Script Box with Tab Selector */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveSqlTab('inquiries')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    activeSqlTab === 'inquiries' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Inquiries Schema (Leads)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSqlTab('announcements')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    activeSqlTab === 'announcements' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Announcements Schema (Events)
                </button>
              </div>

              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-1 text-xs text-sky-700 hover:text-sky-900 font-medium bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded-md transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied to Clipboard!' : `Copy ${activeSqlTab === 'inquiries' ? 'Inquiries' : 'Announcements'} SQL`}
              </button>
            </div>
            <pre className="bg-slate-950 text-slate-200 text-xs p-3.5 rounded-xl overflow-x-auto max-h-56 font-mono border border-slate-800 leading-relaxed">
              {activeSql}
            </pre>
          </div>

          {/* Local Leads backup */}
          <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
            <span>Local cached inquiries can be downloaded for administrative record-keeping.</span>
            <button
              onClick={downloadLocalBackups}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Export Local Inquiries (JSON)
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
