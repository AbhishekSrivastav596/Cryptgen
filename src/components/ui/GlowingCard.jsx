'use client';

import Image from 'next/image';
import { GlowingEffect } from './glowing-effect';

const GlowingCard = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl p-2 backdrop-blur-lg md:p-4">
      <div className="relative rounded-[50px]">
        <GlowingEffect
          blur={10}
          spread={60}
          proximity={150}
          inactiveZone={0.7}
          borderWidth={5}
          movementDuration={2}
          glow={true}
          disabled={false}
          className=""
        />

        {/* Main Image */}
        <Image
          alt="header"
          src="/dashboard.webp"
          width={1920}
          height={1080}
          className="rounded-[20px] w-full h-auto object-cover"
          priority
        />

        <div
          className="absolute inset-0 rounded-[20px]"
          style={{
            background:
              "linear-gradient(179.87deg, rgba(0, 0, 0, 0) 0.11%, rgba(0, 0, 0, 0.8) 69.48%, rgb(0, 0, 0) 92.79%)",
          }}
        />
      </div>
    </div>
  );
};

export default GlowingCard;
