import { Link } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2, Clock, Users, TrendingUp, Lightbulb, Shield, Zap, Star } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Submit Opportunity',
    desc: 'Businesses describe what they want to commercialise — a product, technology, service, or growth opportunity.',
  },
  {
    number: '02',
    title: 'Opportunity Review',
    desc: 'The platform reviews and prepares the opportunity, ensuring it is structured and positioned for the right partners.',
  },
  {
    number: '03',
    title: 'Partner Introduction',
    desc: 'Relevant commercialisation partners receive the opportunity and can respond with proposals or introductions.',
  },
]

const audiences = [
  { icon: <Lightbulb size={20} />, label: 'Startups and founders' },
  { icon: <Zap size={20} />, label: 'AI and SaaS builders' },
  { icon: <TrendingUp size={20} />, label: 'Businesses with products not scaling' },
  { icon: <Clock size={20} />, label: 'Companies with dormant opportunities' },
  { icon: <Star size={20} />, label: 'Innovation teams' },
]

const partnerBenefits = [
  'Receive qualified, pre-reviewed commercialisation opportunities',
  'Connect with businesses ready to scale or launch',
  'Access projects across multiple sectors and industries',
  'Early partner access to marketplace opportunities',
  'Build your portfolio with diverse clients',
]

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'hsl(215 28% 17%)' }}>
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'hsl(43 96% 56%)', filter: 'blur(80px)', transform: 'translate(30%, -30%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8 border"
            style={{
              background: 'rgba(255,255,255,0.07)',
              borderColor: 'rgba(255,255,255,0.15)',
              color: 'hsl(43 96% 70%)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(43 96% 56%)' }} />
            UK-Based Commercialisation Marketplace
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
            style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}
          >
            Turn Opportunities<br />
            <span style={{ color: 'hsl(43 96% 56%)' }}>Into Revenue</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Commercialised connects businesses that want to commercialise products, services, technology and growth opportunities with trusted partners who can help bring them to market and scale successfully.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/submit-opportunity"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95 no-underline"
              style={{ background: 'hsl(43 96% 56%)', color: 'hsl(215 28% 17%)' }}
            >
              Submit Opportunity
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/become-a-partner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:bg-white/10 active:scale-95 no-underline border"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'hsl(0 0% 95%)' }}
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Marketplace Launching Banner */}
      <section style={{ background: 'hsl(43 96% 56% / 0.08)', borderTop: '1px solid hsl(43 96% 56% / 0.2)', borderBottom: '1px solid hsl(43 96% 56% / 0.2)' }}>
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border"
            style={{ background: 'hsl(43 96% 56% / 0.15)', borderColor: 'hsl(43 96% 56% / 0.4)', color: 'hsl(37 80% 42%)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(37 80% 42%)' }} />
            Marketplace Launching
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}
          >
            Commercialised Marketplace is currently onboarding early partners and businesses
          </h2>
          <p className="text-base leading-relaxed max-w-3xl mx-auto" style={{ color: 'hsl(215 25% 35%)' }}>
            We are building a trusted network of commercialisation experts, agencies and growth partners who want access to new opportunities from companies actively looking to commercialise and scale.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 80% 40%)' }}>Process</p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}
            >
              How Commercialised Works
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'hsl(220 9% 46%)' }}>
              A simple, structured process connecting businesses with the right commercialisation expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative p-8 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: 'hsl(220 13% 91%)',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                }}
              >
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 -right-4 z-10 w-8 h-8 rounded-full border-2 bg-background flex items-center justify-center"
                    style={{ borderColor: 'hsl(43 96% 56%)' }}
                  >
                    <ArrowRight size={14} style={{ color: 'hsl(43 96% 56%)' }} />
                  </div>
                )}
                <div
                  className="text-xs font-bold tracking-wider mb-4 inline-block px-2 py-0.5 rounded"
                  style={{ background: 'hsl(43 96% 56% / 0.15)', color: 'hsl(37 80% 40%)' }}
                >
                  Step {step.number}
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: 'hsl(215 28% 17%)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 9% 46%)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ background: 'hsl(215 14% 97%)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 80% 40%)' }}>Businesses</p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}
              >
                Who the Platform is For
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'hsl(220 9% 46%)' }}>
                Whether you are launching something new or have an existing product that has not yet reached its potential, Commercialised is built for businesses ready to move.
              </p>
              <Link
                to="/submit-opportunity"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:brightness-95 active:scale-95 no-underline"
                style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}
              >
                Submit Your Opportunity
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audiences.map(item => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(43 96% 56% / 0.15)', color: 'hsl(37 70% 38%)' }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'hsl(215 28% 17%)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Partners */}
      <section style={{ background: 'hsl(215 28% 17%)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 96% 70%)' }}>Partners</p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}
              >
                For Commercialisation Partners
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                If you are a growth agency, innovation consultant, venture builder or product launch specialist, Commercialised gives you direct access to qualified opportunities from businesses ready to act.
              </p>
              <Link
                to="/become-a-partner"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95 no-underline"
                style={{ background: 'hsl(43 96% 56%)', color: 'hsl(215 28% 17%)' }}
              >
                Apply as a Partner
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              {partnerBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'hsl(43 96% 56%)' }} />
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield size={18} style={{ color: 'hsl(43 80% 40%)' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'hsl(43 80% 40%)' }}>Trusted Platform</span>
          </div>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'hsl(215 25% 35%)' }}>
            Operated by an experienced UK company specialising in business development, lead generation and commercial growth.
          </p>
          <div
            className="inline-block px-6 py-4 rounded-xl border text-sm"
            style={{ background: 'hsl(215 14% 97%)', borderColor: 'hsl(220 13% 91%)', color: 'hsl(220 9% 46%)' }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <div>
                <span className="font-semibold" style={{ color: 'hsl(215 28% 17%)' }}>Leadsopedia Limited</span>
                <span className="mx-2 opacity-40">·</span>
                Company No: 13145058
              </div>
              <div className="hidden sm:block opacity-30">|</div>
              <div>5 Brayford Square, London, E1 0SG</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: 'hsl(43 96% 56%)' }} className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}
          >
            Ready to commercialise your opportunity?
          </h2>
          <p className="text-sm mb-8" style={{ color: 'hsl(215 28% 30%)' }}>
            Join the early network and get your opportunity in front of trusted commercialisation partners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/submit-opportunity"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:brightness-95 active:scale-95 no-underline"
              style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}
            >
              Submit Opportunity
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/become-a-partner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 active:scale-95 no-underline border-2"
              style={{ borderColor: 'hsl(215 28% 17%)', color: 'hsl(215 28% 17%)' }}
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
