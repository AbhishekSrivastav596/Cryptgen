"use client";

import { FaYoutube, FaSlack, FaXTwitter } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";
import Image from "next/image";
import { GlowingEffect } from "./glowing-effect";
import { CardStack } from "./card-stack";

const USERS = [
  "/person1.webp",
  "/person2.webp",
  "/person3.webp",
  "/person4.webp",
  "/person5.webp",
  "/person6.webp",
];

const testimonials = [
  {
    id: 1,
    name: "Elon Musk",
    designation: "CEO, SpaceX",
    content:
      "I don't like this Twitter thing, deleting it right away because yolo. Instead, I would like to call it X.com so that it can easily be confused with adult sites.",
  },
  {
    id: 2,
    name: "Jane Doe",
    designation: "Crypto Trader",
    content:
      "This platform changed my entire approach to crypto investing. Clean, simple, powerful.",
  },
  {
    id: 3,
    name: "Satoshi Nakamoto",
    designation: "Blockchain Pioneer",
    content:
      "The decentralization ethos lives strong here. Respect to the team building this.",
  },
];

export default function AdoptionAndTestimonial() {
  return (
    <section className="grid md:grid-cols-2 gap-6 w-full max-w-7xl px-4 mx-auto my-12">
      <div className="relative rounded-2xl bg-neutral-900 p-6 shadow-xl flex flex-col gap-4 justify-between overflow-hidden border border-neutral-800">
        <GlowingEffect
          blur={10}
          spread={60}
          proximity={150}
          inactiveZone={0.7}
          borderWidth={3}
          movementDuration={2}
          glow={true}
        />

        <div className="flex gap-4 mb-4">
          <IconButton icon={<FaYoutube />} />
          <IconButton icon={<FaSlack />} />
          <IconButton icon={<FaXTwitter />} />
          <IconButton icon={<SiNotion />} />
        </div>

        <h2 className="text-white text-5xl font-bold tracking-tight">
          542,000{" "}
          <span className="text-neutral-400 font-medium">Users</span>
        </h2>

        <div className="grid grid-cols-3 gap-2 w-full max-w-xs my-4">
          {USERS.map((src, i) => (
            <div
              key={i}
              className="w-16 h-16 overflow-hidden rounded-md bg-neutral-800 transform transition-transform duration-300 hover:rotate-6"
            >
              <Image src={src} alt={`user-${i}`} width={64} height={64} />
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold">
            Major User Adoption
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            Join our growing community of over 500,000 users who trust our
            platform for their crypto trading and investment needs.
          </p>
        </div>
      </div>

      <div className="relative rounded-2xl bg-neutral-900 p-6 shadow-xl text-white overflow-hidden border border-neutral-800">
        <GlowingEffect
          blur={10}
          spread={60}
          proximity={150}
          inactiveZone={0.7}
          borderWidth={3}
          movementDuration={2}
          glow={true}
        />
        <h3 className="text-3xl font-semibold mb-2">
          People <span className="text-neutral-400">love us</span>
        </h3>
        <p className="text-sm text-neutral-400 mb-6">
          See what our users are saying about their experience with our platform
          and why they love using it.
        </p>

        <div className="bg-transparent p-4 rounded-xl relative">
          <CardStack
            items={testimonials}
            offset={10}
            scaleFactor={0.06}
            cardClassName="bg-neutral-800/80 text-white"
          />
        </div>
      </div>
    </section>
  );
}

function IconButton({ icon }) {
  return (
    <div className="bg-neutral-800 text-white rounded-lg shadow-md p-3 transition-all duration-200 hover:bg-neutral-700 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-xl">{icon}</div>
    </div>
  );
}
