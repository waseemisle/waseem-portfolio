const systems = [
  "Shopify",
  "WooCommerce",
  "Magento",
  "BigCommerce",
  "Salesforce",
  "HubSpot",
  "Amazon",
  "QuickBooks",
  "Square",
  "Joor",
  "SOS Inventory",
  "Stripe",
];

const projects = [
  {
    title: "Shopify • NetSuite",
    summary: "Commerce automation and order synchronization across storefronts and ERP workflows.",
    details: ["Sales orders", "Products", "Inventory", "Customers", "Pricing"],
  },
  {
    title: "WooCommerce • NetSuite",
    summary: "Connector-led retail operations with payments, inventory, and order visibility.",
    details: ["Orders", "Inventory", "Customer payments", "Products"],
  },
  {
    title: "BigCommerce • NetSuite",
    summary: "Enterprise-grade product and order data exchange for multi-channel growth.",
    details: ["Products", "Orders", "Inventory", "Customers", "Price levels"],
  },
  {
    title: "Magento 2 • NetSuite",
    summary: "Automotive commerce integrations spanning Magento 2 and ERP systems.",
    details: ["Products", "Orders", "Inventory", "Customers", "Pricing"],
  },
  {
    title: "Amazon • NetSuite",
    summary: "Marketplace synchronization for catalog, orders, and inventory data.",
    details: ["Products", "Orders", "Inventory", "Customers", "Pricing"],
  },
  {
    title: "Magento • Shopify • NetSuite",
    summary: "High-volume integration design for retail and omnichannel synchronization.",
    details: ["Products", "Orders", "Inventory", "Customers"],
  },
  {
    title: "Shopify • Joor • NetSuite",
    summary: "Fashion and wholesale data coordination with modern commerce platforms.",
    details: ["Products", "Orders", "Inventory", "Customers"],
  },
  {
    title: "Square • NetSuite",
    summary: "Transaction, item, and financial data synchronization for retail operations.",
    details: ["Transactions", "Items", "Journal entries", "Inventory"],
  },
  {
    title: "Joor • NetSuite",
    summary: "Product and order sync for wholesale fashion distribution flows.",
    details: ["Sales orders", "Products", "UPC", "Customers"],
  },
  {
    title: "SOS Inventory • Stripe • NetSuite",
    summary: "Inventory and payments automation across warehouse and commerce systems.",
    details: ["Sales orders", "Products", "Inventory", "Customers"],
  },
  {
    title: "QuickBooks • NetSuite",
    summary: "Financial data synchronization for reconciliation and reporting.",
    details: ["Payments", "Reporting", "Financial sync"],
  },
  {
    title: "Salesforce • NetSuite",
    summary: "Revenue operations alignment with CRM and ERP workflows.",
    details: ["Opportunities", "Estimates", "Customers"],
  },
  {
    title: "HubSpot • NetSuite",
    summary: "Customer lifecycle automation across sales and operational systems.",
    details: ["Contacts", "Companies", "Deals"],
  },
];

const experience = [
  {
    role: "NetSuite Administrator",
    company: "Shureprint",
    period: "Nov 2025 – Present",
    bullets: [
      "Implemented NetSuite and BigCommerce integrations for customer, product, inventory, pricing, and order sync.",
      "Built accounting and ERP automations with QuickBooks and SOS Inventory integration workflows.",
    ],
  },
  {
    role: "Senior Software Product Engineer",
    company: "Folio3 Software",
    period: "Jan 2023 – Nov 2025",
    bullets: [
      "Delivered enterprise integrations across Shopify, WooCommerce, Magento, BigCommerce, Salesforce, HubSpot, Amazon, Joor, and more.",
      "Developed SuiteScript 2.x solutions and reusable integration frameworks for production environments.",
    ],
  },
  {
    role: "NetSuite Consultant",
    company: "Amyris",
    period: "Dec 2021 – Mar 2023",
    bullets: [
      "Supported ERP, CRM, and supply chain integrations for commerce and finance use cases.",
      "Built dashboards and analytics to improve operational visibility and reporting.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3eb] text-[#111111]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <header className="mb-10 flex items-center justify-between border-b border-black/10 pb-5 text-sm uppercase tracking-[0.25em] text-black/70">
          <a href="#top" className="font-medium text-black">
            WASEEM AKHTAR
          </a>
          <nav className="flex gap-5">
            <a href="#about" className="transition hover:text-black">
              About
            </a>
            <a href="#projects" className="transition hover:text-black">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-black">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </nav>
        </header>

        <div id="top" className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-black/60">
              Senior NetSuite Technical Consultant
            </p>
            <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.02em] sm:text-5xl lg:text-7xl">
              I design and build integrations that keep commerce, finance, and operations in sync.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
              With 7+ years of experience, I deliver NetSuite solutions across SuiteScript, REST APIs, Celigo, Boomi, and custom middleware for global retail, logistics, healthcare, and eCommerce environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                View Selected Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium text-black transition hover:bg-black/5"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur">
            <div className="mb-8 h-32 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_#f7c79a,_transparent_60%)]" />
            <p className="text-sm uppercase tracking-[0.3em] text-black/60">Profile</p>
            <h2 className="mt-3 text-2xl font-semibold text-black">
              Waseem Akhtar
            </h2>
            <p className="mt-3 text-base leading-7 text-black/70">
              Senior NetSuite Technical Consultant | SuiteScript Developer | Shopify • Celigo • Boomi • REST APIs
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {systems.map((system) => (
                <span key={system} className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-black/70">
                  {system}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-black/10 bg-white/70 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-black/60">About</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                I build scalable automation solutions that reduce manual effort and improve business performance.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-black/70">
              <p>
                I have delivered enterprise ERP implementations and custom integration platforms across manufacturing, retail, wholesale distribution, logistics, healthcare, and eCommerce industries.
              </p>
              <p>
                My work spans SuiteScript development, SuiteFlow automation, SuiteAnalytics reporting, SDF, RESTlets, Suitelets, User Events, Map/Reduce, Scheduled Scripts, and API-driven integrations with external systems.
              </p>
              <p>
                I am especially effective in translating complex requirements into reliable, production-ready integrations that connect NetSuite with commerce platforms, accounting systems, CRM tools, fulfillment providers, and warehouse operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-black/60">Selected Work</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                Selected integrations and solutions delivered
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/70">
              Each engagement focuses on dependable data exchange, governance, and business continuity across the platforms that matter most.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[1.5rem] border border-black/10 bg-white/70 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                <p className="text-sm uppercase tracking-[0.3em] text-black/50">External Systems</p>
                <h3 className="mt-4 text-xl font-semibold text-black">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/70">{project.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-black/70">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-black/50" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-black/10 bg-white/70 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-black/60">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Leading technical delivery across enterprise integrations and product engineering.
            </h2>
          </div>

          <div className="space-y-6">
            {experience.map((item) => (
              <article key={item.role} className="rounded-[1.5rem] border border-black/10 bg-[#fcfbf7] p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-black">{item.role}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.25em] text-black/60">{item.company}</p>
                  </div>
                  <p className="text-sm text-black/60">{item.period}</p>
                </div>
                <ul className="mt-5 space-y-2 text-base leading-7 text-black/70">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-[#111111] p-8 text-white sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Let&apos;s build resilient systems that move your business forward.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                Fill out the form below and I&apos;ll get back to you about your NetSuite, integration, or automation project.
              </p>
            </div>
            <div className="space-y-4 text-base text-white/80">
              <a href="mailto:waseemisle@gmail.com" className="block transition hover:text-white">
                waseemisle@gmail.com
              </a>
              <a href="tel:+923212134142" className="block transition hover:text-white">
                +92 321 2134142
              </a>
              <a href="https://www.linkedin.com/in/waseemakhtarr/" target="_blank" rel="noreferrer" className="block transition hover:text-white">
                LinkedIn / waseemakhtarr
              </a>
            </div>
          </div>

          <form
            action="mailto:waseemisle@gmail.com"
            method="post"
            encType="text/plain"
            className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 sm:p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-white/80">
                <span className="mb-2 block">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-[#161616] px-4 py-3 text-white outline-none placeholder:text-white/40"
                />
              </label>
              <label className="text-sm text-white/80">
                <span className="mb-2 block">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#161616] px-4 py-3 text-white outline-none placeholder:text-white/40"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm text-white/80">
              <span className="mb-2 block">What are you working on?</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your NetSuite, integration, or automation goals."
                className="min-h-[140px] w-full rounded-xl border border-white/10 bg-[#161616] px-4 py-3 text-white outline-none placeholder:text-white/40"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#111111] transition hover:bg-white/90"
              >
                Send message
              </button>
              <a
                href="mailto:waseemisle@gmail.com"
                className="text-sm text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-white"
              >
                Open email directly
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
