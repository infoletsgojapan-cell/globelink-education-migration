import React, { useState, useEffect, useMemo } from 'react';
import {
  Newspaper,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Eye,
  CheckCircle2,
  Clock,
  ExternalLink,
  X,
  AlertCircle,
  RefreshCw,
  Image as ImageIcon,
  Calendar,
  Share2
} from 'lucide-react';
import { NewsArticle } from '../../types';
import {
  fetchNewsArticles,
  saveNewsArticle,
  deleteNewsArticle
} from '../../services/supabaseClient';

export const NewsManager: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [fromDb, setFromDb] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'published' | 'draft'>('All');

  // Modal for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Partial<NewsArticle> | null>(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Modal for Delete
  const [articleToDelete, setArticleToDelete] = useState<NewsArticle | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Preview Drawer
  const [previewArticle, setPreviewArticle] = useState<NewsArticle | null>(null);

  const loadData = async () => {
    setLoading(true);
    const res = await fetchNewsArticles(false);
    setArticles(res.data);
    setFromDb(res.fromDb);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const openAddModal = () => {
    setEditingArticle({
      title: '',
      slug: '',
      summary: '',
      content: '',
      image_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
      publication_date: new Date().toISOString().slice(0, 10),
      publication_status: 'draft'
    });
    setFormError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (article: NewsArticle) => {
    setEditingArticle({
      ...article,
      publication_date: article.publication_date ? article.publication_date.slice(0, 10) : ''
    });
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;

    if (!editingArticle.title?.trim()) {
      setFormError('Article title is required.');
      return;
    }
    if (!editingArticle.content?.trim()) {
      setFormError('Article content is required.');
      return;
    }

    setSaving(true);
    setFormError(null);

    const res = await saveNewsArticle({
      ...editingArticle,
      title: editingArticle.title.trim(),
      content: editingArticle.content.trim()
    } as any);

    if (res.success && res.data) {
      setFeedbackMessage(res.message);
      setTimeout(() => setFeedbackMessage(null), 3500);
      setIsModalOpen(false);
      setEditingArticle(null);
      await loadData();
    } else {
      setFormError(res.message || 'Failed to save article.');
    }
    setSaving(false);
  };

  const togglePublicationStatus = async (article: NewsArticle) => {
    const newStatus: 'draft' | 'published' = article.publication_status === 'published' ? 'draft' : 'published';
    const updated: NewsArticle = { ...article, publication_status: newStatus };

    // Optimistic UI update
    setArticles((prev) => prev.map((item) => (item.id === article.id ? updated : item)));

    await saveNewsArticle(updated as any);
  };

  const confirmDelete = async () => {
    if (!articleToDelete) return;
    setDeleting(true);
    await deleteNewsArticle(articleToDelete.id);
    setArticles((prev) => prev.filter((item) => item.id !== articleToDelete.id));
    if (previewArticle?.id === articleToDelete.id) {
      setPreviewArticle(null);
    }
    setArticleToDelete(null);
    setDeleting(false);
  };

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((item) => {
      if (statusFilter !== 'All' && item.publication_status !== statusFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = item.title?.toLowerCase().includes(q);
        const inSummary = item.summary?.toLowerCase().includes(q);
        const inContent = item.content?.toLowerCase().includes(q);
        const inSlug = item.slug?.toLowerCase().includes(q);
        if (!inTitle && !inSummary && !inContent && !inSlug) {
          return false;
        }
      }
      return true;
    });
  }, [articles, statusFilter, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-sky-600" />
            <span>News &amp; Public Announcements CMS</span>
          </h3>
          <p className="text-xs text-slate-500">
            Publish official announcements, seminar invitations, and education advisories dynamically
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="px-3.5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Article</span>
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
              placeholder="Search news by title, slug, or content..."
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
              <option value="All">All Statuses ({articles.length})</option>
              <option value="published">
                Published ({articles.filter((a) => a.publication_status === 'published').length})
              </option>
              <option value="draft">
                Drafts ({articles.filter((a) => a.publication_status === 'draft').length})
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

      {/* Articles Grid / List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-sky-600" />
            <p className="text-xs">Loading news items...</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="p-12 text-center">
            <Newspaper className="w-10 h-10 mx-auto mb-2 text-slate-300" />
            <h4 className="text-sm font-bold text-slate-800">No News Articles Found</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Create your first news announcement or advisory article using the button above.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredArticles.map((article) => {
              const isPublished = article.publication_status === 'published';
              const pubDate = new Date(article.publication_date).toLocaleDateString('en-LK', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              });

              return (
                <div
                  key={article.id}
                  className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
                >
                  <div className="flex gap-4 items-start flex-1 min-w-0">
                    {/* Thumbnail Image */}
                    {article.image_url ? (
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-slate-200"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-400">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                    )}

                    {/* Content Meta */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => togglePublicationStatus(article)}
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

                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {pubDate}
                        </span>

                        <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded truncate max-w-[200px]">
                          /{article.slug}
                        </span>
                      </div>

                      <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{article.title}</h4>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {article.summary || article.content}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <button
                      onClick={() => setPreviewArticle(article)}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors inline-flex items-center gap-1"
                      title="Preview article"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>

                    <button
                      onClick={() => openEditModal(article)}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 transition-colors inline-flex items-center gap-1"
                      title="Edit article"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => setArticleToDelete(article)}
                      className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 hover:text-rose-700 transition-colors"
                      title="Delete article"
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

      {/* Add / Edit Article Modal */}
      {isModalOpen && editingArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <form onSubmit={handleSave}>
              {/* Header */}
              <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-sky-400 font-bold">
                    News Editor
                  </span>
                  <h3 className="text-base font-bold">
                    {editingArticle.id ? 'Edit Article' : 'Create New Announcement / News'}
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

              {/* Body */}
              <div className="p-6 space-y-4 text-xs text-slate-700 max-h-[75vh] overflow-y-auto">
                {formError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Title */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Article Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={editingArticle.title || ''}
                    onChange={(e) => {
                      const title = e.target.value;
                      const slug = title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/(^-|-$)+/g, '')
                        .slice(0, 80);
                      setEditingArticle({ ...editingArticle, title, slug: editingArticle.slug || slug });
                    }}
                    placeholder="e.g. GlobeLink Launches Free EJU Guidance Webinar"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Slug & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">URL Slug</label>
                    <input
                      type="text"
                      value={editingArticle.slug || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, slug: e.target.value })}
                      placeholder="e.g. eju-guidance-webinar"
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Publication Date
                    </label>
                    <input
                      type="date"
                      value={editingArticle.publication_date || ''}
                      onChange={(e) =>
                        setEditingArticle({ ...editingArticle, publication_date: e.target.value })
                      }
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Short Summary / Excerpt
                  </label>
                  <textarea
                    rows={2}
                    value={editingArticle.summary || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, summary: e.target.value })}
                    placeholder="A brief 1-2 sentence overview shown in article cards and search previews..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Article Full Content <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={editingArticle.content || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                    placeholder="Enter full article text, official announcements, seminar registration instructions, and details..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 font-sans leading-relaxed"
                  />
                </div>

                {/* Image URL & Live Preview */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Featured Image URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={editingArticle.image_url || ''}
                      onChange={(e) =>
                        setEditingArticle({ ...editingArticle, image_url: e.target.value })
                      }
                      placeholder="https://images.unsplash.com/..."
                      className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  {editingArticle.image_url && (
                    <div className="mt-2 relative rounded-lg overflow-hidden border border-slate-200 max-h-32">
                      <img
                        src={editingArticle.image_url}
                        alt="Preview"
                        className="w-full h-32 object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Publication Status Toggle */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Publication Status</span>
                    <span className="text-[11px] text-slate-500">
                      Published articles appear dynamically on the live GlobeLink website
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setEditingArticle({ ...editingArticle, publication_status: 'draft' })
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        editingArticle.publication_status === 'draft'
                          ? 'bg-slate-800 text-white shadow-xs'
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      Draft
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setEditingArticle({ ...editingArticle, publication_status: 'published' })
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        editingArticle.publication_status === 'published'
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
                  <span>{saving ? 'Saving...' : editingArticle.id ? 'Save Changes' : 'Create Article'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {articleToDelete && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-base text-slate-900">Delete News Article?</h4>
              <p className="text-xs text-slate-500 mt-1">
                Are you sure you want to delete <strong className="text-slate-800">"{articleToDelete.title}"</strong>? This will remove it from the CMS and public website.
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setArticleToDelete(null)}
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

      {/* Article Preview Modal */}
      {previewArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-sky-400 font-bold">
                  Article Preview
                </span>
                <h3 className="text-sm font-bold truncate max-w-sm">{previewArticle.title}</h3>
              </div>
              <button
                onClick={() => setPreviewArticle(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs text-slate-700">
              {previewArticle.image_url && (
                <img
                  src={previewArticle.image_url}
                  alt={previewArticle.title}
                  className="w-full h-48 object-cover rounded-xl border border-slate-200"
                />
              )}

              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span
                  className={`px-2 py-0.5 rounded-full font-semibold ${
                    previewArticle.publication_status === 'published'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {previewArticle.publication_status === 'published' ? 'Published' : 'Draft'}
                </span>
                <span>•</span>
                <span>{new Date(previewArticle.publication_date).toLocaleDateString('en-LK')}</span>
                <span>•</span>
                <span className="font-mono text-slate-400">/{previewArticle.slug}</span>
              </div>

              <h2 className="text-base font-bold text-slate-900 leading-snug">
                {previewArticle.title}
              </h2>

              {previewArticle.summary && (
                <p className="font-semibold text-slate-800 italic bg-slate-50 p-3 rounded-lg border-l-4 border-sky-500">
                  {previewArticle.summary}
                </p>
              )}

              <div className="text-slate-700 whitespace-pre-wrap leading-relaxed space-y-2">
                {previewArticle.content}
              </div>
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setPreviewArticle(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
