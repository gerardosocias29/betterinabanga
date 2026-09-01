import React from 'react';
import { electedOfficials, municipalDepartments } from '@/data/officials';
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Users,
  Award,
  BookOpen,
  Briefcase,
} from 'lucide-react';
import type { Metadata } from 'next';
import { inabangaBarangays } from '@/data/barangays';

export const metadata: Metadata = {
  title: 'Municipal Government & Officials (2025–2028)',
  description:
    'Directory of elected executive and legislative officials, municipal council members, and department heads of the Municipality of Inabanga, Bohol.',
};

export default function GovernmentPage() {
  const mayor = electedOfficials.find((o) => o.id === 'mayor');
  const viceMayor = electedOfficials.find((o) => o.id === 'vice-mayor');
  const councilors = electedOfficials.filter((o) => o.role === 'legislative');

  return (
    <div className="space-y-12 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-inabanga-700">
        <div className="max-w-3xl space-y-4">
          <span className="text-amber-300 font-extrabold text-xs uppercase tracking-widest font-heading">
            Local Government Unit &bull; Term 2025–2028 &bull; Inabanga, Bohol
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
            Municipal Government of Inabanga
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            The municipal government is dedicated to transparent governance, inclusive local development, participatory policy making, and responsive delivery of basic social services for all Inabangnon.
          </p>
        </div>
      </div>

      {/* EXECUTIVE BRANCH */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-inabanga-700" />
          <h2 className="text-2xl font-black text-slate-900">The Executive Leadership</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mayor */}
          {mayor && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-inabanga-100 text-inabanga-900 mb-1.5 font-heading">
                    Municipal Mayor
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">{mayor.name}</h3>
                  <p className="text-xs text-amber-700 font-semibold">Term: {mayor.term}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{mayor.bio}</p>

                <div className="space-y-1.5 pt-2 text-xs text-slate-600 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>{mayor.contact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>{mayor.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>Office of the Mayor, 2nd Floor Municipal Hall, Poblacion, Inabanga</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Primary Executive Authority &bull; General Supervision of Municipal Offices &amp; Public Welfare
              </div>
            </div>
          )}

          {/* Vice Mayor */}
          {viceMayor && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 mb-1.5 font-heading">
                    Municipal Vice Mayor
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">{viceMayor.name}</h3>
                  <p className="text-xs text-amber-700 font-semibold">Term: {viceMayor.term}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{viceMayor.bio}</p>

                <div className="space-y-1.5 pt-2 text-xs text-slate-600 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>{viceMayor.contact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>{viceMayor.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>Office of the Vice Mayor &amp; Sangguniang Bayan Session Hall</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Presiding Officer of the Sangguniang Bayan &bull; Local Legislative Direction
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LEGISLATIVE BRANCH: SANGGUNIANG BAYAN */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-inabanga-700" />
            <h2 className="text-2xl font-black text-slate-900">
              Sangguniang Bayan Members (2025–2028)
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            8 Elected Councilors + Ex-Officio Representatives
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {councilors.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-inabanga-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <h4 className="font-bold text-slate-900 text-base leading-tight">{c.name}</h4>
                <div className="text-xs font-semibold text-inabanga-700 mt-1">{c.position}</div>
                <div className="text-[11px] text-slate-400">Term: {c.term}</div>

                {c.committee && (
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                      Key Committees
                    </div>
                    <ul className="mt-1 space-y-1">
                      {c.committee.map((comm, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                          <span>{comm}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-2 text-[11px] text-slate-400">
                Sangguniang Bayan of Inabanga, Bohol
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MUNICIPAL DEPARTMENT HEADS */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-inabanga-700" />
          <h2 className="text-2xl font-black text-slate-900">
            Municipal Department Heads &amp; Key Offices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {municipalDepartments.map((dept, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-200 flex flex-col justify-between space-y-3"
            >
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{dept.department}</h4>
                <div className="text-xs text-inabanga-800 font-semibold mt-1">
                  {dept.designation}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{dept.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{dept.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{dept.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BARANGAY UNITS OF INABANGA (MATCHING SOLANO FORMAT) */}
      <section className="space-y-6 pt-4 border-t border-slate-200">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-inabanga-900 text-white text-xs font-bold font-heading shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            Barangay Units
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Barangays of Inabanga
          </h2>
          <p className="text-slate-600 text-sm">
            50 Barangays serving our community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {inabangaBarangays.map((brgy) => (
            <div
              key={brgy.id}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs hover:border-inabanga-400 hover:shadow-sm transition-all flex flex-col justify-center space-y-1"
            >
              <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm font-heading">
                <MapPin className="w-4 h-4 text-inabanga-700 shrink-0" />
                <span>{brgy.name}</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                {brgy.captain ? `Kap. ${brgy.captain}` : 'Office of the Punong Barangay'}
              </p>
              <p className="text-[11px] text-slate-400">
                {brgy.distanceKm === 0 ? 'Poblacion Proper' : `${brgy.distanceKm} km from Poblacion`}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
