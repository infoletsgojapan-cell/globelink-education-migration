import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Mail,
  KeyRound,
  LogIn,
  LogOut,
  UserCheck,
  AlertCircle,
  CheckCircle2,
  Inbox,
  Newspaper,
  GraduationCap,
  Database,
  ArrowLeft,
  RefreshCw,
  ExternalLink,
  UserPlus,
  ShieldAlert,
  Eye,
  EyeOff
} from 'lucide-react';
import { PageId, AdminUser } from '../types';
import { getSupabaseClient, checkIsAuthorizedAdmin } from '../services/supabaseClient';
import { InquiriesManager } from '../components/admin/InquiriesManager';
import { NewsManager } from '../components/admin/NewsManager';
import { ExamsManager } from '../components/admin/ExamsManager';
import { DatabaseMigrationGuide } from '../components/admin/DatabaseMigrationGuide';
import { COMPANY_INFO } from '../data/company';

interface AdminPageProps {
  onNavigate: (page: PageId) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  // Auth state
  const [sessionUser, setSessionUser] = useState<any | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [adminRole, setAdminRole] = useState<string>('Staff');
  const [authError, setAuthError] = useState<string | null>(null);

  // Form state
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [authSuccessNotice, setAuthSuccessNotice] = useState<string | null>(null);

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'inquiries' | 'news' | 'exams' | 'database'>('inquiries');

  // Supabase Auth listener
  useEffect(() => {
    const client = getSupabaseClient();
    if (!client) {
      setAuthLoading(false);
      return;
    }

    const checkSession = async () => {
      try {
        const { data: { session } } = await client.auth.getSession();
        if (session?.user) {
          setSessionUser(session.user);
          const authCheck = await checkIsAuthorizedAdmin(session.user);
          setIsAuthorized(authCheck.isAuthorized);
          setAdminRole(authCheck.role);
          if (!authCheck.isAuthorized && authCheck.reason) {
            setAuthError(authCheck.reason);
          }
        } else {
          setSessionUser(null);
          setIsAuthorized(false);
        }
      } catch (err) {
        console.error('Session check error:', err);
      } finally {
        setAuthLoading(false);
      }
    };

    checkSession();

    const { data: { subscription } } = client.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setSessionUser(session.user);
        const authCheck = await checkIsAuthorizedAdmin(session.user);
        setIsAuthorized(authCheck.isAuthorized);
        setAdminRole(authCheck.role);
        if (!authCheck.isAuthorized && authCheck.reason) {
          setAuthError(authCheck.reason);
        } else {
          setAuthError(null);
        }
      } else {
        setSessionUser(null);
        setIsAuthorized(false);
        setAdminRole('Staff');
      }
      setAuthLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccessNotice(null);

    const client = getSupabaseClient();
    if (!client) {
      setAuthError('Supabase is not configured. Please configure your project credentials in the Setup modal.');
      return;
    }

    setSubmitting(true);
    try {
      if (authMode === 'signin') {
        const { data, error } = await client.auth.signInWithPassword({
          email: email.trim(),
          password: password.trim()
        });

        if (error) {
          setAuthError(error.message);
        } else if (data.user) {
          const check = await checkIsAuthorizedAdmin(data.user);
          setIsAuthorized(check.isAuthorized);
          setAdminRole(check.role);
          if (!check.isAuthorized && check.reason) {
            setAuthError(check.reason);
          }
        }
      } else {
        // Sign up
        const { data, error } = await client.auth.signUp({
          email: email.trim(),
          password: password.trim(),
          options: {
            data: {
              full_name: 'GlobeLink Administrator'
            }
          }
        });

        if (error) {
          setAuthError(error.message);
        } else if (data.user) {
          if (data.session) {
            setAuthSuccessNotice('Admin account created and signed in successfully!');
            const check = await checkIsAuthorizedAdmin(data.user);
            setIsAuthorized(check.isAuthorized);
            setAdminRole(check.role);
          } else {
            setAuthSuccessNotice(
              'Account created! A confirmation email has been dispatched. Please check your inbox or proceed to sign in if email confirmation is disabled.'
            );
            setAuthMode('signin');
          }
        }
      }
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Authentication failed.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    const client = getSupabaseClient();
    if (client) {
      await client.auth.signOut();
    }
    setSessionUser(null);
    setIsAuthorized(false);
    setAdminRole('Staff');
    setAuthError(null);
  };

  if (authLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-100">
        <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-sm w-full">
          <RefreshCw className="w-8 h-8 animate-spin text-sky-600 mx-auto mb-3" />
          <h4 className="font-bold text-slate-800 text-sm">Verifying Admin Credentials</h4>
          <p className="text-xs text-slate-500 mt-1">Connecting to Supabase Auth...</p>
        </div>
      </div>
    );
  }

  // If NOT authenticated, or authenticated but UNAUTHORIZED
  if (!sessionUser || !isAuthorized) {
    return (
      <div className="min-h-[85vh] py-12 px-4 bg-slate-900/5 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Top Brand Header */}
          <div className="p-6 bg-slate-900 text-white text-center relative">
            <button
              onClick={() => onNavigate('home')}
              className="absolute top-4 left-4 text-slate-400 hover:text-white p-1 rounded-lg text-xs inline-flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
            <div className="w-12 h-12 rounded-xl bg-sky-600/20 border border-sky-400/30 text-sky-400 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold">GlobeLink CMS Portal</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Secure Administrative Management Console
            </p>
          </div>

          <div className="p-6 space-y-4">
            {/* If logged in but NOT authorized */}
            {sessionUser && !isAuthorized ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-rose-700">
                    <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Access Denied: Account Unauthorized</span>
                  </div>
                  <p className="text-xs text-rose-800 leading-relaxed">
                    You are authenticated as <strong className="text-rose-950 font-mono">{sessionUser.email}</strong>, but this user account is not designated in the authorized administrator directory.
                  </p>
                  <p className="text-[11px] text-rose-700">
                    To access customer inquiries and content management, an authorized administrator must add your email to the administrator registry in Supabase.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleSignOut}
                    className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" /> Sign Out
                  </button>
                  <button
                    onClick={() => onNavigate('home')}
                    className="flex-1 py-2 px-3 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            ) : (
              // Login / Sign up form
              <form onSubmit={handleSignIn} className="space-y-4">
                {authError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{authError}</span>
                  </div>
                )}

                {authSuccessNotice && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{authSuccessNotice}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Staff Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info.letsgojapan@gmail.com"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Account Password
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-9 pr-10 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs inline-flex items-center justify-center gap-1.5"
                >
                  {submitting ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : authMode === 'signin' ? (
                    <LogIn className="w-4 h-4" />
                  ) : (
                    <UserPlus className="w-4 h-4" />
                  )}
                  <span>{submitting ? 'Authenticating...' : authMode === 'signin' ? 'Sign In to Dashboard' : 'Register Administrator'}</span>
                </button>

                <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
                      setAuthError(null);
                      setAuthSuccessNotice(null);
                    }}
                    className="text-sky-600 hover:text-sky-800 font-medium underline"
                  >
                    {authMode === 'signin'
                      ? 'First time here? Register initial admin'
                      : 'Already have an account? Sign in'}
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="text-slate-500 hover:text-slate-800"
                  >
                    Return to Site
                  </button>
                </div>
              </form>
            )}

            {/* Quick Admin Credentials Tip */}
            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
              <span className="font-semibold text-slate-700 block">Security Policy:</span>
              <p className="leading-relaxed">
                Supabase Auth enforces email/password credentials with Row Level Security. Only designated administrators (<code className="text-slate-800 bg-slate-100 px-1 rounded">info.letsgojapan@gmail.com</code> or verified users in <code className="text-slate-800 bg-slate-100 px-1 rounded">public.app_admins</code>) have read/write access.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AUTHORIZED ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-slate-100/70 pb-16">
      {/* Top Admin Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center font-bold text-white text-base shadow-sm">
                G
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-bold text-sm tracking-tight">GlobeLink Admin CMS</h1>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                    {adminRole}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Education &amp; Migration Management</p>
              </div>
            </div>

            {/* User Session & Logout */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <div className="text-xs font-semibold text-white">{sessionUser.email}</div>
                <div className="text-[10px] text-emerald-400 flex items-center justify-end gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Connected
                </div>
              </div>

              <button
                onClick={() => onNavigate('home')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
                title="View live website"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </button>

              <button
                onClick={handleSignOut}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-300 hover:text-white bg-rose-900/30 hover:bg-rose-800 transition-colors inline-flex items-center gap-1.5 border border-rose-800/40"
                title="Sign out from CMS"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all inline-flex items-center gap-2 ${
                activeTab === 'inquiries'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Inbox className="w-4 h-4" />
              <span>Customer Inquiries</span>
            </button>

            <button
              onClick={() => setActiveTab('news')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all inline-flex items-center gap-2 ${
                activeTab === 'news'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>News &amp; Announcements</span>
            </button>

            <button
              onClick={() => setActiveTab('exams')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all inline-flex items-center gap-2 ${
                activeTab === 'exams'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Exams &amp; Registration</span>
            </button>

            <button
              onClick={() => setActiveTab('database')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all inline-flex items-center gap-2 ${
                activeTab === 'database'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Database &amp; RLS Security</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'inquiries' && <InquiriesManager />}
        {activeTab === 'news' && <NewsManager />}
        {activeTab === 'exams' && <ExamsManager />}
        {activeTab === 'database' && <DatabaseMigrationGuide />}
      </main>
    </div>
  );
};
