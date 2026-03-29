import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    section: 'For Businesses',
    items: [
      {
        q: 'What is Commercialised?',
        a: 'Commercialised is a UK-based marketplace that connects businesses wanting to commercialise products, technology or services with trusted commercialisation partners such as growth agencies, consultants and launch specialists.',
      },
      {
        q: 'Who should submit an opportunity?',
        a: 'Any business, founder or product creator who wants to bring something to market or scale it. This includes startups, AI and SaaS builders, established businesses with dormant products, innovation teams and companies with technology they have not yet commercialised.',
      },
      {
        q: 'How do I submit an opportunity?',
        a: 'Complete the Submit Opportunity form on our platform. Tell us about your product, technology or service, your goals and your current stage. Our team will review and prepare it before sharing with relevant partners.',
      },
      {
        q: 'Is there a cost to submit an opportunity?',
        a: 'Submitting an opportunity during our early launch phase is free. We will communicate any changes to this as the marketplace develops.',
      },
      {
        q: 'What happens after I submit?',
        a: 'Our team reviews your submission, structures the opportunity and then shares it with relevant commercialisation partners on the platform who are best placed to help.',
      },
      {
        q: 'Will my opportunity be kept confidential?',
        a: 'Yes. We only share your opportunity with relevant, vetted partners on the platform. We do not publicly list your details. Please see our Privacy Policy for full information.',
      },
    ],
  },
  {
    section: 'For Partners',
    items: [
      {
        q: 'Who can join as a partner?',
        a: 'Growth agencies, innovation consultants, venture builders, product launch specialists, business development consultancies and other commercialisation experts.',
      },
      {
        q: 'How do I apply as a partner?',
        a: 'Complete the Become a Partner form. Tell us about your expertise, sectors and experience. We will review your application and confirm your access to the platform.',
      },
      {
        q: 'What type of opportunities will I receive?',
        a: 'You will receive relevant, pre-reviewed opportunities matched to your expertise and sector focus. These could include technology products, SaaS tools, physical goods, services and growth opportunities from businesses ready to act.',
      },
      {
        q: 'Is early partner access free?',
        a: 'Yes, joining during our early phase is free for qualified partners. We will communicate our full pricing structure as the marketplace launches.',
      },
    ],
  },
  {
    section: 'Platform & Legal',
    items: [
      {
        q: 'Who operates Commercialised?',
        a: 'Commercialised is operated by Leadsopedia Limited, a UK-registered company (Company No: 13145058) based in London, with experience in business development, lead generation and commercial growth.',
      },
      {
        q: 'How is my data used?',
        a: 'Your data is used solely to facilitate introductions and matches on the platform. We do not sell your data to third parties. Please review our Privacy Policy and GDPR statement for full details.',
      },
      {
        q: 'Is Commercialised GDPR compliant?',
        a: 'Yes. As a UK-based company we are committed to full compliance with the UK GDPR and Data Protection Act 2018. See our GDPR / Data Protection page for more information.',
      },
      {
        q: 'How do I contact Commercialised?',
        a: 'Email us at hello@commercialised.co.uk or use the Contact form on our website.',
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
