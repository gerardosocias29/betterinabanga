'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { inabangaBarangays } from '@/data/barangays';
import { MapPin, Navigation, Search, Filter } from 'lucide-react';

function BarangaysContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [search, setSearch] = useState(initialQuery);
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) {
      setSearch(q);
    }
  }, [searchParams]);

  const filteredBarangays = inabangaBarangays.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.features.some((f) => f.toLowerCase().includes(search.toLowerCase()));

    const matchesType = selectedType === 'all' || b.type === selectedType;

    return matchesSearch && matchesType;
  });

  // Calculate live counts per category
  const counts = {
    all: inabangaBarangays.length,
    poblacion: inabangaBarangays.filter((b) => b.type === 'poblacion').length,
    coastal: inabangaBarangays.filter((b) => b.type === 'coastal').length,
    inland: inabangaBarangays.filter((b) => b.type === 'inland').length,
    island: inabangaBarangays.filter((b) => b.type === 'island').length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-inabanga-700">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider font-heading">
            <MapPin className="w-3.5 h-3.5" />
            Local Government Units Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-heading">
            The 50 Barangays of Inabanga
          </h1>
          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
            Geographic profiles, distance from Poblacion, official classifications, and local community characteristics across all 50 barangays in Inabanga, Bohol.
          </p>
        </div>
      </div>

      {/* Controls & Search */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by barangay name or feature (e.g., Lawis, Weaving, Mangroves, Cuaming)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-inabanga-700 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 hover:bg-slate-300 px-2 py-0.5 rounded-md"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs with Exact Verified Counts */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          {[
            { id: 'all', label: `All (${counts.all})` },
            { id: 'poblacion', label: `Poblacion (${counts.poblacion})` },
            { id: 'coastal', label: `Coastal Communities (${counts.coastal})` },
            { id: 'inland', label: `Inland & Highland (${counts.inland})` },
            { id: 'island', label: `Island Sanctuaries (${counts.island})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedType(tab.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap font-bold font-heading transition-all ${
                selectedType === tab.id
                  ? 'bg-inabanga-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Barangays Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs text-slate-500 px-1">
          <span className="font-medium">
            Showing <strong className="text-slate-800">{filteredBarangays.length}</strong> of 50 barangays
            {search && <span> matching &quot;<strong className="text-inabanga-900">{search}</strong>&quot;</span>}
          </span>
          <span className="text-slate-400">Postal Code: 6332</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBarangays.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-inabanga-400 hover:shadow-md transition-all p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md font-heading tracking-wide ${
                      b.type === 'island'
                        ? 'bg-sky-100 text-sky-800 border border-sky-200'
                        : b.type === 'coastal'
                        ? 'bg-teal-100 text-teal-800 border border-teal-200'
                        : b.type === 'poblacion'
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    }`}
                  >
                    {b.type}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-slate-400" />
                    {b.distanceKm === 0 ? 'Town Center' : `${b.distanceKm} km`}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base font-heading">{b.name}</h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {b.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-50 border border-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Inabanga, Bohol</span>
                <span className="font-semibold text-slate-600 font-mono">ZIP 6332</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BarangaysPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16 text-center text-sm text-slate-500 font-heading">Loading Barangays Directory...</div>}>
      <BarangaysContent />
    </Suspense>
  );
}
