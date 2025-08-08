"use client";
import { GlowingEffect } from "./glowing-effect";
import { FaLinkedin, FaReddit, FaYoutube, FaGamepad } from "react-icons/fa";
import WorldMap from "./world-map";
import AdoptionAndTestimonial from "./AdoptionAndTestimonial";

export default function FeaturesSection() {
  return (
    <div
      id="product"
      className="w-full max-w-7xl mx-auto py-4 px-4 md:px-8 md:my-20 md:py-20"
    >
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center text-lg font-semibold tracking-tight text-neutral-300 md:text-3xl">
        <h2 className="inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
          Features & Benefits
        </h2>
      </div>

      <p className="max-w-lg text-sm text-center mx-auto mt-4 text-neutral-400">
        Simplify crypto investing, trading, and portfolio management with
        cutting-edge tools designed for everyone—from beginners to pros.
      </p>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="group isolate rounded-2xl bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col relative justify-between">
          <GlowingEffect
            blur={10}
            spread={60}
            proximity={150}
            inactiveZone={0.7}
            borderWidth={5}
            movementDuration={2}
            glow={true}
            disabled={false}
          />
          <div className="relative flex items-center justify-center h-[300px]">
            <div className="absolute rounded-full border border-neutral-700 w-[280px] h-[280px]" />
            <div className="absolute rounded-full border border-neutral-800 w-[200px] h-[200px]" />
            <div className="absolute rounded-full border border-neutral-900 w-[120px] h-[120px]" />

            <div className="absolute animate-spin-slow w-[280px] h-[280px] ">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <IconWrapper icon={<FaLinkedin />} />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                <IconWrapper icon={<FaYoutube />} />
              </div>
              <div className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2">
                <IconWrapper icon={<FaGamepad />} />
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <IconWrapper icon={<FaReddit />} />
              </div>
            </div>
          </div>

          <div className="p-6 absolute bottom-0">
            <h3 className="inline-block text-xl md:text-4xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
              Hosting over<br /> the edge
            </h3>
            <p className="font-sans max-w-sm text-sm font-normal tracking-tight mt-2 text-neutral-400">
              With our edge network, we host your website by going into each
              city by ourselves.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-neutral-900 shadow-inner">
          <WorldMap/>
           <GlowingEffect
            blur={10}
            spread={60}
            proximity={150}
            inactiveZone={0.7}
            borderWidth={5}
            movementDuration={2}
            glow={true}
            disabled={false}
          />


        </div>
        <div className="lg:col-span-2">
          <AdoptionAndTestimonial />
          
        </div>

     
      </div>
    </div>
  );
}

function IconWrapper({ icon }) {
  return (
    <div className="bg-neutral-900 text-white rounded-lg shadow-lg p-3">
      <div className="text-xl">{icon}</div>
    </div>
  );
}
