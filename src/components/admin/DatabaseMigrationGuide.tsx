import React, { useState, useEffect } from 'react';
import {
  Database,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  RefreshCw,
  Lock,
  Layers,
  KeyRound,
  Download
} from 'lucide-react';
import { getSupabaseConfig, isSupabaseConfigured } from '../../services/inquiryService';
import { getCompleteAdminSqlMigration } from '../../services/supabaseClient';

export const DatabaseMigrationGuide: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [testing, setTesting] = useState(false);
  const [tableStatus, setTableStatus] = useState<{
    inquiries: boolean | null;
    news: boolean | null;
    exams: boolean | null;
    app_admins: boolean | null;
  }>({
    inquiries: null,
    news: null,
    exams: null,
    app_admins: null
  });

  const sqlScript = getCompleteAdminSqlMigration();
  const config = getSupabaseConfig();
  const configured = isSupabaseConfigured();

  const checkTables = async () => {
    if (!configured) return;
    setTesting(true);

    const cleanedUrl = config.url.replace(/\/$/, '');
    const headers = {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`
    };

    const checkEndpoint = async (tableName: string) => {
      try {
        const res = await fetch(`${cleanedUrl}/rest/v1/${tableName}?select=*&limit=1`, {
          method: 'GET',
          headers
        });
        // 200 or 401 (meaning table exists, but RLS prevents unauth read)
        return res.status === 200 || res.status === 401 || res.status === 403;
      } catch {
        return false;
      }
    };

    const [inq, nw, ex, adm] = await Promise.all([
      checkEndpoint('inquiries'),
      checkEndpoint('news'),
      checkEndpoint('exams'),
      checkEndpoint('app_admins')
    ]);

    setTableStatus({
      inquiries: inq,
      news: nw,
      exams: ex,
      app_admins: adm
    });
    setTesting(false);
  };

  useEffect(() => {
    checkTables();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([sqlScript], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `globelink-supabase-admin-migration-${new Date().toISOString().slice(0, 10)}.sql`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Database className="w-5 h-5 text-sky-600" />
              <span>Database Schema &amp; Row Level Security (RLS)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Secure PostgreSQL database structure connecting your public website to Supabase
            </p>
          </div>

          <button
            onClick={checkTables}
            disabled={testing}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${testing ? 'animate-spin' : ''}`} />
            <span>{testing ? 'Testing Tables...' : 'Check Live Tables'}</span>
          </button>
        </div>

        {/* Live Table Health Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-xs">
            <div className="text-slate-500 font-semibold mb-1">public.inquiries</div>
            <div className="flex items-center gap-1.5">
              {tableStatus.inquiries === true ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Connected
                </span>
              ) : tableStatus.inquiries === false ? (
                <span className="text-amber-700 font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Needs Migration
                </span>
              ) : (
                <span className="text-slate-400">Checking...</span>
              )}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Customer leads storage</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-xs">
            <div className="text-slate-500 font-semibold mb-1">public.news</div>
            <div className="flex items-center gap-1.5">
              {tableStatus.news === true ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Connected
                </span>
              ) : tableStatus.news === false ? (
                <span className="text-amber-700 font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Needs Migration
                </span>
              ) : (
                <span className="text-slate-400">Checking...</span>
              )}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Announcements &amp; advisories</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-xs">
            <div className="text-slate-500 font-semibold mb-1">public.exams</div>
            <div className="flex items-center gap-1.5">
              {tableStatus.exams === true ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Connected
                </span>
              ) : tableStatus.exams === false ? (
                <span className="text-amber-700 font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Needs Migration
                </span>
              ) : (
                <span className="text-slate-400">Checking...</span>
              )}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">JLPT, NAT-TEST, EJU dates</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-xs">
            <div className="text-slate-500 font-semibold mb-1">public.app_admins</div>
            <div className="flex items-center gap-1.5">
              {tableStatus.app_admins === true ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Connected
                </span>
              ) : tableStatus.app_admins === false ? (
                <span className="text-amber-700 font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Needs Migration
                </span>
              ) : (
                <span className="text-slate-400">Checking...</span>
              )}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Authorized CMS admins</div>
          </div>
        </div>

        {/* Security and RLS Notice */}
        <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900 space-y-2">
          <div className="font-bold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Row Level Security (RLS) Hardening</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sky-800 leading-relaxed text-[11px]">
            <li>
              <strong>Customer Inquiries:</strong> Anonymous visitors can only <code>INSERT</code> inquiries. Only authenticated administrators can <code>SELECT</code>, <code>UPDATE</code>, or <code>DELETE</code>.
            </li>
            <li>
              <strong>News &amp; Exams:</strong> Anonymous visitors can only <code>SELECT</code> records where <code>publication_status = 'published'</code>. Drafts and administrative changes are restricted to authenticated administrators.
            </li>
            <li>
              <strong>Zero Secret Exposure:</strong> No service-role key or database password is embedded in the frontend bundle.
            </li>
          </ul>
        </div>
      </div>

      {/* Migration Script Box */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-bold text-sm text-slate-900">
              Idempotent PostgreSQL Migration Script
            </h4>
            <p className="text-xs text-slate-500">
              Safe to run on existing databases: Uses <code>IF NOT EXISTS</code> and preserves existing inquiry rows.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied SQL!' : 'Copy SQL Script'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .sql</span>
            </button>

            <a
              href="https://supabase.com/dashboard/project/ktnyyfaufxxoxdxzolya/sql/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>Open Supabase SQL Editor</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <pre className="bg-slate-950 text-slate-200 text-xs p-4 rounded-xl overflow-x-auto max-h-96 font-mono border border-slate-800 leading-relaxed">
          {sqlScript}
        </pre>
      </div>
    </div>
  );
};
