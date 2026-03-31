import { Link } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2, Clock, Users, TrendingUp, Lightbulb, Shield, Zap, Star, Factory, Globe, GraduationCap, Briefcase } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Submit Opportunity',
    desc: 'Describe your product or tech. Your submission is held in our "Redacted Vault" for maximum IP security.',
  },
  {
    number: '02',
    title: 'Managed Redaction',
    desc: 'Our team prepares a non-identifying "Teaser" that protects your specific technical secrets and identity.',
  },
  {
    number: '03',
    title: 'Protected Match',
    desc: 'We match you with vetted partners. Full disclosure only occurs after a Mutual NDA is signed via our platform.',
  },
]

const audiences = [
  { icon: <Lightbulb size={20} />, label: 'Physical Product Founders' },
  { icon: <Zap size={20} />, label: 'AI and SaaS Builders' },
  { icon: <GraduationCap size={20} />, label: 'University Spin-outs' },
  { icon: <Clock size={20} />, label: 'Dormant IP & Tech' },
  { icon: <Star size={20} />, label: 'Innovation Teams' },
]

const activeCohorts = [
  { 
    icon: <Globe size={20} />, 
    title: 'Global Manufacturing', 
    detail: 'Tier-1 production with 150+ engineers. Managed by a UK-based Director for local accountability.' 
  },
  { 
    icon: <TrendingUp size={20} />, 
    title: 'GTM Specialists', 
    detail: 'Vetted experts in SaaS and Deep Tech scaling and market entry strategy.' 
  },
  { 
    icon: <GraduationCap size={20} />, 
    title: 'TTO Connectors', 
    detail: 'Strategic bridges to UK University Research and Spin-out accelerators.' 
  },
  { 
    icon: <Briefcase size={20} />, 
    title: 'Commercial Engines', 
    detail: 'Fractional CEOs and exit-strategy consultants ready to lead ventures.' 
  },
]

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'hsl(215 28% 17%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'hsl(43 96% 56%)', filter: 'blur(80px)', transform: 'translate(30%, -30%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8 border" style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.15)', color: 'hsl(43 96% 70%)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(43 96% 56%)' }} />
            The UK’s "Blind Marketplace" for Innovation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}>
            Commercialise Fast.<br /><span style={{ color: 'hsl(43 96% 56%)' }}>Keep Your IP Safe.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            We bridge the gap between "Great Ideas" and "Global Scale." Get matched with Tier-1 Manufacturers and Commercial Co-founders while staying 100% redacted.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/submit-opportunity" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95 no-underline" style={{ background: 'hsl(43 96% 56%)', color: 'hsl(215 28% 17%)' }}>Submit Opportunity <ArrowRight size={16} /></Link>
            <Link to="/become-a-partner" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:bg-white/10 active:scale-95 no-underline border" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'hsl(0 0% 95%)' }}>Become a Partner</Link>
          </div>
        </div>
      </section>

      {/* Marketplace Launching Banner */}
      <section style={{ background: 'hsl(43 96% 56% / 0.08)', borderTop: '1px solid hsl(43 96% 56% / 0.2)', borderBottom: '1px solid hsl(43 96% 56% / 0.2)' }}>
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border" style={{ background: 'hsl(43 96% 56% / 0.15)', borderColor: 'hsl(43 96% 56% / 0.4)', color: 'hsl(37 80% 42%)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(37 80% 42%)' }} />
            Phase 1 Launch: Limited to 10 High-IP Ventures
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}>Seeking 3 Physical Product Ventures for Tier-1 Manufacturing Review</h2>
          <p className="text-base leading-relaxed max-w-3xl mx-auto" style={{ color: 'hsl(215 25% 35%)' }}>We currently have active capacity with our Global Manufacturing partner (150+ engineers, UK-based Director). Submit your redacted teaser for an ROM quote review today.</p>
        </div>
      </section>

      {/* Active Partner Cohort */}
      <section className="py-24" style={{ background: 'hsl(215 14% 97%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 80% 40%)' }}>The Ecosystem</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}>Current Partner Cohort</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'hsl(220 9% 46%)' }}>Vetted "Commercial Engines" currently reviewing innovation teasers in our marketplace.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeCohorts.map((cohort) => (
              <div key={cohort.title} className="p-6 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'hsl(215 28% 17%)', color: 'hsl(43 96% 56%)' }}>{cohort.icon}</div>
                <h3 className="text-sm font-bold mb-2">{cohort.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'hsl(220 9% 46%)' }}>{cohort.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
