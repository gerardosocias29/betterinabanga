'use client';

import React from 'react';
import { Phone, ShieldAlert, Siren, Flame, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function HotlineBar() {
  return (
    <div className="bg-slate-900 text-white text-xs py-1.5 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white tracking-wider animate-pulse uppercase">
            24/7 Hotlines
          </span>
          <span className="text-slate-400 hidden sm:inline">Emergency Response Inabanga, Bohol:</span>
        </div>

        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-slate-300">
          <a
            href="tel:09178906442"
            className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            title="MDRRMO Inabanga Disaster Hotline"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">MDRRMO:</span>
            <span>(038) 510-8164 / 0917-890-6442</span>
          </a>

          <a
            href="tel:09985986423"
            className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            title="PNP Inabanga Police Hotline"
          >
            <Siren className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-semibold text-white">PNP:</span>
            <span>(038) 512-9039</span>
          </a>

          <a
            href="tel:09275281232"
            className="inline-flex items-center gap-1.5 hover:text-rose-400 transition-colors hidden md:inline-flex"
            title="BFP Inabanga Fire Station"
          >
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span className="font-semibold text-white">BFP:</span>
            <span>0927-528-1232</span>
          </a>

          <a
            href="tel:117"
            className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors hidden lg:inline-flex"
            title="Provincial Emergency Response TaRSIER 117"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-white">TaRSIER:</span>
            <span>117</span>
          </a>

          <Link
            href="/contact#hotlines"
            className="text-inabanga-300 hover:text-white underline underline-offset-2 ml-1"
          >
            All Hotlines &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
