"use client";

import Image from "next/image";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import FAQAccordion from "./components/FAQAccordion";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.slide-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 md:px-12">
        <section className="grid gap-10 md:grid-cols-[1.25fr_0.95fr] md:items-center slide-in">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Powered by AI
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Fast, reliable, and designed to help you get more customers
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I help small businesses launch clean websites, fix bugs, automate
              workflows, and improve search visibility.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Start a project
              </a>
              <a
                href="mailto:eminantcoding@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
              >
                Email eminantcoding@gmail.com
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Services
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl bg-slate-700 p-5">
                <h2 className="text-lg font-semibold text-slate-50">
                  Website development
                </h2>
                <p className="mt-3 text-slate-300">
                  Design and build landing pages, small business sites, and
                  service pages that load fast and look professional.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-700 p-5">
                <h2 className="text-lg font-semibold text-slate-50">
                  Bugfixes & automation
                </h2>
                <p className="mt-3 text-slate-300">
                  Resolve issues, automate repetitive tasks, and make your web
                  workflows more reliable.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-700 p-5">
                <h2 className="text-lg font-semibold text-slate-50">
                  SEO improvements
                </h2>
                <p className="mt-3 text-slate-300">
                  Boost visibility with practical SEO updates for better search
                  rankings and more customer leads.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8 shadow-sm slide-in">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full bg-slate-700 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700">
                  <Image
                    src="/profile.jpg"
                    alt="Profile picture of a developer"
                    width={260}
                    height={260}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Introduction
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-50">
                Hi, I'm Om Rajesh K
              </h2>
              <p className="mt-2 text-md font-light text-slate-400">
                7+ years of experience 
              </p>
              <p className="mt-4 text-slate-300">
                A full-stack developer focused on small business websites,
                SaaS tools, mobile apps, SEO, and automation.
              </p>
              <p className="mt-4 text-slate-300">
                I keep designs clean, projects
                efficient, and outcomes easy to manage.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-600 bg-slate-700 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Full-stack skills
                  </p>
                  <div className="mt-3 space-y-4">
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li className="text-slate-300">React Js, Next.js</li>
                      <li className="text-slate-300">TypeScript</li>
                      <li className="text-slate-300">Node.js, Express</li>
                      <li className="text-slate-300">Mongo DB</li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-600 bg-slate-700 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Mobile app development
                  </p>
                  <div className="mt-3 space-y-4">
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li className="text-slate-300">React Native apps</li>
                      <li className="text-slate-300">Service Listings</li>
                      <li className="text-slate-300">Customer Engagement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8 shadow-sm slide-in">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Tech Stack
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50">
            Technologies I Work With
          </h2>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3 list-disc list-inside text-slate-300">
            <li>HTML</li>
            <li>Next JS</li>
            <li>Firebase</li>
            <li>CSS</li>
            <li>MongoDB</li>
            <li>React Native</li>
            <li>Node JS</li>
            <li>JavaScript</li>
            <li>Express</li>
            <li>React JS</li>
            <li>Responsive UI</li>
            <li>Python</li>
          </ul>
        </section>
        <section className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start slide-in">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Solutions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-50">
              Focused work that solves real business needs.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Every project is built to make your life easier: clear messaging,
              faster performance, reliable support, and better search
              visibility.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-50">
                  Fast website launches
                </h3>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li className="text-slate-300">
                    Single-page Sites
                  </li>
                  <li className="text-slate-300">
                    Multi-page Business
                  </li>
                  <li className="text-slate-300">
                    Delivering a polished online presence quickly.
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-50">
                  Reliable bug support
                </h3>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li className="text-slate-300">Fix issues</li>
                  <li className="text-slate-300">Improve stability</li>
                  <li className="text-slate-300">
                    Keep your site running smoothly
                  </li>
                </ul>
              </div>
              
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-sm col-span-2">
                <h3 className="text-lg font-semibold text-slate-50">
                  SEO that works
                </h3>
                <p className="mt-3 text-slate-300">
                  Practical SEO updates that help customers discover your
                  business online.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Experience
            </p>
            <div className="mt-6 space-y-5 text-slate-300">
              <div>
                <p className="text-4xl font-semibold text-slate-50">
                  Dependable support
                </p>
                <p className="mt-3 text-slate-300">
                  I work with small businesses to turn ideas into practical,
                  easy-to-manage digital solutions.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-slate-50">
                  Clear communication
                </p>
                <p className="mt-3 text-slate-300">
                  Expect straightforward planning, scope clarity, and reliable
                  delivery.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-slate-50">
                  Business-first outcomes
                </p>
                <p className="mt-3 text-slate-300">
                  No unnecessary features—just solutions that make your business
                  work better online.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="slide-in">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Projects completed
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-50">
                Cosmic Ocean
              </h3>
              <p className="mt-3 text-slate-300">
                A SaaS tool for space enthusiasts integrated with NASA's API.
              </p>
              <a href="https://cosmic-ocean.vercel.app" className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-400 hover:underline" target="_self" rel="noopener noreferrer">
                View live 
              </a>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-50">
                SaaS tools
              </h3>
              <p className="mt-3 text-slate-300">
                Simple dashboards and admin tools that help teams manage
                workflows and customer data.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-50">
                Mobile app support
              </h3>
              <p className="mt-3 text-slate-300">
                Mobile app ideas, landing pages, and support for app-focused
                businesses.
              </p>
            </div>
          </div>
        </section>

        <FAQAccordion />

        <section
          id="contact"
          className="rounded-[2rem] border border-slate-700 bg-slate-800 p-10 shadow-sm slide-in"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50">
            Let's discuss your next website or automation project.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Send your details below and I'll reply by email at{" "}
            <span className="font-semibold text-indigo-400">
              eminantcoding@gmail.com
            </span>
            .
          </p>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
