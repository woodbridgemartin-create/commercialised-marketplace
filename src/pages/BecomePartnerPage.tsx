import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const partnerTypes = [
  'Growth Agency',
  'Innovation Consultant',
  'Venture Builder',
  'Product Launch Specialist',
  'Business Development Consultancy',
  'Sales & Distribution Partner',
  'Marketing & Brand Agency',
  'Other',
]

const benefits = [
  { title: 'Qualified Opportunities', desc: 'Receive pre-reviewed opportunities from businesses with genuine commercialisation intent.' },
  { title: 'Sector Diversity', desc: 'Access projects across technology, AI, SaaS, products, services and more.' },
  { title: 'Early Access', desc: 'As an early partner you gain priority access to new opportunities as they launch.' },
  { title: 'Trusted Network', desc: 'Join a curated, professional network of leading commercialisation specialists.' },
]

export function BecomePartnerPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    partnerType: '',
    expertise: '',
    sectors: '',
    experience: '',
    consent: false,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = e.target
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value
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
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'hsl(43 96% 56% / 0.15)' }}>
            <CheckCircle2 size={32} style={{ color: 'hsl(37 80% 40%)' }} />
          </div>
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(215 28% 17%)' }}>
            Application Received
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'hsl(220 9% 46%)' }}>
            Thank you for applying to join Commercialised as a partner. We will review your application and be in touch with next steps.
          </p>
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm no-underline" style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}>
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background">
      {/* Header */}
      <div style={{ background: 'hsl(215 28% 17%)' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 96% 70%)' }}>Join the Network</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}>
                Become a Commercialisation Partner
              </h1>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Join a trusted network of growth agencies, consultants and specialists gaining access to qualified opportunities from businesses ready to commercialise.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map(b => (
                <div key={b.title} className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 className="font-semibold text-sm mb-2" style={{ color: 'hsl(43 96% 70%)' }}>{b.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-5" style={{ color: 'hsl(215 28% 17%)' }}>Your Contact Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { name: 'companyName', label: 'Company / Agency Name', required: true, placeholder: 'e.g. Growth Partners Ltd' },
                { name: 'contactName', label: 'Your Name', required: true, placeholder: 'Full name' },
                { name: 'email', label: 'Email Address', required: true, type: 'email', placeholder: 'you@company.com' },
                { name: 'phone', label: 'Phone Number', placeholder: '+44 7700 000000' },
                { name: 'website', label: 'Website', type: 'url', placeholder: 'https://yourcompany.com' },
              ].map(field => (
                <div key={field.name} className={field.name === 'website' ? 'md:col-span-2' : ''}>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                    {field.label} {field.required && <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>}
                  </label>
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    required={field.required}
                    value={(form as Record<string, string>)[field.name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-5" style={{ color: 'hsl(215 28% 17%)' }}>Your Expertise</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Partner Type <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                </label>
                <select
                  name="partnerType"
                  required
                  value={form.partnerType}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                >
                  <option value="">Select your type...</option>
                  {partnerTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Core Expertise <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                </label>
                <textarea
                  name="expertise"
                  required
                  rows={3}
                  value={form.expertise}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="Describe your commercialisation expertise and what types of businesses you typically work with..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Sectors / Industries
                </label>
                <input
                  type="text"
                  name="sectors"
                  value={form.sectors}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="e.g. Technology, Healthcare, Retail, FinTech..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                  Relevant Experience
                </label>
                <textarea
                  name="experience"
                  rows={3}
                  value={form.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  placeholder="Any notable commercialisation projects or successes you'd like to share..."
                />
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border" style={{ background: 'hsl(215 14% 97%)', borderColor: 'hsl(220 13% 91%)' }}>
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
                I agree to Commercialised sharing my profile with relevant businesses on the platform. I have read and accept the{' '}
                <a href="/privacy-policy" className="underline" style={{ color: 'hsl(215 28% 30%)' }}>Privacy Policy</a> and{' '}
                <a href="/terms" className="underline" style={{ color: 'hsl(215 28% 30%)' }}>Terms & Conditions</a>. <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
            style={{ background: 'hsl(43 96% 56%)', color: 'hsl(215 28% 17%)' }}
          >
            Apply to Become a Partner
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  )
}
