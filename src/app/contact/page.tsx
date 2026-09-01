'use client';

import React, { useState } from 'react';
import { emergencyHotlines, Hotline } from '@/data/hotlines';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  ShieldAlert,
  Send,
  CheckCircle2,
  AlertTriangle,
  Building,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    barangay: 'Poblacion Centro',
    category: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-inabanga-700">
        <div className="max-w-3xl space-y-4">
          <span className="text-amber-300 font-extrabold text-xs uppercase tracking-widest font-heading">
            24/7 Emergency Response &bull; Public Inquiries &bull; Inabanga, Bohol
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
            Emergency Hotlines &amp; Contact
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            Need urgent assistance, disaster rescue, medical attention, or official municipal assistance? Connect directly with the emergency responders and municipal offices of Inabanga.
          </p>
        </div>
      </div>

      {/* EMERGENCY HOTLINES SECTION */}
      <section id="hotlines" className="space-y-6">
        <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Official Emergency Hotlines
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Toll-free and direct lines for police, fire, rescue, and health operations.
            </p>
          </div>
          <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full font-bold text-xs">
            24/7 Dispatch
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyHotlines.map((hotline) => (
            <div
              key={hotline.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-inabanga-300 transition-all space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                      hotline.category === 'emergency' || hotline.category === 'disaster'
                        ? 'bg-rose-100 text-rose-800'
                        : hotline.category === 'security'
                        ? 'bg-sky-100 text-sky-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {hotline.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {hotline.available}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base">{hotline.name}</h3>
                <div className="text-xs text-inabanga-800 font-semibold mt-0.5">
                  {hotline.agency}
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {hotline.description}
                </p>

                {hotline.location && (
                  <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{hotline.location}</span>
                  </p>
                )}
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {hotline.landline && (
                  <a
                    href={`tel:${hotline.landline.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                  >
                    <span>Landline: {hotline.landline}</span>
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                )}

                {hotline.mobile.map((mob, idx) => (
                  <a
                    key={idx}
                    href={`tel:${mob.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-inabanga-50 hover:bg-inabanga-100 text-inabanga-900 text-xs font-semibold transition-colors"
                  >
                    <span>Mobile: {mob}</span>
                    <Phone className="w-3.5 h-3.5 text-inabanga-700" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MUNICIPAL HALL & FEEDBACK FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Physical Office Details */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-black text-slate-900">Municipal Hall Address</h3>
            <p className="text-xs text-slate-500 mt-1">
              Main administrative compound of the Local Government Unit of Inabanga.
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block text-sm">Location</strong>
                Municipal Hall Compound, Poblacion Centro, Inabanga, Bohol, Philippines 6332
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block text-sm">Operating Hours</strong>
                Monday to Friday: 8:00 AM – 5:00 PM (Except Holidays)
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block text-sm">Official Email</strong>
                info@inabanga.gov.ph / mayor@inabanga.gov.ph
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <strong className="text-slate-900">Visiting Guidelines:</strong>
            <p>
              Citizens transacting with the Municipal Treasury, Civil Registrar, Assessor, or BPLO are advised to arrive during morning office hours and bring valid government-issued photo identification.
            </p>
          </div>
        </div>

        {/* Embedded Citizen Message & Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-black text-slate-900">Send Citizen Feedback / Request</h3>
            <p className="text-xs text-slate-500 mt-1">
              Submit your inquiry, report a public service concern, or request public information.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-heading">Inquiry Submitted!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for contributing to open governance. Your public inquiry has been submitted to the BetterInabanga initiative.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 bg-inabanga-700 text-white text-xs font-semibold rounded-lg"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-inabanga-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number / Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 0917-xxx-xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-inabanga-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Barangay
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lawis, Poblacion, etc."
                    value={formData.barangay}
                    onChange={(e) => setFormData({ ...formData, barangay: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-inabanga-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg outline-none bg-white focus:ring-2 focus:ring-inabanga-500"
                  >
                    <option value="General Inquiry">General Municipal Inquiry</option>
                    <option value="Citizen Charter Service">Citizen Charter / Permits</option>
                    <option value="Public Record Request">Public Record / Budget Request</option>
                    <option value="Community Concern">Community Concern / Report</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-inabanga-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-inabanga-700 hover:bg-inabanga-800 text-white font-semibold text-xs rounded-xl shadow transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
