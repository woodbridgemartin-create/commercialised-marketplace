import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'hsl(215 28% 17%)' }}>
            <span className="text-xs font-bold" style={{ color: 'hsl(43 96% 56%)' }}>C</span>
          </div>
          <span className="font-semibold text-foreground tracking-tight text-lg">Commercialised</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/become-a-partner"
            className="text-sm font-medium text-foreground border border-border px-4 py-2 rounded-md hover:bg-muted transition-colors duration-200 no-underline"
          >
            Become a Partner
          </Link>
          <Link
            to="/submit-opportunity"
            className="text-sm font-semibold px-4 py-2 rounded-md transition-all duration-200 no-underline"
            style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}
          >
            Submit Opportunity
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-sm font-medium text-foreground py-2 no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t border-border">
            <Link
              to="/become-a-partner"
              className="text-sm font-medium text-center text-foreground border border-border px-4 py-2 rounded-md no-underline"
              onClick={() => setMobileOpen(false)}
            >
              Become a Partner
            </Link>
            <Link
              to="/submit-opportunity"
              className="text-sm font-semibold text-center px-4 py-2 rounded-md no-underline"
              style={{ background: 'hsl(215 28% 17%)', color: 'hsl(0 0% 98%)' }}
              onClick={() => setMobileOpen(false)}
            >
              Submit Opportunity
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
