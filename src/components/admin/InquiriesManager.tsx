import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Filter,
  Download,
  RefreshCw,
  Eye,
  Trash2,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  X,
  AlertTriangle,
  User,
  MapPin,
  Calendar,
  Layers,
  Copy,
  Check
} from 'lucide-react';
import { InquiryRecord, InquiryStatus } from '../../types';
import {
  fetchInquiries,
  updateInquiryStatus,
  deleteInquiryRecord
} from '../../services/supabaseClient';

export const InquiriesManager: React.FC = () => {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [source, setSource] = useState<'database' | 'local'>('database');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | InquiryStatus>('All');
  const [destinationFilter, setDestinationFilter] = useState<string>('All');

  // Selected for Detail Modal
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(null);

  // Delete confirmation
  const [inquiryToDelete, setInquiryToDelete] = useState<InquiryRecord | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Copy feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const loadData = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    else setLoading(true);
    setErrorMessage(null);

    const res = await fetchInquiries();
    setInquiries(res.data);
    setSource(res.source);
    if (res.error) {
      setErrorMessage(`Supabase sync notice: ${res.error}`);
    }

    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id: string, newStatus: InquiryStatus) => {
    // Optimistic UI update
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    const res = await updateInquiryStatus(id, newStatus);
    if (!res.success) {
      // Revert or inform
      console.warn('Status update warning:', res.message);
    }
  };

  const confirmDelete = async () => {
    if (!inquiryToDelete) return;
    setDeleting(true);
    await deleteInquiryRecord(inquiryToDelete.id);
    setInquiries((prev) => prev.filter((i) => i.id !== inquiryToDelete.id));
    if (selectedInquiry?.id === inquiryToDelete.id) {
      setSelectedInquiry(null);
    }
    setInquiryToDelete(null);
    setDeleting(false);
  };

  // Filtered inquiries
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      // Status match
      if (statusFilter !== 'All') {
        const itemStatus = (item.status || 'New').toLowerCase();
        if (itemStatus !== statusFilter.toLowerCase()) return false;
      }

      // Destination match
      if (destinationFilter !== 'All') {
        if (!item.preferred_destination?.toLowerCase().includes(destinationFilter.toLowerCase())) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inName = item.full_name?.toLowerCase().includes(q);
        const inPhone = item.phone?.toLowerCase().includes(q);
        const inEmail = item.email?.toLowerCase().includes(q);
        const inMsg = item.message?.toLowerCase().includes(q);
        const inInterest = item.education_career_interest?.toLowerCase().includes(q);
        if (!inName && !inPhone && !inEmail && !inMsg && !inInterest) {
          return false;
        }
      }

      return true;
    });
  }, [inquiries, statusFilter, destinationFilter, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    const total = inquiries.length;
    const newCount = inquiries.filter((i) => (i.status || 'New').toLowerCase() === 'new').length;
    const contacted = inquiries.filter((i) => (i.status || '').toLowerCase() === 'contacted').length;
    const completed = inquiries.filter((i) => (i.status || '').toLowerCase() === 'completed').length;
    return { total, newCount, contacted, completed };
  }, [inquiries]);

  // Export to CSV
  const handleExportCsv = () => {
    if (inquiries.length === 0) {
      alert('No inquiries available to export.');
      return;
    }

    const headers = [
      'Submission Date',
      'Status',
      'Candidate Name',
      'Phone',
      'Email',
      'Preferred Destination',
      'Service Category',
      'Interest',
      'Preferred Contact Method',
      'Message',
      'Consent Given'
    ];

    const rows = inquiries.map((i) => [
      `"${new Date(i.created_at).toLocaleString('en-LK')}"`,
      `"${i.status || 'New'}"`,
      `"${(i.full_name || '').replace(/"/g, '""')}"`,
      `"${(i.phone || '').replace(/"/g, '""')}"`,
      `"${(i.email || '').replace(/"/g, '""')}"`,
      `"${(i.preferred_destination || '').replace(/"/g, '""')}"`,
      `"${(i.service_category || '').replace(/"/g, '""')}"`,
      `"${(i.education_career_interest || '').replace(/"/g, '""')}"`,
      `"${(i.preferred_contact_method || '').replace(/"/g, '""')}"`,
      `"${(i.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      `"${i.consent_given ? 'Yes' : 'No'}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `globelink-inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getStatusBadge = (status?: string) => {
    const s = (status || 'New').toLowerCase();
    if (s === 'new') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          New Lead
        </span>
      );
    }
    if (s === 'contacted') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
          <Clock className="w-3 h-3 text-sky-600" />
          Contacted
        </span>
      );
    }
    if (s === 'completed') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          Completed
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-700">
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Total Inquiries
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
          <div className="text-[11px] text-slate-400 mt-1">From web & consultation forms</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-xs bg-gradient-to-br from-amber-50/50 to-white">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>New Inquiries</span>
            {stats.newCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            )}
          </div>
          <div className="text-2xl font-bold text-amber-900">{stats.newCount}</div>
          <div className="text-[11px] text-amber-700 mt-1">Requires follow-up</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-sky-200 shadow-xs bg-gradient-to-br from-sky-50/50 to-white">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
            In Contact
          </div>
          <div className="text-2xl font-bold text-sky-900">{stats.contacted}</div>
          <div className="text-[11px] text-sky-700 mt-1">Discussion / assessment in progress</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-xs bg-gradient-to-br from-emerald-50/50 to-white">
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
            Completed
          </div>
          <div className="text-2xl font-bold text-emerald-900">{stats.completed}</div>
          <div className="text-[11px] text-emerald-700 mt-1">Enrolled or resolved</div>
        </div>
      </div>

      {/* Action Bar: Search, Filters, Refresh, Export */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="flex flex-1 flex-col sm:flex-row gap-2.5">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by candidate name, phone, email, message..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-slate-50 focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-2.5 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-700 focus:ring-2 focus:ring-sky-500"
            >
              <option value="All">All Statuses ({inquiries.length})</option>
              <option value="New">New ({stats.newCount})</option>
              <option value="Contacted">Contacted ({stats.contacted})</option>
              <option value="Completed">Completed ({stats.completed})</option>
            </select>
          </div>

          {/* Destination Filter */}
          <div className="shrink-0">
            <select
              value={destinationFilter}
              onChange={(e) => setDestinationFilter(e.target.value)}
              className="px-2.5 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-700 focus:ring-2 focus:ring-sky-500"
            >
              <option value="All">All Destinations</option>
              <option value="Japan">Japan (Let's Go Japan)</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Europe">Europe / Other</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => loadData(true)}
            disabled={refreshing}
            className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors inline-flex items-center gap-1.5"
            title="Refresh from Supabase"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
            <span>{refreshing ? 'Syncing...' : 'Refresh'}</span>
          </button>

          <button
            onClick={handleExportCsv}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {errorMessage && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
          <span className="text-[10px] bg-amber-100 px-2 py-0.5 rounded font-medium">
            Local sync active
          </span>
        </div>
      )}

      {/* Main Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-sky-600" />
            <p className="text-xs">Loading customer inquiries from Supabase...</p>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
              <User className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">No Inquiries Found</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {searchQuery || statusFilter !== 'All' || destinationFilter !== 'All'
                ? 'No inquiries match the current search filters. Try clearing your filters.'
                : 'Customer inquiries submitted via the website contact or consultation forms will appear here securely.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Date / Time</th>
                  <th className="py-3 px-4">Candidate</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Destination &amp; Service</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredInquiries.map((inquiry) => {
                  const createdDate = new Date(inquiry.created_at);
                  const formattedDate = createdDate.toLocaleDateString('en-LK', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  });
                  const formattedTime = createdDate.toLocaleTimeString('en-LK', {
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  // WhatsApp quick reply url
                  const cleanPhone = inquiry.phone.replace(/[^0-9]/g, '');
                  const replyText = `Hello ${inquiry.full_name}, thank you for contacting GlobeLink Education & Migration Consultants regarding your inquiry for ${inquiry.preferred_destination || 'education pathways'}. How can we assist you today?`;
                  const waUrl = cleanPhone
                    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(replyText)}`
                    : null;

                  return (
                    <tr
                      key={inquiry.id}
                      className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                      onClick={() => setSelectedInquiry(inquiry)}
                    >
                      {/* Date */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-semibold text-slate-900">{formattedDate}</div>
                        <div className="text-[11px] text-slate-400">{formattedTime}</div>
                      </td>

                      {/* Candidate Name */}
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <span>{inquiry.full_name}</span>
                          {inquiry.preferred_contact_method && (
                            <span className="text-[10px] font-normal px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                              via {inquiry.preferred_contact_method}
                            </span>
                          )}
                        </div>
                        {inquiry.message && (
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 max-w-xs">
                            {inquiry.message}
                          </p>
                        )}
                      </td>

                      {/* Contact Info */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <a
                            href={`tel:${inquiry.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-slate-700 hover:text-sky-600"
                          >
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span>{inquiry.phone}</span>
                          </a>
                          <a
                            href={`mailto:${inquiry.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-slate-500 hover:text-sky-600 text-[11px]"
                          >
                            <Mail className="w-3 h-3 text-slate-400" />
                            <span className="truncate max-w-[150px]">{inquiry.email}</span>
                          </a>
                        </div>
                      </td>

                      {/* Destination & Service */}
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                          <span>{inquiry.preferred_destination || 'General Consultancy'}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {inquiry.service_category || inquiry.education_career_interest || 'General'}
                        </div>
                      </td>

                      {/* Status Selector */}
                      <td className="py-3 px-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-1.5">
                          {getStatusBadge(inquiry.status)}
                          <select
                            value={(inquiry.status || 'New').toLowerCase()}
                            onChange={(e) =>
                              handleStatusChange(
                                inquiry.id,
                                (e.target.value === 'new'
                                  ? 'New'
                                  : e.target.value === 'contacted'
                                  ? 'Contacted'
                                  : 'Completed') as InquiryStatus
                              )
                            }
                            className="text-[11px] border border-slate-200 rounded px-1.5 py-0.5 bg-white text-slate-700 hover:border-slate-400 focus:ring-1 focus:ring-sky-500"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="completed">Completed</option>
                          </select>
                        </div>
                      </td>

                      {/* Actions */}
                      <td
                        className="py-3 px-4 text-right whitespace-nowrap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-end gap-1.5">
                          {waUrl && (
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                              title="Chat with candidate on WhatsApp"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </a>
                          )}

                          <button
                            onClick={() => setSelectedInquiry(inquiry)}
                            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                            title="View full inquiry details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => setInquiryToDelete(inquiry)}
                            className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 hover:text-rose-700 transition-colors"
                            title="Delete record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-sky-400 font-bold">
                  Inquiry Details
                </span>
                <h3 className="text-base font-bold">{selectedInquiry.full_name}</h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 text-xs text-slate-700 max-h-[75vh] overflow-y-auto">
              {/* Status and timestamp banner */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-500">Status:</span>
                  {getStatusBadge(selectedInquiry.status)}
                </div>
                <div className="text-[11px] text-slate-500">
                  {new Date(selectedInquiry.created_at).toLocaleString('en-LK')}
                </div>
              </div>

              {/* Status Change Dropdown */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Change Status:
                </label>
                <div className="flex gap-2">
                  {(['New', 'Contacted', 'Completed'] as InquiryStatus[]).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleStatusChange(selectedInquiry.id, st)}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        (selectedInquiry.status || 'New').toLowerCase() === st.toLowerCase()
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Phone / WhatsApp
                  </span>
                  <div className="font-semibold text-slate-900 flex items-center justify-between">
                    <span>{selectedInquiry.phone}</span>
                    <button
                      onClick={() => copyToClipboard(selectedInquiry.phone, 'phone')}
                      className="text-slate-400 hover:text-slate-700"
                    >
                      {copiedId === 'phone' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Email Address
                  </span>
                  <div className="font-semibold text-slate-900 truncate flex items-center justify-between">
                    <span className="truncate">{selectedInquiry.email}</span>
                    <button
                      onClick={() => copyToClipboard(selectedInquiry.email, 'email')}
                      className="text-slate-400 hover:text-slate-700 shrink-0 ml-1"
                    >
                      {copiedId === 'email' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-semibold text-slate-900">
                    {selectedInquiry.preferred_destination || 'Not specified'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Service Category:</span>
                  <span className="font-semibold text-slate-900">
                    {selectedInquiry.service_category || 'General Consultancy'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Interest / Level:</span>
                  <span className="font-semibold text-slate-900">
                    {selectedInquiry.education_career_interest || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Preferred Contact Method:</span>
                  <span className="font-semibold text-slate-900">
                    {selectedInquiry.preferred_contact_method || 'WhatsApp'}
                  </span>
                </div>
              </div>

              {/* Candidate Message */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-semibold text-slate-600">Candidate Message:</label>
                  {selectedInquiry.message && (
                    <button
                      onClick={() => copyToClipboard(selectedInquiry.message || '', 'msg')}
                      className="text-[10px] text-sky-600 hover:text-sky-800 font-semibold inline-flex items-center gap-1"
                    >
                      {copiedId === 'msg' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copiedId === 'msg' ? 'Copied' : 'Copy Message'}
                    </button>
                  )}
                </div>
                <div className="p-3 bg-slate-100 rounded-xl text-slate-800 whitespace-pre-wrap leading-relaxed border border-slate-200">
                  {selectedInquiry.message || 'No additional message provided.'}
                </div>
              </div>

              {/* Direct Quick Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello ${selectedInquiry.full_name}, thank you for contacting GlobeLink Education & Migration Consultants.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reply on WhatsApp</span>
                </a>

                <a
                  href={`mailto:${selectedInquiry.email}?subject=${encodeURIComponent(
                    `GlobeLink Education Inquiry Follow-Up - ${selectedInquiry.full_name}`
                  )}`}
                  className="flex-1 py-2 px-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={() => {
                  setInquiryToDelete(selectedInquiry);
                }}
                className="text-xs text-rose-600 hover:text-rose-800 font-semibold inline-flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" /> Delete Inquiry
              </button>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {inquiryToDelete && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-base text-slate-900">Delete Inquiry Record?</h4>
              <p className="text-xs text-slate-500 mt-1">
                Are you sure you want to permanently delete the inquiry from{' '}
                <strong className="text-slate-800">{inquiryToDelete.full_name}</strong>? This action
                cannot be undone.
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setInquiryToDelete(null)}
                disabled={deleting}
                className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-1 py-2 px-3 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-1"
              >
                {deleting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                <span>{deleting ? 'Deleting...' : 'Confirm Delete'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
