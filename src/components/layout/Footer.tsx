import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Building2 } from 'lucide-react'

const footerNav = {
  Platform: [
    { label: 'Submit Opportunity', to: '/submit-opportunity' },
    { label: 'Become a Partner', to: '/become-a-partner' },
    { label: 'How It Works', to: '/#how-it-works' },
    { label: 'About', to: '/about' },
  ],
  Support: [
    { label: 'FAQs', to: '/faqs' },
    { label: 'Contact', to: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'GDPR / Data Protection', to: '/gdpr' },
  ],
}

export function Footer() {
  return (
    <footer style={{ background: 'hsl(215 28% 17%)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'hsl(43 96% 56%)' }}>
                <span className="text-xs font-bold" style={{ color: 'hsl(215 28% 17%)' }}>C</span>
              </div>
              <span className="font-semibold text-lg text-white">Commercialised</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Connecting businesses with trusted commercialisation partners to bring products, technology, and services to market.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Building2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'hsl(43 96% 56%)' }} />
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Operated by Leadsopedia Limited<br />
                  Company No: 13145058
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'hsl(43 96% 56%)' }} />
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  5 Brayford Square, London, E1 0SG
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0" style={{ color: 'hsl(43 96% 56%)' }} />
                <a
                  href="mailto:hello@commercialised.co.uk"
                  className="text-xs hover:underline"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  hello@commercialised.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Navigation groups */}
          {Object.entries(footerNav).map(([groupName, links]) => (
            <div key={groupName}>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'hsl(43 96% 56%)' }}>
                {groupName}
              </h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors no-underline hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Commercialised. Operated by Leadsopedia Limited. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Registered in England &amp; Wales
          </p>
        </div>
      </div>
    </footer>
  )
}
