import React from 'react';
import Image from 'next/image';

interface BetterInabangaLogoProps {
  variant?: 'full' | 'compact' | 'white';
  className?: string;
}

export default function BetterInabangaLogo({
  variant = 'full',
  className = '',
}: BetterInabangaLogoProps) {
  // Footer / Dark background: Official Full Logo with White Text (Larger scale)
  if (variant === 'white') {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="relative h-16 sm:h-20 w-auto flex items-center">
          <Image
            src="/images/better_inabanga_full_logo_white.png"
            alt="BetterInabanga.org"
            width={340}
            height={155}
            className="h-16 sm:h-20 w-auto object-contain transition-transform duration-200 hover:scale-105"
            priority
          />
        </div>
      </div>
    );
  }

  // Standard Header / Light background: Official Full Logo with Dark Text
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-10 sm:h-12 w-auto flex items-center">
        <Image
          src="/images/better_inabanga_full_logo.png"
          alt="BetterInabanga.org"
          width={240}
          height={115}
          className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}
