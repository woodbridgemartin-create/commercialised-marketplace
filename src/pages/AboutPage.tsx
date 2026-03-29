import { Link } from '@tanstack/react-router'
import { ArrowRight, Building2, MapPin, Mail } from 'lucide-react'

const values = [
  { title: 'Trusted Connections', desc: 'We carefully curate both the opportunities submitted and the partners who access them, ensuring quality on both sides.' },
  { title: 'UK-Based Expertise', desc: 'We are operated by a UK company with deep experience in commercial growth, business development and lead generation.' },
  { title: 'Structured Process', desc: 'Every opportunity goes through a review and structuring process before being shared with relevant partners.' },
  { title: 'Scalable Collaboration', desc: 'We believe in building long-term commercial relationships, not one-off transactions.' },
]

export function AboutPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <div style={{ background: 'hsl(215 28% 17%)' }} className="py-24 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 96% 70%)' }}>About</p>
        <h1
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}
        >
          About Commercialised
        </h1>
        <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
          A UK-based marketplace connecting businesses with the expertise they need to bring products, technology and services to market.
        </p>
      </div>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 80% 40%)' }}>Our Mission</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}>
                Bridging the gap between ideas and commercial outcomes
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'hsl(220 9% 46%)' }}>
                Many businesses have valuable products, technologies or services that simply have not found the right commercialisation path. At the same time, expert growth agencies, consultants and specialists are looking for qualified projects to work on.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'hsl(220 9% 46%)' }}>
                Commercialised exists to connect these two groups through a structured, professional marketplace designed to drive real commercial outcomes.
              </p>
            </div>
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'hsl(43 96% 56% / 0.08)', border: '1px solid hsl(43 96% 56% / 0.25)' }}
            >
              <p className="text-2xl font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}>
                "Turn Opportunities Into Revenue"
              </p>
              <p className="text-sm" style={{ color: 'hsl(220 9% 55%)' }}>
                Our platform is built to make commercialisation accessible, structured and effective for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'hsl(215 14% 97%)' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 80% 40%)' }}>Our Principles</p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(v => (
              <div key={v.title} className="p-6 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-base mb-2" style={{ color: 'hsl(215 28% 17%)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 9% 46%)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 80% 40%)' }}>The Company</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}>
              Operated by Leadsopedia Limited
            </h2>
            <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'hsl(220 9% 46%)' }}>
              Commercialised is operated by Leadsopedia Limited, a UK-registered company with extensive experience in business development, lead generation and commercial growth strategy.
            </p>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ background: 'hsl(215 28% 17%)', color: 'rgba(255,255,255,0.75)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-3">
                <Building2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'hsl(43 96% 56%)' }} />
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'hsl(43 96% 70%)' }}>Company</p>
                  <p className="text-sm text-white font-medium">Leadsopedia Limited</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Company No: 13145058</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'hsl(43 96% 56%)' }} />
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'hsl(43 96% 70%)' }}>Registered Address</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    5 Brayford Square<br />London, England, E1 0SG
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'hsl(43 96% 56%)' }} />
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'hsl(43 96% 70%)' }}>Email</p>
                  <a
                    href="mailto:hello@commercialised.co.uk"
                    className="text-sm hover:underline"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    hello@commercialised.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'hsl(43 96% 56%)' }} className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}>
          Ready to get started?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link to="/submit-opportunity" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm no-underline" style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}>
            Submit Opportunity <ArrowRight size={16} />
          </Link>
          <Link to="/become-a-partner" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm no-underline border-2" style={{ borderColor: 'hsl(215 28% 17%)', color: 'hsl(215 28% 17%)' }}>
            Become a Partner
          </Link>
        </div>
      </section>
    </div>
  )
}
