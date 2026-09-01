'use client';

import React, { useRef } from 'react';
import { BookOpen, Landmark, Shield, Sparkles, Compass, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HistorySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const milestones = [
    {
      year: '1722',
      title: 'Pueblo & Parish Foundation',
      badge: 'Spanish Colonial Era',
      description:
        'Inabanga was officially organized as an independent town and parish dedicated to Saint Paul the Apostle (San Pablo Apostol). Established under Jesuit missionaries and later administered by Augustinian Recollects, forming the civil foundation of the community.',
      icon: Landmark,
    },
    {
      year: '1744 – 1829',
      title: 'The Dagohoy Rebellion',
      badge: '85-Year Freedom Struggle',
      description:
        'Inabanga served as a vital stronghold and strategic refuge during the heroic 85-year Dagohoy Rebellion—the longest revolt in Philippine history. Dagohoy’s patriots utilized Inabanga’s Macaban Cave, rugged forested ridges, and navigable riverways for self-determination.',
      icon: Shield,
    },
    {
      year: '1854 – 1899',
      title: 'Coral-Stone Heritage Church',
      badge: 'Architectural Legacy',
      description:
        'Construction of the historic San Pablo Apostol Parish Church, crafted from hand-chiseled coral stones on an elevated ridge overlooking the Inabanga River. It features centuries-old colonial religious artifacts, bells, and hand-carved retablos.',
      icon: BookOpen,
    },
    {
      year: '20th Century',
      title: 'Mat Capital of Bohol',
      badge: 'Artisan Loom Mastery',
      description:
        'Generations of Inabangnon women refined the traditional craft of loom-weaving indigenous tikog and buri reeds. Inabanga flourished into the recognized "Mat Capital of Bohol," exporting colorful artisan woven handicrafts, mats, and bags worldwide.',
      icon: Sparkles,
    },
    {
      year: 'Present Day',
      title: 'Resilient 50-Barangay Municipality',
      badge: 'Modern Open Governance',
      description:
        'A thriving 3rd-class municipality uniting 50 barangays across fertile inland farms, mangrove coasts, and offshore island communities like Cuaming, advancing public transparency, river eco-tourism, and sustainable community livelihoods.',
      icon: Compass,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Section Header - Not enclosed in outer rounded div */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="space-y-2 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-inabanga-50 text-inabanga-900 text-xs font-bold uppercase tracking-wider font-heading border border-inabanga-100">
            <BookOpen className="w-3.5 h-3.5 text-inabanga-700" />
            Heritage &amp; Origins
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Brief History of Inabanga
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From indigenous legends along Bohol&apos;s longest river to the cradle of the historic Dagohoy revolution and world-famous mat-weaving artistry.
          </p>
        </div>

        <div className="text-xs text-slate-500 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xs shrink-0">
          <span className="font-bold text-slate-800 font-heading">Etymology:</span> Visayan <em>&ldquo;Inabangan&rdquo;</em> (Rented River)
        </div>
      </div>

      {/* Origin Legend Feature Box */}
      <div className="bg-gradient-to-r from-inabanga-950 via-inabanga-900 to-inabanga-800 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg border border-inabanga-700">
        <div className="relative z-10 space-y-2.5 max-w-3xl">
          <span className="text-amber-300 font-extrabold text-xs uppercase tracking-widest font-heading">
            The Legend Behind the Name
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Why It Is Called &ldquo;Inabanga&rdquo;
          </h3>
          <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
            According to ancient oral tradition, the town derives its name from the Visayan word <strong>&ldquo;abang&rdquo;</strong> (lease or rental fee). Local folklore tells that the great Inabanga River—the longest navigable river in Bohol—was inhabited by fierce alligators (<em>buaya</em>). It was whispered that every year, a life was lost along its waters as if a mandatory &ldquo;abang&rdquo; or toll was paid to the river. Over generations, the community along the riverbank became known as <strong>Inabangan</strong>, which Spanish scribes officially recorded as <strong>Inabanga</strong> in 1722.
          </p>
        </div>
      </div>

      {/* Historical Timeline Milestones - Wider Cards & Horizontally Scrollable */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">
              Key Historical Milestones
            </h3>
            <p className="text-xs text-slate-500">Scroll horizontally to explore our centuries of history</p>
          </div>

          {/* Horizontal Scroll Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors shadow-xs"
              title="Scroll left"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors shadow-xs"
              title="Scroll right"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Track with Wider Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x scroll-smooth no-scrollbar"
        >
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="min-w-[320px] sm:min-w-[380px] lg:min-w-[420px] max-w-[440px] bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-inabanga-400 hover:shadow-md transition-all flex flex-col justify-between shrink-0 snap-start space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-inabanga-900 font-heading font-mono">
                      {m.year}
                    </span>
                    <span className="w-10 h-10 rounded-2xl bg-inabanga-50 text-inabanga-700 flex items-center justify-center shadow-xs border border-inabanga-100 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-100/80 text-amber-950 font-heading">
                    {m.badge}
                  </span>

                  <h4 className="text-base font-bold text-slate-900 font-heading leading-snug">
                    {m.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-inabanga-700" />
                  <span>Inabanga Heritage Milestone</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
