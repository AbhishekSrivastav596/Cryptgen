import React from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "$0",
    subtitle: "Try For Free",
    note: "one-time",
    perks: [
      { label: "Basic Analytics", included: true },
      { label: "Community Access", included: true },
      { label: "Limited Storage", included: true },
      { label: "Priority Support", included: false },
      { label: "Custom Solutions", included: false },
    ],
    button: "Get Started",
    subtext: "Ideal for individuals getting started",
  },
  {
    title: "Pro",
    price: "$9.99",
    subtitle: "Best for Professionals",
    note: "/mo",
    perks: [
      { label: "Advanced Analytics", included: true },
      { label: "Priority Support", included: true },
      { label: "Unlimited Storage", included: true },
      { label: "Custom Solutions", included: false },
    ],
    button: "Upgrade to Pro",
    subtext: "Most popular choice",
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    subtitle: "Tailored Solutions",
    note: "",
    perks: [
      { label: "Custom Solutions", included: true },
      { label: "Dedicated Support", included: true },
      { label: "SLA Guarantee", included: true },
      { label: "Unlimited Team Members", included: true },
    ],
    button: "Contact Sales",
    subtext: "Get a custom quote for your team",
  },
];

const PlanCard = () => {
  return (
    <section className="py-16 px-4 bg-black text-white relative z-10">
      <div className="relative z-50 mx-auto mb-8 max-w-4xl text-center">
        <h2 className="inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
      </div>

      <p className="text-sm text-neutral-400 mt-4 px-4 max-w-lg text-center mx-auto">
        Simplify crypto investing, trading, and portfolio management with cutting-edge tools designed for everyone—from beginners to pros.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mt-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rounded-3xl bg-neutral-900 p-8 ring-1 ring-neutral-700 flex flex-col h-full relative shadow-md"
          >
            {plan.popular && (
              <div className="text-center -mt-12 mb-6">
                <span className="text-white text-sm px-4 py-1 rounded-[128px] bg-gradient-to-b from-[#393939] via-[#141414] to-[#303030] shadow-[0px_2px_6.4px_0px_rgba(0,0,0,0.60)]">
                  BUSY CREATORS' CHOICE
                </span>
              </div>
            )}

            <div className="mb-8">
              <div className="inline-flex items-center font-bold justify-center p-2 rounded-[10px] border border-[rgba(62,62,64,0.77)] bg-transparent">
                <h3 className="text-sm text-white">{plan.title}</h3>
              </div>
              <p className="text-md text-neutral-400 my-4">{plan.subtitle}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                {plan.note && <span className="text-neutral-400">{plan.note}</span>}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {plan.perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3">
                  {perk.included ? (
                    <Check className="h-5 w-5 text-neutral-400" />
                  ) : (
                    <X className="h-5 w-5 text-neutral-600" />
                  )}
                  <span
                    className={`text-sm ${
                      perk.included ? "text-neutral-300" : "text-neutral-500"
                    }`}
                  >
                    {perk.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <a
                className={`px-4 text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center border border-solid w-full py-3 rounded-xl text-white ${
                  plan.popular
                    ? "!bg-[linear-gradient(180deg,#B6B6B6_0%,#313131_100%)] hover:shadow-[0_4px_12px_0px_rgba(0,0,0,0.4)]"
                    : "bg-gradient-to-b from-neutral-700 to-neutral-800 hover:from-neutral-600 hover:to-neutral-700"
                }`}
              >
                {plan.button}
              </a>
              <div className="text-sm text-neutral-500 text-center mt-4">
                {plan.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanCard;
