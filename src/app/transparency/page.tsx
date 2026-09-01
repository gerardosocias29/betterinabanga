'use client';

import React, { useState } from 'react';
import {
  municipalBudget2025,
  priorityProjects2025,
  fullDisclosureLinks,
  TransparencyProject,
} from '@/data/transparency';
import {
  PieChart,
  Coins,
  TrendingUp,
  FileCheck,
  Download,
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  Building,
  ShieldAlert,
} from 'lucide-react';

export default function TransparencyPage() {
  const [projectFilter, setProjectFilter] = useState<'All' | 'Ongoing' | 'Completed' | 'Bidding'>('All');

  const filteredProjects = priorityProjects2025.filter(
    (p) => projectFilter === 'All' || p.status === projectFilter
  );

  return (
    <div className="space-y-12 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-inabanga-700">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-widest font-heading">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Full Disclosure Policy (FDP) &bull; Municipality of Inabanga</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
            Public Transparency &amp; Municipal Budgets
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            Every peso in public funds belongs to the people. Review the Municipal Government of Inabanga’s Annual Appropriations, National Tax Allotment (NTA), and 20% Development Fund project progress in open data.
          </p>
        </div>
      </div>

      {/* KPI METRICS OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>TOTAL 2025 BUDGET</span>
            <Coins className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-black text-slate-900">
            ₱{(municipalBudget2025.totalBudget / 1000000).toFixed(2)}M
          </div>
          <div className="text-xs text-slate-500 mt-2">
            Approved Executive Budget &amp; Appropriation Ordinance
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>NATIONAL TAX ALLOTMENT (IRA)</span>
            <TrendingUp className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-3xl font-black text-inabanga-700">
            ₱{(municipalBudget2025.internalRevenueAllotment / 1000000).toFixed(2)}M
          </div>
          <div className="text-xs text-slate-500 mt-2">
            89% national revenue share for local government operations
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
            <span>20% DEVELOPMENT FUND</span>
            <CheckCircle2 className="w-4 h-4 text-teal-500" />
          </div>
          <div className="text-3xl font-black text-teal-700">
            ₱{((municipalBudget2025.totalBudget * 0.2) / 1000000).toFixed(2)}M
          </div>
          <div className="text-xs text-slate-500 mt-2">
            Statutory capital outlays, water systems &amp; rural roads
          </div>
        </div>
      </div>

      {/* SECTORAL BUDGET BREAKDOWN */}
      <section id="budget" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Sectoral Expenditure Breakdown
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Annual budget distribution approved by the Sangguniang Bayan of Inabanga.
            </p>
          </div>
          <div className="text-xs font-semibold text-inabanga-700">
            Fiscal Year 2025
          </div>
        </div>

        <div className="space-y-6">
          {municipalBudget2025.allocations.map((item) => (
            <div key={item.category} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm font-medium">
                <span className="text-slate-800 font-semibold">{item.category}</span>
                <span className="text-slate-900 font-bold">
                  ₱{(item.amount / 1000000).toFixed(2)}M ({item.percentage}%)
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden shadow-inner">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${item.color}`}
                  style={{ width: `${item.percentage}%`, backgroundColor: item.hexColor }}
                />
              </div>
              <p className="text-xs text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 20% DEVELOPMENT FUND PROJECT TRACKER */}
      <section id="projects" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Priority Infrastructure Projects Tracker
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Real-time monitoring of municipal development fund allocations, contractors, and progress.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold self-start sm:self-auto">
            {(['All', 'Ongoing', 'Completed', 'Bidding'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setProjectFilter(status)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  projectFilter === status
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-inabanga-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={`px-2.5 py-0.5 rounded font-bold text-[11px] ${
                      project.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : project.status === 'Ongoing'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-slate-400">{project.targetDate}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{project.location}</span>
                </p>

                <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-100">
                  <div>
                    <span className="font-semibold text-slate-700">Source of Fund:</span>{' '}
                    {project.sourceOfFund}
                  </div>
                  {project.contractor && (
                    <div>
                      <span className="font-semibold text-slate-700">Contractor:</span>{' '}
                      {project.contractor}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-600">Total Contract Cost</span>
                  <span className="text-inabanga-800 font-bold">
                    ₱{project.budget.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${project.completionPercentage}%`,
                      backgroundColor: project.completionPercentage === 100 ? '#086b3c' : '#f59e0b',
                    }}
                  />
                </div>
                <div className="text-[10px] text-right text-slate-400">
                  {project.completionPercentage}% Progress
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL DISCLOSURE BOARD DOWNLOADS & COA REPORTS */}
      <section id="fdp" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-2xl font-black text-slate-900">
            Public Disclosure Documents &amp; COA Audits
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Pursuant to DILG Memorandum Circulars, statutory reports are posted for public download and citizen oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fullDisclosureLinks.map((doc, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 hover:border-inabanga-300 hover:bg-slate-50/50 transition-all flex items-start justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {doc.category}
                  </span>
                  <span className="text-[11px] text-slate-400">{doc.quarter}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{doc.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{doc.description}</p>
                <div className="text-[11px] text-slate-400">Format: {doc.fileType} ({doc.size})</div>
              </div>

              <a
                href={doc.url}
                className="p-2.5 rounded-lg bg-inabanga-50 text-inabanga-700 hover:bg-inabanga-700 hover:text-white transition-all shrink-0 mt-2"
                title="Download Public Document"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
