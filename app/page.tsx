export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">DevMen</div>

          <div className="flex gap-3">
            <a
              className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/30"
              href="https://instagram.com/devmen.official"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              className="rounded-full px-4 py-2 text-sm font-semibold text-black"
              style={{ backgroundColor: "#FF9C89" }}
              href="https://wa.me/923408500000?text=Hi%20DevMen!%20I%20want%20a%20free%20demo%20website%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs"
              style={{ borderColor: "#470F0D", color: "#FF9C89" }}
            >
              Pakistan • Working Worldwide
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Websites that make businesses look legit — and get customers.
            </h1>

            <p className="mt-5 text-white/70 leading-relaxed">
              DevMen builds fast, clean websites for real businesses. We design, build,
              and optionally manage your site so you can focus on customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-xl px-5 py-3 text-sm font-semibold text-black"
                style={{ backgroundColor: "#FF9C89" }}
                href="https://wa.me/923408500000?text=Hi%20DevMen!%20I%20want%20a%20free%20demo%20website%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
              >
                Get a Free Demo
              </a>

              <a
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold hover:border-white/30"
                href="#work"
              >
                See Our Work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/70">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Fast Delivery
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Mobile-First
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Clean Design
              </span>
            </div>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            <div className="text-sm font-semibold" style={{ color: "#FF9C89" }}>
              Quick Contact
            </div>
            <p className="mt-2 text-sm text-white/70">
              Message us and we’ll build a free demo preview for your business.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                className="rounded-xl px-5 py-3 text-center text-sm font-semibold text-black"
                style={{ backgroundColor: "#FF9C89" }}
                href="https://wa.me/923408500000?text=Hi%20DevMen!%20I%20want%20a%20free%20demo%20website%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: +923408500000
              </a>

              <a
                className="rounded-xl border border-white/15 px-5 py-3 text-center text-sm font-semibold hover:border-white/30"
                href="https://instagram.com/devmen.official"
                target="_blank"
                rel="noreferrer"
              >
                Instagram: @devmen.official
              </a>
            </div>

            <div id="work" className="mt-10">
              <div className="text-sm font-semibold">Featured Work</div>
              <div className="mt-4 grid gap-3">
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-sm font-semibold">Barber Studio</div>
                  <div className="mt-1 text-xs text-white/60">
                    Clean booking + WhatsApp inquiries
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-sm font-semibold">Cafe & Bakery</div>
                  <div className="mt-1 text-xs text-white/60">
                    Menu + location + Instagram integration
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-sm font-semibold">Gym & Fitness</div>
                  <div className="mt-1 text-xs text-white/60">
                    Membership leads + class schedule
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-white/50">
              © {new Date().getFullYear()} DevMen — Websites built for real businesses. 
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
