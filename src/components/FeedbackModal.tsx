'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  MessageSquare,
  AlertTriangle,
  Copy,
  Check,
  Download,
  Mail,
  FileText,
  History,
} from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SubmittedReport {
  id: string;
  date: string;
  name: string;
  contact: string;
  barangay: string;
  category: string;
  message: string;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [submittedReport, setSubmittedReport] = useState<SubmittedReport | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'history'>('form');
  const [pastReports, setPastReports] = useState<SubmittedReport[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    barangay: 'Poblacion Centro',
    category: 'Public Service Suggestion',
    message: '',
  });

  // Body scroll lock and escape key handler
  useEffect(() => {
    if (!isOpen) return;

    // Load past reports from localStorage
    try {
      const stored = localStorage.getItem('betterinabanga_reports');
      if (stored) {
        setPastReports(JSON.parse(stored));
      }
    } catch {
      // Ignore localStorage errors
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReport: SubmittedReport = {
      id: `INAB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleString('en-PH', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      name: formData.name.trim() || 'Anonymous Citizen',
      contact: formData.emailOrPhone.trim() || 'Not provided',
      barangay: formData.barangay,
      category: formData.category,
      message: formData.message.trim(),
    };

    // Save to local state and localStorage
    const updated = [newReport, ...pastReports];
    setPastReports(updated);
    try {
      localStorage.setItem('betterinabanga_reports', JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }

    setSubmittedReport(newReport);
  };

  const handleCopyReference = () => {
    if (!submittedReport) return;
    navigator.clipboard.writeText(
      `BetterInabanga Public Report\nReference: ${submittedReport.id}\nCategory: ${submittedReport.category}\nDate: ${submittedReport.date}\nBarangay: ${submittedReport.barangay}\nDetails: ${submittedReport.message}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadReceipt = () => {
    if (!submittedReport) return;
    const content = `=========================================
BETTERINABANGA.ORG - CITIZEN REPORT RECEIPT
=========================================
Reference ID: ${submittedReport.id}
Date Filed  : ${submittedReport.date}
Citizen     : ${submittedReport.name}
Contact     : ${submittedReport.contact}
Barangay    : ${submittedReport.barangay}
Topic       : ${submittedReport.category}
-----------------------------------------
Report Message:
${submittedReport.message}
=========================================
Status: Logged to Inabanga Open Records
Official LGU Hotline: (038) 510-8164 / (038) 512-9039
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Report-${submittedReport.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleEmailDispatch = () => {
    if (!submittedReport) return;
    const subject = encodeURIComponent(
      `[Citizen Report ${submittedReport.id}] ${submittedReport.category}`
    );
    const body = encodeURIComponent(
      `Hello LGU Inabanga Administration,\n\nI am submitting this report via BetterInabanga.org:\n\nReference ID: ${submittedReport.id}\nDate: ${submittedReport.date}\nCitizen: ${submittedReport.name} (${submittedReport.contact})\nBarangay: ${submittedReport.barangay}\nTopic: ${submittedReport.category}\n\nMessage:\n${submittedReport.message}\n\nThank you.`
    );
    window.open(`mailto:info@inabanga.gov.ph?subject=${subject}&body=${body}`, '_blank');
  };

  const handleReset = () => {
    setSubmittedReport(null);
    setFormData({
      name: '',
      emailOrPhone: '',
      barangay: 'Poblacion Centro',
      category: 'Public Service Suggestion',
      message: '',
    });
  };

  return (
    <div
      className="fixed inset-0 z-[99999] overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-150 my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white p-6 flex justify-between items-start border-b border-inabanga-700">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-xl bg-inabanga-700 text-amber-300">
                <MessageSquare className="w-5 h-5" />
              </span>
              <h3 className="font-bold text-lg text-white font-heading">
                Citizen Feedback &amp; Public Inquiries
              </h3>
            </div>
            <p className="text-xs text-emerald-100/80 mt-1">
              Submit your concern, suggestion, or public inquiry for the Municipality of Inabanga.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch if past reports exist */}
        {pastReports.length > 0 && !submittedReport && (
          <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold font-heading">
            <button
              onClick={() => setActiveTab('form')}
              className={`flex-1 py-3 text-center border-b-2 transition-all ${
                activeTab === 'form'
                  ? 'border-inabanga-700 text-inabanga-900 bg-white font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              New Report / Inquiry
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'history'
                  ? 'border-inabanga-700 text-inabanga-900 bg-white font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Your Filed Reports ({pastReports.length})</span>
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          {/* STATE 1: Success / Submission details */}
          {submittedReport ? (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-900 text-xl font-heading">
                  Report Successfully Filed &amp; Logged!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your public inquiry has been given an official tracking reference and saved to your device.
                </p>
              </div>

              {/* Reference Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Tracking Reference Number</span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-xs font-mono">
                    {submittedReport.id}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Topic</span>
                    <strong className="text-slate-800">{submittedReport.category}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Date Filed</span>
                    <strong className="text-slate-800">{submittedReport.date}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Barangay</span>
                    <strong className="text-slate-800">{submittedReport.barangay}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Citizen</span>
                    <strong className="text-slate-800">{submittedReport.name}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={handleCopyReference}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500" />
                        <span>Copy Reference Info</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleDownloadReceipt}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all"
                  >
                    <Download className="w-4 h-4 text-slate-500" />
                    <span>Download Receipt (.txt)</span>
                  </button>
                </div>

                <button
                  onClick={handleEmailDispatch}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-inabanga-800 hover:bg-inabanga-900 text-white text-xs font-bold transition-all shadow-md font-heading"
                >
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span>Send Pre-Filled Email to LGU (info@inabanga.gov.ph)</span>
                </button>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs">
                <button
                  onClick={handleReset}
                  className="text-inabanga-800 hover:underline font-semibold"
                >
                  &larr; File Another Inquiry
                </button>

                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold"
                >
                  Done
                </button>
              </div>
            </div>
          ) : activeTab === 'history' ? (
            /* STATE 2: Past Reports History */
            <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
              <div className="text-xs text-slate-500">
                These reports are securely stored in your local browser storage:
              </div>
              {pastReports.map((r) => (
                <div
                  key={r.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 font-mono">{r.id}</span>
                    <span className="text-[10px] text-slate-400">{r.date}</span>
                  </div>
                  <div className="text-slate-600 font-medium">{r.category} &bull; {r.barangay}</div>
                  <p className="text-slate-700 bg-white p-2.5 rounded-xl border border-slate-100">
                    {r.message}
                  </p>
                </div>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('form')}
                  className="w-full py-2.5 bg-inabanga-800 text-white text-xs font-bold rounded-xl font-heading"
                >
                  File a New Report
                </button>
              </div>
            </div>
          ) : (
            /* STATE 3: Active Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-heading">
                    Full Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Juan dela Cruz"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-inabanga-500 focus:border-inabanga-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-heading">
                    Mobile Number / Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 0917-xxx-xxxx or email"
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-inabanga-500 focus:border-inabanga-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-heading">
                    Your Barangay
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Poblacion Centro, Lawis, etc."
                    value={formData.barangay}
                    onChange={(e) => setFormData({ ...formData, barangay: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-inabanga-500 focus:border-inabanga-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-heading">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-inabanga-500 focus:border-inabanga-500 outline-none bg-white font-medium"
                  >
                    <option value="Public Service Suggestion">Public Service Suggestion</option>
                    <option value="Citizen Charter Inquiry">Citizen Charter / Permits</option>
                    <option value="Public Record Request">Public Record / Budget Request</option>
                    <option value="Community Concern">Community Concern / Report</option>
                    <option value="Commendation">Public Worker Commendation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 font-heading">
                  Message Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your inquiry, suggestion, or community concern in detail..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-inabanga-500 focus:border-inabanga-500 outline-none resize-none"
                ></textarea>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-800 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  For immediate life-threatening emergencies, please call the <strong>MDRRMO</strong> at <a href="tel:09178906442" className="underline font-bold">0917-890-6442</a> or Police at <a href="tel:09985986423" className="underline font-bold">(038) 512-9039</a> directly.
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors font-heading"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold bg-inabanga-800 hover:bg-inabanga-900 text-white rounded-xl shadow-md transition-all font-heading"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
