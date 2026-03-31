import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    section: 'For Businesses & Innovators',
    items: [
      {
        q: 'What is Commercialised?',
        a: 'We are a "Blind Marketplace" for innovation. We match high-IP assets, developed products, or research spin-outs with the commercial engines (Co-founders, Manufacturers, Sales Teams) needed to reach profitability.',
      },
      {
        q: 'Is my Intellectual Property (IP) safe?',
        a: 'Yes. We operate a managed matching system. Your specific technical details and contact info are NEVER public. Partners only see a redacted "Teaser." Full disclosure only happens after a Mutual NDA is signed via our secure CRM.',
      },
      {
        q: 'Do you work with University Spin-outs?',
        a: 'Absolutely. We provide the "Commercial Exit Ramp" for research. We work alongside TTOs and academic founders to find the right leadership and infrastructure to transition from lab to market.',
      },
      {
        q: 'How do I submit an opportunity?',
        a: 'Complete the Submit Opportunity form. Tell us the basics of your goals and current stage. Our team will review and prepare a redacted profile before discussing it with vetted partners.',
      },
      {
        q: 'Is there a cost to submit?',
        a: 'Submitting an opportunity during our early launch phase is free. We operate on a success-based model as the marketplace develops.',
      },
    ],
  },
  {
    section: 'For Partners',
    items: [
      {
        q: 'How do I see opportunities?',
        a: 'Once you are vetted and join the Partner Network, you will receive tailored "Teasers" based on your expertise. Full data packs are only released once an intervention/match is triggered and NDAs are in place.',
      },
      {
        q: 'Who can join as a partner?',
        a: 'Vetted growth agencies, manufacturers (like precision engineering firms), venture builders, and commercialisation experts with a proven track record of scaling IP.',
      },
      {
        q: 'What is the pricing for partners?',
        a: 'Joining the network is free for qualified partners during launch. We provide a clear fee schedule (including intro and success fees) once your application is approved.',
      },
    ],
  },
  {
    section: 'Platform & Legal',
    items: [
      {
        q: 'Who operates Commercialised?',
        a: 'Commercialised is operated by Leadsopedia Limited, a UK-registered company (No: 13145058) with deep experience in business development and commercial growth.',
      },
      {
        q: 'Is Commercialised GDPR compliant?',
        a: 'Yes. As a UK-based company, we are committed to full compliance with the UK GDPR and Data Protection Act 2018.',
      },
    ],
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b" style={{ borderColor: 'hsl(220 13% 91%)' }}>
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium" style={{ color: 'hsl(215 28% 17%)' }}>{q}</span>
        <ChevronDown
          size={16}
          className="flex-shrink-0 mt-0.5 transition-transform duration-200"
          style={{ color: 'hsl(220 9% 55%)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 9% 46%)' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export function FaqsPage() {
  return (
    <div className="bg-background">
      <div style={{ background: 'hsl(215 28% 17%)' }} className="py-24 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(43 96% 70%)' }}>Help</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}>
          Frequently Asked Questions
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Everything you need to know about the Commercialised platform.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {faqs.map(section => (
          <div key={section.section}>
            <h2 className="text-base font-semibold mb-1 pb-3 border-b-2" style={{ color: 'hsl(215 28% 17%)', borderColor: 'hsl(43 96% 56%)' }}>
              {section.section}
            </h2>
            <div>
              {section.items.map(item => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        <div className="text-center pt-8">
          <p className="text-sm mb-4" style={{ color: 'hsl(220 9% 55%)' }}>
            Can't find what you're looking for?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm no-underline"
            style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
