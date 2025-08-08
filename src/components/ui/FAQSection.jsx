"use client"; // required if using inside `app/` directory

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What models does AI Assist leverage?",
    answer:
      "AI Assist uses models such as GPT-4, Gemini, and custom fine-tuned transformers for specific domains.",
  },
  {
    question: "How does AI Assist use my data?",
    answer:
      "Your data is securely processed and never stored without consent. It's used only to improve your AI experience.",
  },
  {
    question: "How accurate are AI Assist's responses?",
    answer:
      "Responses are highly accurate for supported tasks but may vary depending on complexity and data quality.",
  },
  {
    question: "How much does AI Assist cost?",
    answer:
      "It offers a free tier and a Pro plan starting at $9.99/month with advanced features.",
  },
  {
    question: "How do I get access to AI Assist?",
    answer:
      "You can sign up on our platform and start using AI Assist right from your dashboard.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-7xl mx-auto my-10 md:my-20 py-10 md:py-20 px-4 md:px-8">
      <div className="text-center max-w-4xl mx-auto relative z-20 mb-4 text-balance">
        <h2 className="inline-block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
          Let's Answer Your Questions
        </h2>
      </div>
      <p className="max-w-lg text-sm text-center mx-auto mt-4 text-neutral-400 px-4 md:px-0">
        Simplify crypto investing, trading, and portfolio management with cutting-edge tools designed for everyone—from beginners to pros.
      </p>

      <div className="mt-10 md:mt-20 max-w-3xl mx-auto divide-y divide-neutral-800">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="cursor-pointer py-4 md:py-6 transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-start justify-between">
              <div className="pr-8 md:pr-12">
                <h3 className="text-base md:text-lg font-medium text-neutral-200">
                  {faq.question}
                </h3>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 mt-2 text-neutral-400" : "max-h-0"
              }`}
            >
              <p className="text-sm md:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
