import React from 'react';
import type { Metadata } from 'next';
import GovernmentClient from './GovernmentClient';

export const metadata: Metadata = {
  title: 'Municipal Government & Officials (2025–2028) | Inabanga, Bohol',
  description:
    'Official directory of elected executive and legislative officials, Sangguniang Bayan councilors, municipal department heads, and 50 barangay units of the Municipality of Inabanga, Bohol.',
  openGraph: {
    title: 'Municipal Government & Officials (2025–2028) | Inabanga, Bohol',
    description:
      'Direct directory of elected leaders, municipal department offices, emergency hotlines, and 50 barangay units of Inabanga, Bohol.',
  },
};

export default function GovernmentPage() {
  return <GovernmentClient />;
}

