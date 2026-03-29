import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const opportunityTypes = [
  'Product / Physical Goods',
  'Technology / Software',
  'AI / SaaS Product',
  'Service Business',
  'Growth Opportunity',
  'Licensing / IP',
  'Other',
]

export function SubmitOpportunityPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    opportunityType: '',
    description: '',
    currentStage: '',
    targetMarket: '',
    goals: '',
    consent: false,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = e.target
    const value = target instanceof HTMLInputElement && target.type === 'checkbox'
      ? target.checked
      : target.value
    setForm(prev => ({ ...prev, [target.name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-background">
        <div className="max-w-lg text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'hsl(43 96% 56% / 0.15)' }}
          >
            <CheckCircle2 size={32} style={{ color: 'hsl(37 80% 40%)' }} />
          </div>
          <h1
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}
          >
            Opportunity Received
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'hsl(220 9% 46%)' }}>
            Thank you for submitting your opportunity to Commercialised. Our team will review your submission and be in touch shortly to discuss next steps.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm no-underline transition-all"
            style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}
          >
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background">
      {/* Header */}
      <div style={{ background: 'hsl(215 28% 17%)' }} className="py-20 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 96% 70%)' }}>Get Started</p>
        <h1
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}
        >
          Submit Your Opportunity
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Tell us about what you want to commercialise. Our team will review your submission and connect you with the right partners.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Details */}
          <div>
            <h2 className="text-lg font-semibold mb-5" style={{ color: 'hsl(215 28% 17%)' }}>Your Contact Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Company Name <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={form.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)', '--tw-ring-color': 'hsl(215 28% 17%)' } as React.CSSProperties}
                  placeholder="e.g. Acme Technologies Ltd"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Your Name <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="contactName"
                  required
                  value={form.contactName}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Email Address <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="+44 7700 000000"
                />
              </div>
            </div>
          </div>

          {/* Opportunity Details */}
          <div>
            <h2 className="text-lg font-semibold mb-5" style={{ color: 'hsl(215 28% 17%)' }}>Opportunity Details</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Opportunity Type <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                </label>
                <select
                  name="opportunityType"
                  required
                  value={form.opportunityType}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                >
                  <option value="">Select a type...</option>
                  {opportunityTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Describe Your Opportunity <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                </label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="What is the product, technology or service you want to commercialise? What makes it unique?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Current Stage
                </label>
                <input
                  type="text"
                  name="currentStage"
                  value={form.currentStage}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="e.g. MVP built, early revenue, pre-launch, scaling..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Target Market
                </label>
                <input
                  type="text"
                  name="targetMarket"
                  value={form.targetMarket}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="e.g. UK SMEs, European enterprise, global B2C..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  What are your commercialisation goals? <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                </label>
                <textarea
                  name="goals"
                  required
                  rows={3}
                  value={form.goals}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="What outcome are you looking for? New revenue streams, market expansion, distribution partnerships..."
                />
              </div>
            </div>
          </div>

          {/* Consent */}
          <div
            className="p-5 rounded-xl border"
            style={{ background: 'hsl(215 14% 97%)', borderColor: 'hsl(220 13% 91%)' }}
          >
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                required
                checked={form.consent}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 rounded"
                style={{ accentColor: 'hsl(215 28% 17%)' }}
              />
              <span className="text-sm leading-relaxed" style={{ color: 'hsl(220 9% 46%)' }}>
                I agree to Commercialised sharing my opportunity details with relevant commercialisation partners on the platform. I have read and accept the{' '}
                <a href="/privacy-policy" className="underline" style={{ color: 'hsl(215 28% 30%)' }}>Privacy Policy</a>
                {' '}and{' '}
                <a href="/terms" className="underline" style={{ color: 'hsl(215 28% 30%)' }}>Terms & Conditions</a>. <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:brightness-95 active:scale-[0.99]"
            style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}
          >
            Submit Opportunity
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  )
}
