'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Users,
  Briefcase,
  Search,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Filter,
  Sparkles,
  Landmark,
  Compass,
  LayoutGrid,
  List,
  PhoneCall,
  Share2,
} from 'lucide-react';
import { electedOfficials, municipalDepartments } from '@/data/officials';
import { inabangaBarangays } from '@/data/barangays';

export default function GovernmentClient() {
  // Search states
  const [deptSearch, setDeptSearch] = useState('');
  const [sbSearch, setSbSearch] = useState('');
  const [brgySearch, setBrgySearch] = useState('');
  const [brgyType, setBrgyType] = useState<string>('all');
  const [brgyView, setBrgyView] = useState<'grid' | 'compact'>('grid');

  // Clipboard copy state
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(null), 2500);
    }
  };

  const mayor = electedOfficials.find((o) => o.id === 'mayor');
  const viceMayor = electedOfficials.find((o) => o.id === 'vice-mayor');
  const councilors = electedOfficials.filter((o) => o.role === 'legislative');

  // Filtered councilors
  const filteredCouncilors = useMemo(() => {
    if (!sbSearch.trim()) return councilors;
    const q = sbSearch.toLowerCase();
    return councilors.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.position.toLowerCase().includes(q) ||
        c.committee?.some((comm) => comm.toLowerCase().includes(q))
    );
  }, [councilors, sbSearch]);

  // Filtered departments
  const filteredDepts = useMemo(() => {
    if (!deptSearch.trim()) return municipalDepartments;
    const q = deptSearch.toLowerCase();
    return municipalDepartments.filter(
      (d) =>
        d.department.toLowerCase().includes(q) ||
        d.officer.toLowerCase().includes(q) ||
        d.designation.toLowerCase().includes(q) ||
        d.location.toLowerCase().includes(q) ||
        (d.notes && d.notes.toLowerCase().includes(q))
    );
  }, [deptSearch]);

  // Filtered barangays
  const filteredBrgys = useMemo(() => {
    return inabangaBarangays.filter((b) => {
      const matchSearch =
        !brgySearch.trim() ||
        b.name.toLowerCase().includes(brgySearch.toLowerCase()) ||
        b.features.some((f) => f.toLowerCase().includes(brgySearch.toLowerCase())) ||
        (b.captain && b.captain.toLowerCase().includes(brgySearch.toLowerCase()));

      const matchType = brgyType === 'all' || b.type === brgyType;

      return matchSearch && matchType;
    });
  }, [brgySearch, brgyType]);

  // Barangay counts per type
  const brgyCounts = useMemo(() => {
    return {
      all: inabangaBarangays.length,
      poblacion: inabangaBarangays.filter((b) => b.type === 'poblacion').length,
      coastal: inabangaBarangays.filter((b) => b.type === 'coastal').length,
      inland: inabangaBarangays.filter((b) => b.type === 'inland').length,
      island: inabangaBarangays.filter((b) => b.type === 'island').length,
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140; // account for fixed header + sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="space-y-10 py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* TOAST NOTIFICATION */}
      {copiedItem && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-bounce">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-white">Copied to clipboard!</p>
            <p className="text-slate-400 font-mono text-[11px]">{copiedItem}</p>
          </div>
        </div>
      )}

      {/* HERO BANNER - SHINE INABANGA */}
      <div className="relative overflow-hidden bg-gradient-to-br from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-inabanga-700/80">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-inabanga-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-inabanga-800/80 backdrop-blur border border-inabanga-600/60 text-amber-300 text-xs font-bold uppercase tracking-wider font-heading shadow-xs">
            <Landmark className="w-3.5 h-3.5 text-amber-400" />
            <span>Local Government Unit &bull; Term 2025–2028</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading leading-tight">
            Municipal Government of Inabanga
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-2xl">
            Directory of elected executive and legislative leaders, department offices, and 50 barangay units dedicated to transparent public service, participatory governance, and citizen empowerment in Inabanga, Bohol.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-left">
            <div className="bg-inabanga-900/80 backdrop-blur border border-inabanga-700/80 rounded-xl p-3">
              <div className="text-xl sm:text-2xl font-black text-amber-300 font-heading">2</div>
              <div className="text-[11px] text-emerald-200/80 uppercase font-semibold">Executive Leaders</div>
            </div>
            <div className="bg-inabanga-900/80 backdrop-blur border border-inabanga-700/80 rounded-xl p-3">
              <div className="text-xl sm:text-2xl font-black text-amber-300 font-heading">{councilors.length}</div>
              <div className="text-[11px] text-emerald-200/80 uppercase font-semibold">SB Councilors</div>
            </div>
            <div className="bg-inabanga-900/80 backdrop-blur border border-inabanga-700/80 rounded-xl p-3">
              <div className="text-xl sm:text-2xl font-black text-amber-300 font-heading">{municipalDepartments.length}</div>
              <div className="text-[11px] text-emerald-200/80 uppercase font-semibold">Key Departments</div>
            </div>
            <div className="bg-inabanga-900/80 backdrop-blur border border-inabanga-700/80 rounded-xl p-3">
              <div className="text-xl sm:text-2xl font-black text-amber-300 font-heading">50</div>
              <div className="text-[11px] text-emerald-200/80 uppercase font-semibold">Barangay Units</div>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY QUICK-ANCHOR NAVIGATION BAR */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md -mx-3 px-3 sm:mx-0 sm:px-0 py-2.5 border-y sm:border sm:rounded-2xl border-slate-200/90 shadow-sm transition-all">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar sm:px-3 text-xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden md:inline shrink-0 mr-1">
            Jump to:
          </span>
          <button
            onClick={() => scrollToSection('executive-section')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold font-heading whitespace-nowrap bg-slate-100 hover:bg-inabanga-50 text-slate-700 hover:text-inabanga-800 transition-all active:scale-95"
          >
            <Building2 className="w-3.5 h-3.5 text-inabanga-700" />
            <span>Executive</span>
          </button>
          <button
            onClick={() => scrollToSection('legislative-section')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold font-heading whitespace-nowrap bg-slate-100 hover:bg-inabanga-50 text-slate-700 hover:text-inabanga-800 transition-all active:scale-95"
          >
            <Users className="w-3.5 h-3.5 text-inabanga-700" />
            <span>Sangguniang Bayan ({councilors.length})</span>
          </button>
          <button
            onClick={() => scrollToSection('departments-section')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold font-heading whitespace-nowrap bg-slate-100 hover:bg-inabanga-50 text-slate-700 hover:text-inabanga-800 transition-all active:scale-95"
          >
            <Briefcase className="w-3.5 h-3.5 text-inabanga-700" />
            <span>Departments ({municipalDepartments.length})</span>
          </button>
          <button
            onClick={() => scrollToSection('barangays-section')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold font-heading whitespace-nowrap bg-slate-100 hover:bg-inabanga-50 text-slate-700 hover:text-inabanga-800 transition-all active:scale-95"
          >
            <MapPin className="w-3.5 h-3.5 text-inabanga-700" />
            <span>50 Barangays</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: EXECUTIVE BRANCH */}
      <section id="executive-section" className="space-y-6 scroll-mt-36">
        <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-inabanga-100 text-inabanga-800 flex items-center justify-center font-bold">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                The Executive Leadership
              </h2>
              <p className="text-xs text-slate-500">
                Primary municipal executive authorities for the 2025–2028 term
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">
            Office of the Mayor &bull; Office of the Vice Mayor
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* MAYOR CARD */}
          {mayor && (
            <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-inabanga-300 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-inabanga-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-inabanga-100 text-inabanga-900 font-heading">
                      <ShieldCheck className="w-3.5 h-3.5 text-inabanga-700" />
                      Municipal Mayor
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-2">
                      {mayor.name}
                    </h3>
                    <p className="text-xs text-amber-700 font-bold mt-0.5">Term: {mayor.term}</p>
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-inabanga-800 to-inabanga-950 text-amber-300 font-black text-xl flex items-center justify-center font-heading shadow-md shrink-0">
                    MA
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {mayor.bio}
                </p>

                {/* Contact List */}
                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Phone className="w-4 h-4 text-inabanga-700 shrink-0" />
                      <span className="truncate font-medium">{mayor.contact}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`tel:${mayor.contact?.replace(/[^0-9+]/g, '')}`}
                        className="px-2.5 py-1 rounded-lg bg-inabanga-50 hover:bg-inabanga-100 text-inabanga-800 font-bold text-[11px] transition-colors inline-flex items-center gap-1"
                        title="Call Office"
                      >
                        <PhoneCall className="w-3 h-3" />
                        Call
                      </a>
                      <button
                        onClick={() => copyToClipboard(mayor.contact || '', 'Mayor Contact')}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        title="Copy Number"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Mail className="w-4 h-4 text-inabanga-700 shrink-0" />
                      <span className="truncate font-medium">{mayor.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`mailto:${mayor.email}`}
                        className="px-2.5 py-1 rounded-lg bg-inabanga-50 hover:bg-inabanga-100 text-inabanga-800 font-bold text-[11px] transition-colors inline-flex items-center gap-1"
                        title="Send Email"
                      >
                        <Mail className="w-3 h-3" />
                        Email
                      </a>
                      <button
                        onClick={() => copyToClipboard(mayor.email || '', 'Mayor Email')}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        title="Copy Email"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2 rounded-xl text-slate-600">
                    <MapPin className="w-4 h-4 text-inabanga-700 shrink-0 mt-0.5" />
                    <span className="text-xs leading-normal">
                      Office of the Mayor, 2nd Floor Municipal Hall, Poblacion, Inabanga, Bohol
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Primary Executive Authority</span>
                <span className="font-semibold text-inabanga-700">General Supervision</span>
              </div>
            </div>
          )}

          {/* VICE MAYOR CARD */}
          {viceMayor && (
            <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-inabanga-300 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/60 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-heading">
                      <Landmark className="w-3.5 h-3.5 text-slate-700" />
                      Municipal Vice Mayor
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-2">
                      {viceMayor.name}
                    </h3>
                    <p className="text-xs text-amber-700 font-bold mt-0.5">Term: {viceMayor.term}</p>
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 text-amber-300 font-black text-xl flex items-center justify-center font-heading shadow-md shrink-0">
                    VM
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {viceMayor.bio}
                </p>

                {/* Contact List */}
                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Phone className="w-4 h-4 text-slate-700 shrink-0" />
                      <span className="truncate font-medium">{viceMayor.contact}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`tel:${viceMayor.contact?.replace(/[^0-9+]/g, '')}`}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] transition-colors inline-flex items-center gap-1"
                        title="Call Office"
                      >
                        <PhoneCall className="w-3 h-3" />
                        Call
                      </a>
                      <button
                        onClick={() => copyToClipboard(viceMayor.contact || '', 'Vice Mayor Contact')}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        title="Copy Number"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Mail className="w-4 h-4 text-slate-700 shrink-0" />
                      <span className="truncate font-medium">{viceMayor.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`mailto:${viceMayor.email}`}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] transition-colors inline-flex items-center gap-1"
                        title="Send Email"
                      >
                        <Mail className="w-3 h-3" />
                        Email
                      </a>
                      <button
                        onClick={() => copyToClipboard(viceMayor.email || '', 'Vice Mayor Email')}
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        title="Copy Email"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2 rounded-xl text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                    <span className="text-xs leading-normal">
                      Office of the Vice Mayor &amp; Sangguniang Bayan Session Hall, Inabanga
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Presiding Officer</span>
                <span className="font-semibold text-slate-700">Local Legislation</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: LEGISLATIVE BRANCH (SANGGUNIANG BAYAN) */}
      <section id="legislative-section" className="space-y-6 scroll-mt-36">
        <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                Sangguniang Bayan Members
              </h2>
              <p className="text-xs text-slate-500">
                Elected municipal legislators (Term 2025–2028) &amp; committee leaders
              </p>
            </div>
          </div>

          {/* Search box for councilors */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search councilor or committee..."
              value={sbSearch}
              onChange={(e) => setSbSearch(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-inabanga-700 transition-all text-slate-900 placeholder:text-slate-400"
            />
            {sbSearch && (
              <button
                onClick={() => setSbSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Councilors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredCouncilors.map((c, index) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-inabanga-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 group hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider font-heading">
                      Councilor #{index + 1}
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-inabanga-800 transition-colors font-heading mt-0.5">
                      {c.name}
                    </h4>
                  </div>
                </div>

                <div className="text-xs font-semibold text-inabanga-800 bg-inabanga-50/80 px-2.5 py-1 rounded-lg inline-block">
                  {c.position}
                </div>

                <div className="text-[11px] text-slate-400 font-medium">Term: {c.term}</div>

                {c.committee && (
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                      Key Committees
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.committee.map((comm, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] leading-tight text-slate-700 bg-slate-100 hover:bg-amber-100/60 transition-colors px-2 py-1 rounded-md"
                        >
                          {comm}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                <span>SB Inabanga, Bohol</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active in Session" />
              </div>
            </div>
          ))}

          {filteredCouncilors.length === 0 && (
            <div className="col-span-full bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-2">
              <p className="text-slate-600 text-sm font-medium">No councilors match &ldquo;{sbSearch}&rdquo;.</p>
              <button
                onClick={() => setSbSearch('')}
                className="text-xs text-inabanga-700 font-bold hover:underline"
              >
                Clear search filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: MUNICIPAL DEPARTMENT HEADS */}
      <section id="departments-section" className="space-y-6 scroll-mt-36">
        <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                Municipal Department Heads &amp; Key Offices
              </h2>
              <p className="text-xs text-slate-500">
                Frontline department heads, public health, disaster dispatch, civil registry, treasury, and planning
              </p>
            </div>
          </div>

          {/* Search box for departments */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search officer, office or service..."
              value={deptSearch}
              onChange={(e) => setDeptSearch(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-inabanga-700 transition-all text-slate-900 placeholder:text-slate-400"
            />
            {deptSearch && (
              <button
                onClick={() => setDeptSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Official Trunkline & Routing Notice */}
        <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-950">
          <Building2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Official Municipal Directory Notice:</p>
            <p className="text-slate-700 leading-relaxed text-[11px] sm:text-xs">
              Offices within the Inabanga Municipal Hall (Treasury, Civil Registrar, Assessor, MPDO, MSWDO, Agriculture, Engineering) share the official Telefax &amp; Municipal Trunkline: <strong className="font-mono text-slate-900">(038) 512 9088</strong> and central official registry: <strong className="font-mono text-slate-900">icons@inabanga.gov.ph</strong>. Dedicated emergency offices (MDRRMO, Health) have direct 24/7 hotlines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDepts.map((dept, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-inabanga-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-black text-slate-900 text-sm sm:text-base font-heading">
                    {dept.department}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0">
                    LGU Office
                  </span>
                </div>

                {/* Officer Name & Designation */}
                <div className="mt-2 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-900 font-extrabold font-heading">
                    <Users className="w-3.5 h-3.5 text-inabanga-700 shrink-0" />
                    <span>{dept.officer}</span>
                  </div>
                  <div className="text-[11px] text-inabanga-800 font-semibold pl-5">
                    {dept.designation}
                  </div>
                </div>

                {dept.notes && (
                  <p className="text-[11px] text-slate-500 mt-2 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                    {dept.notes}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                {/* Landline / Trunkline */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <Phone className="w-3.5 h-3.5 text-inabanga-700 shrink-0" />
                    <span className="font-mono text-[11px] sm:text-xs">
                      {dept.phone} {dept.phone === '(038) 512 9088' ? '(Telefax / Trunkline)' : ''}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={`tel:${dept.phone.replace(/[^0-9+]/g, '')}`}
                      className="px-2 py-0.5 rounded bg-slate-100 hover:bg-inabanga-100 text-inabanga-800 font-semibold text-[11px] transition-colors"
                    >
                      Call
                    </a>
                    <button
                      onClick={() => copyToClipboard(dept.phone, `${dept.department} Phone`)}
                      className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                      title="Copy phone"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Direct Mobile (if present) */}
                {dept.mobile && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate">
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-mono text-[11px] sm:text-xs text-emerald-700 font-semibold">
                        {dept.mobile} (Direct Mobile)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`tel:${dept.mobile.replace(/[^0-9+]/g, '')}`}
                        className="px-2 py-0.5 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-[11px] transition-colors"
                      >
                        Call
                      </a>
                      <button
                        onClick={() => copyToClipboard(dept.mobile || '', `${dept.department} Mobile`)}
                        className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                        title="Copy mobile"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Email */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-inabanga-700 shrink-0" />
                    <span className="truncate text-[11px] sm:text-xs font-mono">{dept.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={`mailto:${dept.email}?subject=${encodeURIComponent(`Inquiry for ${dept.department}`)}`}
                      className="px-2 py-0.5 rounded bg-slate-100 hover:bg-inabanga-100 text-inabanga-800 font-semibold text-[11px] transition-colors"
                    >
                      Email
                    </a>
                    <button
                      onClick={() => copyToClipboard(dept.email, `${dept.department} Email`)}
                      className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                      title="Copy email"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-slate-500 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-[11px]">{dept.location}</span>
                </div>
              </div>
            </div>
          ))}

          {filteredDepts.length === 0 && (
            <div className="col-span-full bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-2">
              <p className="text-slate-600 text-sm font-medium">No municipal department matches &ldquo;{deptSearch}&rdquo;.</p>
              <button
                onClick={() => setDeptSearch('')}
                className="text-xs text-inabanga-700 font-bold hover:underline"
              >
                Clear department search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: BARANGAY UNITS OF INABANGA */}
      <section id="barangays-section" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-inabanga-900 text-white text-xs font-bold font-heading">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>50 Barangay Units of Inabanga</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
              Community Directory &amp; Barangay Units
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Explore all 50 barangays across Poblacion, Coastal, Inland, and Island Sanctuaries.
            </p>
          </div>

          {/* Full Page Link & View Toggle */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1">
              <button
                onClick={() => setBrgyView('grid')}
                className={`p-1.5 rounded-lg transition-all ${
                  brgyView === 'grid'
                    ? 'bg-white shadow-xs text-inabanga-800'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setBrgyView('compact')}
                className={`p-1.5 rounded-lg transition-all ${
                  brgyView === 'compact'
                    ? 'bg-white shadow-xs text-inabanga-800'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Compact List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/barangays"
              className="inline-flex items-center gap-1.5 text-xs font-bold font-heading text-inabanga-800 bg-inabanga-50 hover:bg-inabanga-100 px-3.5 py-2 rounded-xl border border-inabanga-200 transition-all hover:gap-2"
            >
              <span>Full Explorer</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Barangay Controls: Search & Category Tabs */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by name, features, or livelihood (e.g. Lawis, Weaving, Cuaming, Mangrove)..."
              value={brgySearch}
              onChange={(e) => setBrgySearch(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-inabanga-700 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
            />
            {brgySearch && (
              <button
                onClick={() => setBrgySearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            {[
              { id: 'all', label: `All (${brgyCounts.all})` },
              { id: 'poblacion', label: `Poblacion (${brgyCounts.poblacion})` },
              { id: 'coastal', label: `Coastal (${brgyCounts.coastal})` },
              { id: 'inland', label: `Inland (${brgyCounts.inland})` },
              { id: 'island', label: `Island (${brgyCounts.island})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setBrgyType(tab.id)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-bold font-heading transition-all ${
                  brgyType === tab.id
                    ? 'bg-inabanga-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID VIEW */}
        {brgyView === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredBrgys.map((brgy) => (
              <div
                key={brgy.id}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs hover:border-inabanga-400 hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1.5 text-slate-900 font-extrabold text-sm font-heading group-hover:text-inabanga-800 transition-colors">
                      <MapPin className="w-4 h-4 text-inabanga-700 shrink-0" />
                      <span>{brgy.name}</span>
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        brgy.type === 'island'
                          ? 'bg-sky-100 text-sky-800'
                          : brgy.type === 'coastal'
                          ? 'bg-emerald-100 text-emerald-800'
                          : brgy.type === 'poblacion'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {brgy.type}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium">
                    {brgy.captain ? `Kap. ${brgy.captain}` : 'Office of the Punong Barangay'}
                  </p>

                  {/* Highlights / Features */}
                  {brgy.features && brgy.features.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {brgy.features.slice(0, 2).map((f, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>
                    {brgy.distanceKm === 0 ? 'Center' : `${brgy.distanceKm} km to town`}
                  </span>
                  <button
                    onClick={() => copyToClipboard(brgy.contact || '(038) 510-8164', `${brgy.name} Contact`)}
                    className="p-1 hover:text-slate-700 transition-colors"
                    title="Copy emergency hotline"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* COMPACT LIST VIEW */}
        {brgyView === 'compact' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="divide-y divide-slate-100">
              {filteredBrgys.map((brgy, idx) => (
                <div
                  key={brgy.id}
                  className="p-3.5 sm:px-5 sm:py-3 hover:bg-slate-50 transition-colors flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 w-5 text-right shrink-0">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 font-heading truncate">
                          {brgy.name}
                        </span>
                        <span
                          className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded shrink-0 ${
                            brgy.type === 'island'
                              ? 'bg-sky-100 text-sky-800'
                              : brgy.type === 'coastal'
                              ? 'bg-emerald-100 text-emerald-800'
                              : brgy.type === 'poblacion'
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {brgy.type}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5">
                        {brgy.features.join(' • ')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 text-right">
                    <span className="text-[11px] text-slate-400 hidden sm:inline">
                      {brgy.distanceKm === 0 ? 'Poblacion' : `${brgy.distanceKm} km`}
                    </span>
                    <button
                      onClick={() => copyToClipboard(brgy.contact || '(038) 510-8164', `${brgy.name} Hotline`)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                      title="Copy hotline"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredBrgys.length === 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-2">
            <p className="text-slate-600 text-sm font-medium">
              No barangay matches &ldquo;{brgySearch}&rdquo; in this category.
            </p>
            <button
              onClick={() => {
                setBrgySearch('');
                setBrgyType('all');
              }}
              className="text-xs text-inabanga-700 font-bold hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
