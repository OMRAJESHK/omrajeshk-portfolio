import Image from "next/image";
import ContactForm from "./components/ContactForm";
import FAQAccordion from "./components/FAQAccordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 md:px-12">
        <section className="grid gap-10 md:grid-cols-[1.25fr_0.95fr] md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Portfolio
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Fast, reliable, and designed to help you get more customers
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              I help small businesses launch clean websites, fix bugs, automate
              workflows, and improve search visibility.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Start a project
              </a>
              <a
                href="mailto:eminantcoding@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Email eminantcoding@gmail.com
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Services
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  Website development
                </h2>
                <p className="mt-3 text-slate-600">
                  Design and build landing pages, small business sites, and
                  service pages that load fast and look professional.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  Bugfixes & automation
                </h2>
                <p className="mt-3 text-slate-600">
                  Resolve issues, automate repetitive tasks, and make your web
                  workflows more reliable.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  SEO improvements
                </h2>
                <p className="mt-3 text-slate-600">
                  Boost visibility with practical SEO updates for better search
                  rankings and more customer leads.
                </p>
              </div>
              {/* <div className="rounded-3xl bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  SaaS & mobile apps
                </h2>
                <p className="mt-3 text-slate-600">
                  Build SaaS tools, dashboards, or mobile app concepts that
                  support small business growth.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full bg-slate-200 flex-shrink-0">
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Introduction
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Hi, I'm Om Rajesh K
              </h2>
              <p className="mt-2 text-md font-light text-slate-500">
                7+ years of experience 
              </p>
              <p className="mt-4 text-slate-600">
                A full-stack developer focused on small business websites,
                SaaS tools, mobile apps, SEO, and automation.
              </p>
              <p className="mt-4 text-slate-600">
                I keep designs clean, projects
                efficient, and outcomes easy to manage.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Full-stack skills
                  </p>
                  <div className="mt-3 space-y-4">
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li className="text-slate-600">React Js, Next.js</li>
                      <li className="text-slate-600">TypeScript</li>
                      <li className="text-slate-600">Node.js, Express</li>
                      <li className="text-slate-600">Mongo DB</li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Mobile app development
                  </p>
                  <div className="mt-3 space-y-4">
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li className="text-slate-600">React Native apps</li>
                      <li className="text-slate-600">Service Listings</li>
                      <li className="text-slate-600">Customer Engagement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Solutions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Focused work that solves real business needs.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Every project is built to make your life easier: clear messaging,
              faster performance, reliable support, and better search
              visibility.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Fast website launches
                </h3>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li className="text-slate-600">
                    Single-page Sites
                  </li>
                  <li className="text-slate-600">
                    Multi-page Business
                  </li>
                  <li className="text-slate-600">
                    Delivering a polished online presence quickly.
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Reliable bug support
                </h3>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li className="text-slate-600">Fix issues</li>
                  <li className="text-slate-600">Improve stability</li>
                  <li className="text-slate-600">
                    Keep your site running smoothly
                  </li>
                </ul>
              </div>
              
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm col-span-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  SEO that works
                </h3>
                <p className="mt-3 text-slate-600">
                  Practical SEO updates that help customers discover your
                  business online.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Experience
            </p>
            <div className="mt-6 space-y-5 text-slate-700">
              <div>
                <p className="text-4xl font-semibold text-slate-900">
                  Dependable support
                </p>
                <p className="mt-3 text-slate-600">
                  I work with small businesses to turn ideas into practical,
                  easy-to-manage digital solutions.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-slate-900">
                  Clear communication
                </p>
                <p className="mt-3 text-slate-600">
                  Expect straightforward planning, scope clarity, and reliable
                  delivery.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-slate-900">
                  Business-first outcomes
                </p>
                <p className="mt-3 text-slate-600">
                  No unnecessary features—just solutions that make your business
                  work better online.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Projects completed
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Cosmic Ocean
              </h3>
              <p className="mt-3 text-slate-600">
                A SaaS tool for space enthusiasts integrated with NASA's API.
              </p>
              <a href="https://cosmic-ocean.vercel.app" className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 hover:underline" target="_self" rel="noopener noreferrer">
                View live 
              </a>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                SaaS tools
              </h3>
              <p className="mt-3 text-slate-600">
                Simple dashboards and admin tools that help teams manage
                workflows and customer data.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Mobile app support
              </h3>
              <p className="mt-3 text-slate-600">
                Mobile app ideas, landing pages, and support for app-focused
                businesses.
              </p>
            </div>
          </div>
        </section>

        <FAQAccordion />

        <section
          id="contact"
          className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Let’s discuss your next website or automation project.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Send your details below and I’ll reply by email at{" "}
            <span className="font-semibold text-slate-900">
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
