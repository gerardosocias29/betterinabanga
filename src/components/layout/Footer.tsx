import React from 'react';
import Link from 'next/link';
import { ExternalLink, MapPin, Phone, Mail, AlertCircle, Shield } from 'lucide-react';
import BetterInabangaLogo from '../BetterInabangaLogo';

export default function Footer() {
  return (
    <footer className="bg-inabanga-950 text-slate-300 border-t border-inabanga-900">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <BetterInabangaLogo variant="white" />

            <p className="text-sm text-emerald-100/70 leading-relaxed max-w-sm">
              An independent, community-maintained digital transparency portal for the Municipality of Inabanga, Bohol. Giving citizens direct access to public expenditures, citizen&apos;s charter guides, 50 barangay contacts, and 24/7 disaster hotlines.
            </p>

            {/* Contact details with UNIFIED text-amber-400 icons */}
            <div className="pt-2 text-xs text-emerald-200/80 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Municipal Hall, Poblacion, Inabanga, Bohol 6332</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline: (038) 510-8164 / (038) 512-9039</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@inabanga.gov.ph</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Citizen Services */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-4 font-heading text-amber-400">
              Citizen Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/services#civil-registry" className="hover:text-amber-300 transition-colors">
                  Civil Registry (Birth, Marriage)
                </Link>
              </li>
              <li>
                <Link href="/services#business" className="hover:text-amber-300 transition-colors">
                  Business &amp; Mayor&apos;s Permit
                </Link>
              </li>
              <li>
                <Link href="/services#treasury" className="hover:text-amber-300 transition-colors">
                  Real Property Tax (Amilyar)
                </Link>
              </li>
              <li>
                <Link href="/services#social-welfare" className="hover:text-amber-300 transition-colors">
                  Social Welfare &amp; AICS Aid
                </Link>
              </li>
              <li>
                <Link href="/services#agriculture" className="hover:text-amber-300 transition-colors">
                  Fisherfolk &amp; Boat Licensing
                </Link>
              </li>
              <li>
                <Link href="/services#health" className="hover:text-amber-300 transition-colors">
                  Rural Health Unit (RHU) Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Transparency */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-4 font-heading text-amber-400">
              Public Transparency
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/government" className="hover:text-amber-300 transition-colors">
                  Elected Officials (2025–2028)
                </Link>
              </li>
              <li>
                <Link href="/transparency#budget" className="hover:text-amber-300 transition-colors">
                  Annual Budget &amp; IRA Allotment
                </Link>
              </li>
              <li>
                <Link href="/transparency#projects" className="hover:text-amber-300 transition-colors">
                  20% Development Fund Projects
                </Link>
              </li>
              <li>
                <Link href="/transparency#fdp" className="hover:text-amber-300 transition-colors">
                  Full Disclosure Board Records
                </Link>
              </li>
              <li>
                <Link href="/barangays" className="hover:text-amber-300 transition-colors">
                  Directory of 50 Barangays
                </Link>
              </li>
              <li>
                <a
                  href="https://www.foi.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
                >
                  <span>eFOI Philippines</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Official Government Links & Emergency */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-4 font-heading text-amber-400">
              Official Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a
                  href="https://bohol.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
                >
                  <span>Province of Bohol</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://coa.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
                >
                  <span>Commission on Audit (COA)</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://dilg.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
                >
                  <span>DILG Philippines</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <Link href="/contact#hotlines" className="hover:text-amber-300 transition-colors">
                  Emergency Hotlines Index
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Submit Public Inquiry / Report
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal & Attribution Bottom Bar - Sleek & Compact */}
      <div className="border-t border-inabanga-900 bg-black/50 text-slate-400 text-xs py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[11px]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 gap-y-1">
            <span className="font-bold text-slate-200 font-heading">
              &copy; {new Date().getFullYear()} BetterInabanga.org
            </span>
            <span className="text-slate-600 hidden xs:inline">&bull;</span>
            <span className="font-mono text-slate-400">MIT | CC BY 4.0</span>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="text-slate-400">All public information sourced from official government portals</span>
            <span className="text-slate-600 hidden md:inline">&bull;</span>
            <span className="text-amber-400 font-semibold">Not an official government website</span>
          </div>

          <div className="text-slate-400 text-[10px] sm:text-[11px] shrink-0">
            Municipality of Inabanga, Bohol, Philippines
          </div>
        </div>
      </div>
    </footer>
  );
}
