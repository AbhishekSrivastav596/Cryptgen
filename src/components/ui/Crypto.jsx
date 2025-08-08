"use client";

import React from "react";

export default function Crypto() {
  return (
    <section className="w-full max-w-4xl mx-auto text-center py-8 md:py-12 lg:py-20 pb-16 md:pb-32 lg:pb-48 relative z-10">
      {/* Text Content */}
      <div className="relative z-20">
        <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#3B3B3B] via-white to-[#3B3B3B] bg-clip-text text-transparent px-4 md:px-8">
          Your All-in-One Crypto Companion
        </h2>
        <p className="max-w-lg text-xs sm:text-sm md:text-base text-neutral-400 text-center mx-auto my-4 md:my-6 lg:my-8 px-4">
          Simplify crypto investing, trading, and portfolio management with
          cutting-edge tools designed for everyone—from beginners to pros.
        </p>
      </div>

      {/* Grid Background with Radial Overlay */}
      <div className="absolute inset-0 overflow-hidden mt-8 md:mt-16 lg:mt-36 z-0">
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "radial-gradient(circle, rgba(40, 40, 40, 0.8) 0%, rgba(20, 20, 20, 0.6) 30%, rgba(0, 0, 0, 0.4) 70%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
              opacity: 0.2,
            }}
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-20 scale-[0.9] transition-transform">
        <a
          href="#"
          className="px-4 py-2 cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center border-[0.6px] border-white/30 bg-gradient-to-b from-[#151515] to-[#151515] shadow-[inset_0px_6px_8px_0px_#FAFAFA40,inset_0px_-6px_8px_0px_#FAFAFA40] text-white h-10 md:h-12 lg:h-16 w-32 md:w-40 lg:w-48 rounded-full text-xs sm:text-sm md:text-base font-medium"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}
