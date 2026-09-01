'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { citizenServices, CitizenService } from '@/data/services';
import {
  Search,
  Filter,
  Clock,
  Coins,
  Building,
  CheckCircle2,
  FileText,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

function ServicesContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialId = searchParams.get('id') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(initialId || null);

  // Sync with URL query or hash on mount/change
  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) {
      setSearchQuery(q);
    }

    const idFromParam = searchParams.get('id');
    const idFromHash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    const targetId = idFromParam || idFromHash;

    if (targetId) {
      setExpandedServiceId(targetId);
      // Wait for layout render then scroll
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200);
    }
  }, [searchParams]);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'civil-registry', label: 'Civil Registry' },
    { id: 'business', label: 'Business & Permits' },
    { id: 'social-welfare', label: 'Social Welfare & AICS' },
    { id: 'health', label: 'Health & Medical' },
    { id: 'agriculture', label: 'Agriculture & Fishery' },
    { id: 'treasury', label: 'Tax & Treasury' },
    { id: 'engineering', label: 'Building & Engineering' },
  ];

  const filteredServices = useMemo(() => {
    return citizenServices.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.office.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.requirements.some((r) =>
          r.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <div className="space-y-12 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-inabanga-700">
        <div className="max-w-3xl space-y-4">
          <span className="text-amber-300 font-extrabold text-xs uppercase tracking-widest font-heading">
            Citizen&apos;s Charter Directory &bull; Municipality of Inabanga
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
            Municipal Public Services
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            Transparent guide to official requirements, processing fees, turn-around times, and responsible municipal departments under the Inabanga Citizen&apos;s Charter (ARTA Compliant).
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Business Permit, Marriage Certificate, Senior ID, Cedula)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-inabanga-700 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 hover:bg-slate-300 px-2 py-0.5 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all font-heading ${
                selectedCategory === cat.id
                  ? 'bg-inabanga-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Count and List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs text-slate-500 px-2">
          <span>
            Showing <strong className="text-slate-900 font-bold">{filteredServices.length}</strong> services
            {searchQuery && (
              <span>
                {' '}matching &quot;<strong className="text-inabanga-900">{searchQuery}</strong>&quot;
              </span>
            )}
          </span>
          <span className="text-slate-400">ARTA Citizen&apos;s Charter Standard</span>
        </div>

        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 font-heading">No matching services found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any service matching &quot;{searchQuery}&quot;. Try searching for general terms like &quot;permit&quot;, &quot;tax&quot;, &quot;certificate&quot;, or browse by category above.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-inabanga-800 text-white text-xs font-bold font-heading hover:bg-inabanga-900 transition-colors"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden shadow-xs ${
                    isExpanded
                      ? 'ring-2 ring-inabanga-700 border-inabanga-600 shadow-md'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Service Card Summary Bar */}
                  <div
                    onClick={() => toggleExpand(service.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-slate-50/70 transition-colors"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-inabanga-100 text-inabanga-800 font-heading">
                          {service.category.replace('-', ' ')}
                        </span>
                        {service.isOnlineAvailable && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-heading">
                            e-Service Ready
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-heading">{service.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6 text-xs text-slate-500 shrink-0 border-t md:border-t-0 pt-3 md:pt-0">
                      <div className="text-left md:text-right">
                        <div className="flex items-center md:justify-end gap-1 font-semibold text-slate-800 font-heading">
                          <Clock className="w-3.5 h-3.5 text-inabanga-600" />
                          <span>{service.processingTime}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{service.office}</div>
                      </div>

                      <button
                        className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                        aria-label="Expand requirements"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detail Panel */}
                  {isExpanded && (
                    <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-6 animate-in slide-in-from-top-2 duration-150">
                      {/* Fees & Office Overview */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                          <div className="text-[11px] text-slate-500 font-bold uppercase font-heading">
                            Processing Fees
                          </div>
                          <div className="text-sm font-bold text-slate-900 mt-0.5 font-heading">
                            {service.fees}
                          </div>
                        </div>

                        <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                          <div className="text-[11px] text-slate-500 font-bold uppercase font-heading">
                            Responsible Office
                          </div>
                          <div className="text-sm font-bold text-slate-900 mt-0.5 font-heading">
                            {service.office}
                          </div>
                        </div>

                        <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                          <div className="text-[11px] text-slate-500 font-bold uppercase font-heading">
                            Estimated Processing Time
                          </div>
                          <div className="text-sm font-bold text-slate-900 mt-0.5 font-heading">
                            {service.processingTime}
                          </div>
                        </div>
                      </div>

                      {/* Requirements List */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                          <FileText className="w-4 h-4 text-inabanga-700" />
                          Documentary Requirements
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
                          {service.requirements.map((req, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-2xs"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Step-by-Step Procedure */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                          <Building className="w-4 h-4 text-inabanga-700" />
                          Step-by-Step Procedure
                        </h4>
                        <div className="space-y-2">
                          {service.steps.map((step, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 text-xs bg-white p-3 rounded-xl border border-slate-200 shadow-2xs"
                            >
                              <span className="w-6 h-6 rounded-full bg-inabanga-50 text-inabanga-900 font-black flex items-center justify-center shrink-0 border border-inabanga-200 font-mono text-[11px]">
                                {idx + 1}
                              </span>
                              <span className="text-slate-700 pt-0.5 leading-relaxed">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16 text-center text-sm text-slate-500 font-heading">Loading Citizen Services...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
