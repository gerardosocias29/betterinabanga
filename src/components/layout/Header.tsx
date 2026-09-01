'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Building2,
  FileText,
  PieChart,
  MapPin,
  PhoneCall,
  MessageSquarePlus,
  ExternalLink,
  Search,
} from 'lucide-react';
import BetterInabangaLogo from '../BetterInabangaLogo';
import FeedbackModal from '../FeedbackModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', icon: FileText },
    { name: 'Government', href: '/government', icon: Building2 },
    { name: 'Transparency', href: '/transparency', icon: PieChart },
    { name: 'Barangays', href: '/barangays', icon: MapPin },
    { name: 'Hotlines & Contact', href: '/contact', icon: PhoneCall },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Gov.ph reference bar */}
      <div className="bg-inabanga-950 text-emerald-100/90 text-xs py-1.5 px-4 border-b border-inabanga-900 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-400">GOVPH</span>
            <span className="text-inabanga-800">|</span>
            <span className="text-slate-300">
              Municipality of Inabanga, Province of Bohol, Philippines
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://www.foi.gov.ph"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <span>eFOI Philippines</span>
              <ExternalLink className="w-3 h-3 text-emerald-400" />
            </a>
            <a
              href="https://bohol.gov.ph"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <span>Province of Bohol</span>
              <ExternalLink className="w-3 h-3 text-emerald-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo with Official Seal */}
            <Link href="/" className="flex items-center group">
              <BetterInabangaLogo />
            </Link>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all font-heading ${
                      active
                        ? 'bg-inabanga-50 text-inabanga-900 shadow-xs border border-inabanga-200'
                        : 'text-slate-600 hover:text-inabanga-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setFeedbackModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-heading bg-gradient-to-r from-inabanga-800 to-inabanga-900 text-white hover:from-inabanga-900 hover:to-inabanga-950 shadow-sm hover:shadow transition-all border border-inabanga-700"
              >
                <MessageSquarePlus className="w-4 h-4 text-amber-300" />
                <span>Citizen Feedback</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setFeedbackModalOpen(true)}
                className="p-2 text-inabanga-800 hover:bg-inabanga-50 rounded-lg sm:hidden"
                aria-label="Feedback"
              >
                <MessageSquarePlus className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-inabanga-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors font-heading ${
                    active
                      ? 'bg-inabanga-50 text-inabanga-900 border border-inabanga-200'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {Icon && (
                    <Icon className={`w-5 h-5 ${active ? 'text-inabanga-700' : 'text-slate-400'}`} />
                  )}
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 mt-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setFeedbackModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-inabanga-900 text-white font-bold text-sm shadow-md"
              >
                <MessageSquarePlus className="w-4 h-4 text-amber-300" />
                <span>Submit Citizen Feedback / Report</span>
              </button>
              <div className="text-center text-xs text-slate-500 pt-1">
                Municipality of Inabanga, Bohol 6332 &bull; Public Transparency Portal
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Citizen Feedback Modal */}
      <FeedbackModal
        isOpen={feedbackModalOpen}
        onClose={() => setFeedbackModalOpen(false)}
      />
    </>
  );
}
