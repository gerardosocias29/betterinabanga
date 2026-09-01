'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  PhoneCall,
  FileText,
  PieChart,
  MapPin,
  Flame,
  Siren,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  Coins,
  CheckCircle,
  Clock,
  Sparkles,
  Sun,
  Users,
  Compass,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import { emergencyHotlines } from '@/data/hotlines';
import { electedOfficials } from '@/data/officials';
import { citizenServices } from '@/data/services';
import { municipalBudget2025, priorityProjects2025 } from '@/data/transparency';
import FeedbackModal from '@/components/FeedbackModal';
import WeatherAndMap from '@/components/WeatherAndMap';
import HistorySection from '@/components/HistorySection';
import { useRouter } from 'next/navigation';
import { inabangaBarangays } from '@/data/barangays';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const router = useRouter();

  // Multi-category search matching across services, barangays, and emergency hotlines
  const queryLower = searchQuery.toLowerCase().trim();

  const matchingServices = queryLower
    ? citizenServices.filter(
        (s) =>
          s.title.toLowerCase().includes(queryLower) ||
          s.description.toLowerCase().includes(queryLower) ||
          s.office.toLowerCase().includes(queryLower) ||
          s.category.toLowerCase().includes(queryLower)
      ).slice(0, 4)
    : [];

  const matchingBarangays = queryLower
    ? inabangaBarangays.filter(
        (b) =>
          b.name.toLowerCase().includes(queryLower) ||
          b.features.some((f) => f.toLowerCase().includes(queryLower))
      ).slice(0, 3)
    : [];

  const matchingHotlines = queryLower
    ? emergencyHotlines.filter(
        (h) =>
          h.name.toLowerCase().includes(queryLower) ||
          h.category.toLowerCase().includes(queryLower)
      ).slice(0, 2)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const mayor = electedOfficials.find((o) => o.id === 'mayor');
  const viceMayor = electedOfficials.find((o) => o.id === 'vice-mayor');
  const councilors = electedOfficials.filter((o) => o.role === 'legislative');

  return (
    <div className="space-y-16 pb-20 font-sans">
      {/* HERO SECTION - SHINE INABANGA THEME */}
      <section className="relative overflow-hidden bg-gradient-to-b from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white pt-10 pb-24 md:pt-16 md:pb-32 px-4 sm:px-6 lg:px-8 border-b border-inabanga-800">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-10 -left-20 w-96 h-96 bg-inabanga-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Official BetterInabanga Map Emblem & Municipal Seal */}
          <div className="flex flex-col items-center justify-center gap-3 mb-6">
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/better_inabanga_logo.png"
                  alt="BetterInabanga Map & Sun Emblem"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/inabanga_logo.png"
                  alt="Official Seal of Inabanga, Bohol"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-emerald-100 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span className="font-extrabold text-amber-300 uppercase tracking-wider font-heading">
                Municipality of Inabanga, Bohol
              </span>
              <span className="text-white/40">&bull;</span>
              <span className="text-emerald-100 font-medium">Public Transparency Portal</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance leading-none mb-6 font-heading">
            Public Transparency &amp; Citizen Services for{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-300 bg-clip-text text-transparent">
              Inabanga
            </span>
          </h1>

          <p className="text-base sm:text-xl text-emerald-100/90 max-w-3xl mx-auto font-normal leading-relaxed mb-10 text-balance">
            Your open digital gateway to local government services, 2025–2028 municipal leadership, full disclosure budgets, infrastructure trackers, and 24/7 emergency hotlines.
          </p>

          {/* Hero Search Box - Fully Functional */}
          <div className="max-w-2xl mx-auto relative mb-12">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center shadow-2xl rounded-2xl overflow-hidden bg-white/95 backdrop-blur-md border border-white/40 p-2"
            >
              <Search className="w-6 h-6 text-inabanga-700 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search citizen services, business permits, hotlines, or barangays..."
                className="w-full px-4 py-3 text-slate-800 placeholder-slate-400 text-sm md:text-base outline-none bg-transparent"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-600 px-3 py-1 mr-1"
                >
                  Clear
                </button>
              )}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-inabanga-800 hover:bg-inabanga-900 text-white font-bold text-sm rounded-xl transition-all shadow-md shrink-0 font-heading"
              >
                Search
              </button>
            </form>

            {searchQuery.trim() && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 p-3 z-30 text-left max-h-80 overflow-y-auto space-y-3">
                {/* Services Section */}
                {matchingServices.length > 0 && (
                  <div>
                    <div className="text-[11px] font-bold text-inabanga-800 px-3 py-1 uppercase font-heading flex items-center justify-between">
                      <span>Citizen Services ({matchingServices.length})</span>
                      <span className="text-[10px] text-slate-400 font-normal">Click to open &amp; view requirements</span>
                    </div>
                    {matchingServices.map((svc) => (
                      <Link
                        key={svc.id}
                        href={`/services?id=${svc.id}#${svc.id}`}
                        onClick={() => setSearchQuery('')}
                        className="block px-3 py-2 hover:bg-inabanga-50 rounded-xl text-sm transition-colors group"
                      >
                        <div className="font-bold text-slate-900 font-heading group-hover:text-inabanga-800 flex items-center justify-between">
                          <span>{svc.title}</span>
                          <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-inabanga-100 text-inabanga-800">
                            {svc.category.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{svc.office} &bull; {svc.fees}</div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Barangays Section */}
                {matchingBarangays.length > 0 && (
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-teal-800 px-3 py-1 uppercase font-heading flex items-center justify-between">
                      <span>Barangays ({matchingBarangays.length})</span>
                      <span className="text-[10px] text-slate-400 font-normal">Click to view directory</span>
                    </div>
                    {matchingBarangays.map((b) => (
                      <Link
                        key={b.id}
                        href="/barangays"
                        onClick={() => setSearchQuery('')}
                        className="block px-3 py-2 hover:bg-teal-50 rounded-xl text-sm transition-colors group"
                      >
                        <div className="font-bold text-slate-900 font-heading flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-teal-700" />
                          <span>{b.name}</span>
                          <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 ml-auto">
                            {b.type}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {b.distanceKm === 0 ? 'Poblacion Proper' : `${b.distanceKm} km from Poblacion`} &bull; {b.features.slice(0, 2).join(', ')}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Hotlines Section */}
                {matchingHotlines.length > 0 && (
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-rose-700 px-3 py-1 uppercase font-heading">
                      Emergency Hotlines ({matchingHotlines.length})
                    </div>
                    {matchingHotlines.map((h) => (
                      <a
                        key={h.id}
                        href={`tel:${h.number.replace(/[^0-9]/g, '')}`}
                        className="block px-3 py-2 hover:bg-rose-50 rounded-xl text-sm transition-colors group"
                      >
                        <div className="font-bold text-slate-900 font-heading flex items-center justify-between">
                          <span>{h.name}</span>
                          <span className="text-xs font-mono font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-md">
                            {h.number}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{h.available}</div>
                      </a>
                    ))}
                  </div>
                )}

                {/* No Matches Found */}
                {matchingServices.length === 0 && matchingBarangays.length === 0 && matchingHotlines.length === 0 && (
                  <div className="px-3 py-4 text-center text-sm text-slate-500">
                    <p className="font-semibold text-slate-700">No direct matches for &quot;{searchQuery}&quot;</p>
                    <p className="text-xs text-slate-400 mt-1">Press Enter or click Search to browse the full citizen services directory.</p>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 text-center">
                  <Link
                    href={`/services?q=${encodeURIComponent(searchQuery)}`}
                    onClick={() => setSearchQuery('')}
                    className="text-xs font-bold text-inabanga-700 hover:text-inabanga-900 hover:underline font-heading"
                  >
                    View all results in Citizen Services &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Key Metrics / Highlights Bar - No Overlap, Balanced Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl xl:max-w-7xl mx-auto pt-4 text-left">
            {/* Card 1: Barangays */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-white/80 hover:scale-[1.02] transition-transform flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-inabanga-50 text-inabanga-800 flex items-center justify-center shadow-xs border border-inabanga-100 shrink-0">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-inabanga-700" />
              </div>
              <div className="min-w-0 flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl lg:text-3xl font-black text-inabanga-900 font-heading leading-none">50</span>
                <span className="text-[11px] sm:text-xs text-slate-700 font-bold uppercase tracking-wide font-heading pt-1.5 leading-tight">
                  Barangays Connected
                </span>
              </div>
            </div>

            {/* Card 2: Annual Budget */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-white/80 hover:scale-[1.02] transition-transform flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center shadow-xs border border-amber-100 shrink-0">
                <Coins className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" />
              </div>
              <div className="min-w-0 flex flex-col justify-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-inabanga-900 font-heading whitespace-nowrap leading-none">₱248.6M</span>
                <span className="text-[11px] sm:text-xs text-slate-700 font-bold uppercase tracking-wide font-heading pt-1.5 leading-tight">
                  Annual Budget Disclosed
                </span>
              </div>
            </div>

            {/* Card 3: Emergency Dispatch */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-white/80 hover:scale-[1.02] transition-transform flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center shadow-xs border border-rose-100 shrink-0">
                <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-rose-600" />
              </div>
              <div className="min-w-0 flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl lg:text-3xl font-black text-rose-600 font-heading whitespace-nowrap leading-none">24 / 7</span>
                <span className="text-[11px] sm:text-xs text-slate-700 font-bold uppercase tracking-wide font-heading pt-1.5 leading-tight">
                  Emergency Dispatch
                </span>
              </div>
            </div>

            {/* Card 4: Public Open Data */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-white/80 hover:scale-[1.02] transition-transform flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shadow-xs border border-emerald-100 shrink-0">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
              </div>
              <div className="min-w-0 flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl lg:text-3xl font-black text-inabanga-900 font-heading leading-none">100%</span>
                <span className="text-[11px] sm:text-xs text-slate-700 font-bold uppercase tracking-wide font-heading pt-1.5 leading-tight">
                  Public Open Data
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK EMERGENCY DISPATCH SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider font-heading">
                <ShieldAlert className="w-4 h-4" />
                <span>Instant Emergency Help &bull; Inabanga, Bohol</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mt-1 font-heading">
                Emergency Hotlines &amp; Fast Response
              </h2>
            </div>
            <Link
              href="/contact#hotlines"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-inabanga-700 hover:text-inabanga-900 font-heading"
            >
              <span>View full directory of hotlines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* MDRRMO */}
            <div className="rounded-2xl p-5 bg-amber-50/70 border border-amber-200 hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-xl bg-amber-500 text-white">
                    <ShieldAlert className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-heading">
                    24/7 DISASTER
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">MDRRMO Inabanga</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Typhoon, flooding, medical emergency, search &amp; rescue.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-200/60">
                <a
                  href="tel:09178906442"
                  className="block w-full text-center py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors shadow-xs font-heading"
                >
                  Call 0917-890-6442
                </a>
              </div>
            </div>

            {/* PNP */}
            <div className="rounded-2xl p-5 bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-xl bg-inabanga-800 text-white">
                    <Siren className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-heading">
                    POLICE
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">Municipal Police (PNP)</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Peace &amp; order, law enforcement, crime incident reports.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-200/60">
                <a
                  href="tel:0385129039"
                  className="block w-full text-center py-2.5 px-3 rounded-xl bg-inabanga-800 hover:bg-inabanga-900 text-white font-bold text-xs transition-colors shadow-xs font-heading"
                >
                  Call (038) 512-9039
                </a>
              </div>
            </div>

            {/* BFP */}
            <div className="rounded-2xl p-5 bg-rose-50/70 border border-rose-200 hover:border-rose-400 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-xl bg-rose-600 text-white">
                    <Flame className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-200 text-rose-900 font-heading">
                    FIRE STATION
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">Inabanga Fire Station</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Fire emergencies, hazmat, fire safety clearance inspection.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-rose-200/60">
                <a
                  href="tel:09275281232"
                  className="block w-full text-center py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors shadow-xs font-heading"
                >
                  Call 0927-528-1232
                </a>
              </div>
            </div>

            {/* TaRSIER 117 */}
            <div className="rounded-2xl p-5 bg-sky-50/70 border border-sky-200 hover:border-sky-400 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-xl bg-sky-600 text-white">
                    <PhoneCall className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-200 text-sky-900 font-heading">
                    BOHOL 117
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">TaRSIER 117 Bohol</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Integrated provincial ambulance, trauma &amp; multi-agency response.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sky-200/60">
                <a
                  href="tel:117"
                  className="block w-full text-center py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shadow-xs font-heading"
                >
                  Dial 117 (Landline)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEATHER AND MAP OF INABANGA */}
      <WeatherAndMap />

      {/* CITIZEN SERVICES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-inabanga-800 font-extrabold text-xs uppercase tracking-widest font-heading">
            Citizen&apos;s Charter
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 font-heading">
            Essential Municipal Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Clear guidelines on documentary requirements, statutory processing periods, official fees, and responsible municipal offices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {citizenServices.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-inabanga-400 hover:shadow-xl transition-all p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-inabanga-50 text-inabanga-900 border border-inabanga-200 font-heading">
                    {service.category.replace('-', ' ')}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-inabanga-600" />
                    {service.processingTime}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg group-hover:text-inabanga-800 transition-colors font-heading">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <div>
                    <span className="font-bold text-slate-700">Office:</span> {service.office}
                  </div>
                  <div>
                    <span className="font-bold text-slate-700">Fees:</span> {service.fees}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services#${service.id}`}
                  className="text-xs font-bold text-inabanga-800 group-hover:text-inabanga-900 inline-flex items-center gap-1 font-heading"
                >
                  <span>View Step-by-Step Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-amber-500" />
                </Link>
                {service.isOnlineAvailable && (
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md font-heading">
                    e-Service
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-inabanga-900 hover:bg-inabanga-950 text-white font-bold text-sm transition-all shadow-md font-heading"
          >
            <FileText className="w-4 h-4 text-amber-300" />
            <span>Browse All Municipal Services &amp; Citizen&apos;s Charter</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* LEADERSHIP SECTION (2025–2028) */}
      <section className="bg-gradient-to-b from-slate-100 to-emerald-50/50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-inabanga-800 font-extrabold text-xs uppercase tracking-widest font-heading">
              Local Governance (Term 2025–2028)
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 font-heading">
              Elected Municipal Officials
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Meet the duly elected executive and legislative leaders serving the Municipality of Inabanga, Bohol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Mayor */}
            {mayor && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-inabanga-100 text-inabanga-900 font-heading">
                    Municipal Mayor
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">{mayor.name}</h3>
                  <p className="text-xs font-bold text-amber-700">Term: {mayor.term}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{mayor.bio}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-bold text-slate-700">Office:</span> (038) 512-9035 &bull; mayor@inabanga.gov.ph
                </div>
              </div>
            )}

            {/* Vice Mayor */}
            {viceMayor && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-heading">
                    Municipal Vice Mayor
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">{viceMayor.name}</h3>
                  <p className="text-xs font-bold text-amber-700">Term: {viceMayor.term}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{viceMayor.bio}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-bold text-slate-700">Office:</span> (038) 512-9036 &bull; vicemayor@inabanga.gov.ph
                </div>
              </div>
            )}
          </div>

          {/* SB Councilors preview */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 text-lg mb-4 text-center sm:text-left font-heading">
              Sangguniang Bayan Members (Municipal Council)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {councilors.map((c) => (
                <div
                  key={c.id}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-inabanga-300 transition-all text-left"
                >
                  <div className="text-xs font-bold text-inabanga-900 font-heading">{c.name}</div>
                  <div className="text-[11px] text-slate-500 mt-1">SB Member (2025–2028)</div>
                  {c.committee && (
                    <div className="text-[10px] text-slate-500 mt-1 font-medium">
                      {c.committee[0]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/government"
                className="text-xs font-bold text-inabanga-800 hover:text-inabanga-900 inline-flex items-center gap-1 font-heading"
              >
                <span>View Complete Government Directory &amp; Department Heads</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY & BUDGET HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-inabanga-800 font-extrabold text-xs uppercase tracking-widest font-heading">
              Full Disclosure Policy (FDP)
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Where Your Public Taxes &amp; Allotments Go
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Under Philippine transparency laws and DILG Full Disclosure Policy guidelines, the local government provides open access to the municipal budget, public procurement plans, and 20% development fund investments.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <Coins className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-800 font-heading">Total Annual Budget Estimate</div>
                  <div className="text-slate-500">₱248,650,000.00 (IRA / NTA &amp; Local Collections)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <CheckCircle className="w-5 h-5 text-inabanga-700 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-800 font-heading">20% Municipal Development Fund</div>
                  <div className="text-slate-500">₱49,730,000.00 invested in roads, water &amp; tourism</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/transparency"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-inabanga-800 hover:bg-inabanga-900 text-white text-xs font-bold shadow-md transition-all font-heading"
              >
                <PieChart className="w-4 h-4 text-amber-300" />
                <span>Explore Full Transparency Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Budget allocation cards */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-base mb-2 font-heading">
              Budget Distribution by Sector (2025)
            </h3>

            {municipalBudget2025.allocations.map((alloc) => (
              <div key={alloc.category} className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-700">{alloc.category}</span>
                  <span className="font-bold text-slate-900 font-heading">
                    ₱{(alloc.amount / 1000000).toFixed(2)}M ({alloc.percentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden shadow-inner">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${alloc.color}`}
                    style={{ width: `${alloc.percentage}%`, backgroundColor: alloc.hexColor }}
                  />
                </div>
                <p className="text-[11px] text-slate-500">{alloc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INABANGA CULTURE & HERITAGE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-inabanga-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider font-heading">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                Mat Capital of Bohol &bull; Eco-Tourism
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight font-heading">
                Heritage, Resilience &amp; Natural Splendor of Inabanga
              </h2>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Inabanga is world-renowned for its master weaving of colorful <em>tikog</em> mats and raffia crafts. Home to the legendary Inabanga River—the longest navigable river in Bohol—as well as historic Macaban Cave and scenic Mount Ilihan, Inabanga merges vibrant artisan traditions with rich biodiversity.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                <div className="border-l-2 border-amber-400 pl-3">
                  <div className="font-bold text-white font-heading">Tikog Mat Weaving</div>
                  <div className="text-emerald-200/70">Centuries of artisan loom mastery</div>
                </div>
                <div className="border-l-2 border-emerald-400 pl-3">
                  <div className="font-bold text-white font-heading">Inabanga River Safari</div>
                  <div className="text-emerald-200/70">Pristine coastal &amp; mangrove cruise</div>
                </div>
              </div>
            </div>

            {/* Quick Barangays Index CTA */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center sm:text-left space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white font-heading">50 Barangays of Inabanga</h3>
                  <p className="text-xs text-emerald-100/70">
                    From coastal shores of Lawis and island communities of Cuaming to highland farming in Sua.
                  </p>
                </div>
              </div>

              <div className="text-xs text-emerald-100/80 leading-relaxed">
                Browse our complete directory of all 50 barangays, including distance from Poblacion, key features, and community updates.
              </div>

              <Link
                href="/barangays"
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-white text-inabanga-900 hover:bg-amber-300 hover:text-slate-950 font-bold text-xs transition-colors shadow font-heading"
              >
                <span>View Complete Directory of 50 Barangays</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF HISTORY OF INABANGA */}
      <HistorySection />

      {/* CITIZEN PARTICIPATION & FEEDBACK BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 bg-white rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-inabanga-50 text-inabanga-800 flex items-center justify-center mx-auto border border-inabanga-200">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 font-heading">
            Have a suggestion or need municipal assistance?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            BetterInabanga is powered by open governance and community engagement. Send your feedback directly or request public records.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsFeedbackOpen(true)}
              className="px-6 py-3 rounded-2xl bg-inabanga-800 hover:bg-inabanga-900 text-white font-bold text-xs shadow-md transition-all font-heading"
            >
              Submit Citizen Feedback / Report
            </button>
            <a
              href="https://www.foi.gov.ph"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all inline-flex items-center gap-1.5 font-heading"
            >
              <span>eFOI Philippines</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </div>
  );
}
