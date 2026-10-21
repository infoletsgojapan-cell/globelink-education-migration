import React, { useState, useEffect, useMemo } from 'react';
import {
  GraduationCap,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  ExternalLink,
  CheckCircle2,
  Clock,
  X,
  AlertCircle,
  RefreshCw,
  Calendar,
  Layers,
  BookOpen
} from 'lucide-react';
import { ExamEntry } from '../../types';
import {
  fetchExamEntries,
  saveExamEntry,
  deleteExamEntry
} from '../../services/supabaseClient';

export const ExamsManager: React.FC = () => {
  const [exams, setExams] = useState<ExamEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [fromDb, setFromDb] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'published' | 'draft'>('All');

  // Add/Edit Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingExam, setEditingExam] = useState<Partial<ExamEntry> | null>(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Delete modal
  const [examToDelete, setExamToDelete] = useState<ExamEntry | null>(null);
  const [deleting, setDeleting] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const res = await fetchExamEntries(false);
    setExams(res.data);
    setFromDb(res.fromDb);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const openAddModal = () => {
    setEditingExam({
      exam_name: '',
      exam_level: '',
      exam_date: '',
      registration_deadline: '',
      description: '',
      registration_url: '',
      publication_status: 'published'
    });
    setFormError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (exam: ExamEntry) => {
    setEditingExam({ ...exam });
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExam) return;

    if (!editingExam.exam_name?.trim()) {
      setFormError('Examination name is required.');
      return;
    }

    setSaving(true);
    setFormError(null);

    const res = await saveExamEntry({
      ...editingExam,
      exam_name: editingExam.exam_name.trim()
    } as any);

    if (res.success && res.data) {
      setFeedbackMessage(res.message);
      setTimeout(() => setFeedbackMessage(null), 3500);
      setIsModalOpen(false);
      setEditingExam(null);
      await loadData();
    } else {
      setFormError(res.message || 'Failed to save exam schedule.');
    }
    setSaving(false);
  };

  const togglePublicationStatus = async (exam: ExamEntry) => {
    const newStatus: 'draft' | 'published' = exam.publication_status === 'published' ? 'draft' : 'published';
    const updated: ExamEntry = { ...exam, publication_status: newStatus };

    setExams((prev) => prev.map((item) => (item.id === exam.id ? updated : item)));
    await saveExamEntry(updated as any);
  };

  const confirmDelete = async () => {
    if (!examToDelete) return;
    setDeleting(true);
    await deleteExamEntry(examToDelete.id);
    setExams((prev) => prev.filter((item) => item.id !== examToDelete.id));
    setExamToDelete(null);
    setDeleting(false);
  };

  // Filtered
  const filteredExams = useMemo(() => {
    return exams.filter((item) => {
      if (statusFilter !== 'All' && item.publication_status !== statusFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inName = item.exam_name?.toLowerCase().includes(q);
        const inLevel = item.exam_level?.toLowerCase().includes(q);
        const inDesc = item.description?.toLowerCase().includes(q);
        if (!inName && !inLevel && !inDesc) {
          return false;
        }
      }
      return true;
    });
  }, [exams, statusFilter, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-600" />
            <span>Exams &amp; Registration Schedule Management</span>
          </h3>
          <p className="text-xs text-slate-500">
            Manage official test dates, registration deadlines, and application links for JLPT, NAT-TEST, EJU, and SSW
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="px-3.5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Exam Entry</span>
        </button>
      </div>

      {feedbackMessage && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex flex-1 flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by exam name, level (e.g. N5, NAT-TEST, EJU)..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-2.5 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-700 focus:ring-2 focus:ring-sky-500"
            >
              <option value="All">All Statuses ({exams.length})</option>
              <option value="published">
                Published ({exams.filter((e) => e.publication_status === 'published').length})
              </option>
              <option value="draft">
                Drafts ({exams.filter((e) => e.publication_status === 'draft').length})
              </option>
            </select>
          </div>
        </div>

        <button
          onClick={loadData}
          className="px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors inline-flex items-center gap-1.5 shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh</span>
        </button>
      </div>

      {/* Exams Table / Cards */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-sky-600" />
            <p className="text-xs">Loading examination schedules...</p>
          </div>
        ) : filteredExams.length === 0 ? (
          <div className="p-12 text-center">
            <GraduationCap className="w-10 h-10 mx-auto mb-2 text-slate-300" />
            <h4 className="text-sm font-bold text-slate-800">No Exam Entries Found</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Add upcoming exam schedules using the button above.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredExams.map((exam) => {
              const isPublished = exam.publication_status === 'published';

              return (
                <div
                  key={exam.id}
                  className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => togglePublicationStatus(exam)}
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                          isPublished
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                        title="Click to toggle status"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isPublished ? 'bg-emerald-500' : 'bg-slate-400'
                          }`}
                        ></span>
                        <span>{isPublished ? 'Published' : 'Draft'}</span>
                      </button>

                      {exam.exam_level && (
                        <span className="text-[11px] font-semibold bg-sky-50 text-sky-700 px-2 py-0.5 rounded-md border border-sky-100">
                          {exam.exam_level}
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-sm text-slate-900">{exam.exam_name}</h4>

                    {exam.description && (
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {exam.description}
                      </p>
                    )}

                    {/* Meta Dates */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                      {exam.exam_date && (
                        <div className="flex items-center gap-1 text-slate-700 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-sky-600" />
                          <span>Exam Date: {exam.exam_date}</span>
                        </div>
                      )}

                      {exam.registration_deadline && (
                        <div className="flex items-center gap-1 text-rose-700 font-medium">
                          <Clock className="w-3.5 h-3.5 text-rose-600" />
                          <span>Deadline: {exam.registration_deadline}</span>
                        </div>
                      )}

                      {exam.registration_url && (
                        <a
                          href={exam.registration_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-800 inline-flex items-center gap-1 underline text-[11px]"
                        >
                          Official Link <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <button
                      onClick={() => openEditModal(exam)}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 transition-colors inline-flex items-center gap-1"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => setExamToDelete(exam)}
                      className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 hover:text-rose-700 transition-colors"
                      title="Delete exam entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && editingExam && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <form onSubmit={handleSave}>
              <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-sky-400 font-bold">
                    Examination Schedule Editor
                  </span>
                  <h3 className="text-base font-bold">
                    {editingExam.id ? 'Edit Exam Record' : 'Add Examination Entry'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4 text-xs text-slate-700 max-h-[75vh] overflow-y-auto">
                {formError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Exam Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Exam Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={editingExam.exam_name || ''}
                    onChange={(e) => setEditingExam({ ...editingExam, exam_name: e.target.value })}
                    placeholder="e.g. JLPT (Japanese-Language Proficiency Test)"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Level / Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Exam Level / Targets
                  </label>
                  <input
                    type="text"
                    value={editingExam.exam_level || ''}
                    onChange={(e) => setEditingExam({ ...editingExam, exam_level: e.target.value })}
                    placeholder="e.g. N5, N4, N3, N2, N1 or CBT A2 Level"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Exam Date</label>
                    <input
                      type="text"
                      value={editingExam.exam_date || ''}
                      onChange={(e) => setEditingExam({ ...editingExam, exam_date: e.target.value })}
                      placeholder="e.g. 2026-07-05 / July 2026"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Registration Deadline
                    </label>
                    <input
                      type="text"
                      value={editingExam.registration_deadline || ''}
                      onChange={(e) =>
                        setEditingExam({ ...editingExam, registration_deadline: e.target.value })
                      }
                      placeholder="e.g. 2026-03-31 (March 31, 2026)"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={editingExam.description || ''}
                    onChange={(e) => setEditingExam({ ...editingExam, description: e.target.value })}
                    placeholder="Brief description of the examination, issuing body, scoring benchmark, and visa eligibility..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 leading-relaxed"
                  />
                </div>

                {/* Registration URL */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Official Registration URL
                  </label>
                  <input
                    type="url"
                    value={editingExam.registration_url || ''}
                    onChange={(e) =>
                      setEditingExam({ ...editingExam, registration_url: e.target.value })
                    }
                    placeholder="https://www.jlpt.jp/e/application/overseas_list.html"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Publication Status Toggle */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Status</span>
                    <span className="text-[11px] text-slate-500">
                      Published exams appear on the live Japanese Exams page
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setEditingExam({ ...editingExam, publication_status: 'draft' })
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        editingExam.publication_status === 'draft'
                          ? 'bg-slate-800 text-white shadow-xs'
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      Draft
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setEditingExam({ ...editingExam, publication_status: 'published' })
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        editingExam.publication_status === 'published'
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      Published
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  {saving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                  <span>{saving ? 'Saving...' : editingExam.id ? 'Save Changes' : 'Create Entry'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {examToDelete && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-base text-slate-900">Delete Exam Record?</h4>
              <p className="text-xs text-slate-500 mt-1">
                Are you sure you want to remove <strong className="text-slate-800">"{examToDelete.exam_name}"</strong>?
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setExamToDelete(null)}
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
