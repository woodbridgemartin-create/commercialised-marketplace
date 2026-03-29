import { useState } from 'react'
import { ArrowRight, CheckCircle2, Mail, MapPin, Building2 } from 'lucide-react'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const response = await fetch("https://formspree.io/f/xbdpgwar", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert("We couldn't send your message. Please try again or email hello@commercialised.co.uk directly.");
    }
  }
  

  return (
    <div className="bg-background">
      <div style={{ background: 'hsl(215 28% 17%)' }} className="py-24 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 96% 70%)' }}>Get in Touch</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}>
          Contact Us
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Have a question or want to learn more? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-6" style={{ color: 'hsl(215 28% 17%)' }}>
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(43 96% 56% / 0.15)' }}>
                  <Mail size={18} style={{ color: 'hsl(37 70% 38%)' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: 'hsl(215 28% 17%)' }}>Email</p>
                  <a href="mailto:hello@commercialised.co.uk" className="text-sm hover:underline" style={{ color: 'hsl(220 9% 46%)' }}>
                    hello@commercialised.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(43 96% 56% / 0.15)' }}>
                  <Building2 size={18} style={{ color: 'hsl(37 70% 38%)' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: 'hsl(215 28% 17%)' }}>Company</p>
                  <p className="text-sm" style={{ color: 'hsl(220 9% 46%)' }}>
                    Leadsopedia Limited<br />
                    Company No: 13145058
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(43 96% 56% / 0.15)' }}>
                  <MapPin size={18} style={{ color: 'hsl(37 70% 38%)' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: 'hsl(215 28% 17%)' }}>Address</p>
                  <p className="text-sm" style={{ color: 'hsl(220 9% 46%)' }}>
                    5 Brayford Square<br />
                    London, England, E1 0SG
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-xl border" style={{ background: 'hsl(215 14% 97%)', borderColor: 'hsl(220 13% 91%)' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: 'hsl(215 28% 17%)' }}>Response Time</p>
              <p className="text-sm" style={{ color: 'hsl(220 9% 46%)' }}>
                We aim to respond to all enquiries within 2 business days. For opportunity submissions and partner applications, please use the dedicated forms.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center py-12">
                <div>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'hsl(43 96% 56% / 0.15)' }}>
                    <CheckCircle2 size={28} style={{ color: 'hsl(37 80% 40%)' }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(215 28% 17%)' }}>Message Sent</h3>
                  <p className="text-sm" style={{ color: 'hsl(220 9% 46%)' }}>Thank you for reaching out. We'll be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                      Your Name <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
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
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>Subject <span style={{ color: 'hsl(0 84% 60%)' }}>*</span></label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                  >
                    <option value="">Select a subject...</option>
                    <option>General Enquiry</option>
                    <option>Submit an Opportunity</option>
                    <option>Become a Partner</option>
                    <option>Media / Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'hsl(215 28% 25%)' }}>
                    Message <span style={{ color: 'hsl(0 84% 60%)' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-md border text-sm bg-background focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ borderColor: 'hsl(220 13% 88%)', color: 'hsl(215 28% 17%)' }}
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-sm transition-all hover:brightness-95 active:scale-[0.99]"
                  style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
