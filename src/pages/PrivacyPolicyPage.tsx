export function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <div style={{ background: 'hsl(215 28% 17%)' }} className="py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}>
          Privacy Policy
        </h1>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Last updated: March 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose max-w-none space-y-8">
          {[
            {
              title: '1. Who We Are',
              content: `Commercialised is operated by Leadsopedia Limited, a company registered in England and Wales (Company Number: 13145058). Our registered address is 5 Brayford Square, London, England, E1 0SG. You can contact us at hello@commercialised.co.uk.`,
            },
            {
              title: '2. What Data We Collect',
              content: `We collect information you provide when submitting an opportunity or partner application, including: your name, email address, phone number, company name, and details about your opportunity or business expertise. We may also collect technical data such as IP address, browser type and pages visited through standard web analytics.`,
            },
            {
              title: '3. How We Use Your Data',
              content: `We use your data to: facilitate introductions between businesses and partners on the platform; review and process opportunity submissions and partner applications; communicate with you about your submission or application; improve the platform and our services; comply with legal obligations.`,
            },
            {
              title: '4. Legal Basis for Processing',
              content: `We process your personal data on the following legal bases: performance of a contract (when you use our platform services); legitimate interests (to operate and improve our platform); consent (where you have specifically consented to processing).`,
            },
            {
              title: '5. Data Sharing',
              content: `We share your data only with relevant, vetted partners on the platform as part of the opportunity matching process, or with service providers who assist in operating our platform (such as hosting and email providers). We do not sell your personal data to third parties.`,
            },
            {
              title: '6. Data Retention',
              content: `We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Opportunity submissions and partner profiles are retained while your account or submission remains active.`,
            },
            {
              title: '7. Your Rights',
              content: `Under UK GDPR, you have the right to: access your personal data; request correction of inaccurate data; request deletion of your data; object to processing; request restriction of processing; data portability. To exercise any of these rights, please contact us at hello@commercialised.co.uk.`,
            },
            {
              title: '8. Cookies',
              content: `Our website may use essential cookies required for the site to function. We do not use tracking or advertising cookies without your consent.`,
            },
            {
              title: '9. Changes to This Policy',
              content: `We may update this policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.`,
            },
            {
              title: '10. Contact',
              content: `For any privacy-related queries, please contact us at hello@commercialised.co.uk or write to us at 5 Brayford Square, London, E1 0SG.`,
            },
          ].map(section => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold mb-3" style={{ color: 'hsl(215 28% 17%)' }}>{section.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 9% 46%)' }}>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
