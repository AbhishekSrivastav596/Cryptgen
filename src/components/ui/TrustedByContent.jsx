// components/TrustedBySection.jsx
import Image from "next/image";

const logos = [
  {
    alt: "Aceternity UI",
    src: "https://assets.aceternity.com/pro/logos/aceternity-ui.png",
  },
  {
    alt: "Gamity",
    src: "https://assets.aceternity.com/pro/logos/gamity.png",
  },
  {
    alt: "Host it",
    src: "https://assets.aceternity.com/pro/logos/hostit.png",
  },
  {
    alt: "Asteroid Kit",
    src: "https://assets.aceternity.com/pro/logos/asteroid-kit.png",
  },
];

export default function TrustedBySection() {
  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden">
      <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
        <h2 className="inline-block text-transparent bg-clip-text text-balance text-lg md:text-3xl font-semibold tracking-tight bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-4 mb-10 text-base md:text-lg text-neutral-500 font-sans max-w-lg mx-auto">
          Join the ranks of forward-thinking companies already leveraging our AI technology
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 w-full max-w-3xl mx-auto px-4">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center">
            <Image
              alt={logo.alt}
              src={logo.src}
              width={300}
              height={300}
              loading="lazy"
              className="w-full max-w-[200px] object-contain select-none filter invert"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
