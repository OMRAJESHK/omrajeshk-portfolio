'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQs: FAQItem[] = [
  {
    id: 'timeline',
    question: 'How long do projects typically take?',
    answer:
      'Small business websites usually take 2-4 weeks. Custom SaaS tools vary based on complexity. Bug fixes and automation work can be completed in days. I always provide a clear timeline after discussing your specific needs.',
  },
  {
    id: 'budget',
    question: 'What does a project cost?',
    answer:
      'Pricing depends on project scope. Simple websites start at reasonable rates, while custom SaaS tools and mobile apps are priced based on features and functionality. I offer transparent quotes upfront with no surprise costs.',
  },
  {
    id: 'support',
    question: 'Do you provide ongoing support?',
    answer:
      'Yes! I offer post-launch support to fix issues, add features, and optimize performance. We can discuss maintenance packages that fit your business needs and budget.',
  },
  {
    id: 'process',
    question: 'What is your development process?',
    answer:
      'I start with understanding your goals and requirements. Then I design and build with regular check-ins, deliver a working version for testing, gather feedback, and make final adjustments. Communication is clear throughout.',
  },
  {
    id: 'technology',
    question: 'What technologies do you use?',
    answer:
      'I specialize in React, Next.js, TypeScript, Node.js, and Tailwind CSS for modern web development. For mobile apps, I use React Native. I choose tools based on what works best for your project, not what\'s trendy.',
  },
  {
    id: 'revisions',
    question: 'Can I request changes after launch?',
    answer:
      'Absolutely! Launch is the beginning, not the end. I build with maintenance in mind and can quickly add features, adjust designs, or optimize performance. Minor adjustments are usually quick and inexpensive.',
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="slide-in">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
        Questions?
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-slate-50">
        Frequently asked questions
      </h2>
      <p className="mt-4 max-w-2xl text-slate-300">
        Got questions about how I work, pricing, or timelines? Here are answers
        to common questions from my clients.
      </p>

      <div className="mt-8 grid gap-3">
        {FAQs.map((faq) => (
          <button
            key={faq.id}
            onClick={() => toggleAccordion(faq.id)}
            className="w-full text-left rounded-2xl border border-slate-600 bg-slate-800 px-6 py-4 transition hover:bg-slate-700"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-50">{faq.question}</h3>
              <span
                className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}
              >
                <svg
                  className="h-5 w-5 text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </span>
            </div>
            {openId === faq.id && (
              <p className="mt-4 text-slate-300">{faq.answer}</p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
