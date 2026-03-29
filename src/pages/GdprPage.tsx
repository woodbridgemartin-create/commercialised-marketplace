export function GdprPage() {
  return (
    <div className="bg-background">
      <div style={{ background: 'hsl(215 28% 17%)' }} className="py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}>
          GDPR & Data Protection
        </h1>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Last updated: March 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <div className="p-6 rounded-xl border" style={{ background: 'hsl(43 96% 56% / 0.08)', borderColor: 'hsl(43 96% 56% / 0.3)' }}>
          <p className="text-sm leading-relaxed font-medium" style={{ color: 'hsl(37 70% 35%)' }}>
            Commercialised is operated by Leadsopedia Limited, a UK-registered company. We are committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </div>

        {[
          {
            title: 'Data Controller',
            content: `Leadsopedia Limited is the data controller for personal data collected through the Commercialised platform. Our registered address is 5 Brayford Square, London, England, E1 0SG. Contact: hello@commercialised.co.uk`,
          },
          {
            title: 'What Personal Data We Process',
            content: `We process: contact information (name, email, phone number); company details (company name, website, industry); opportunity or expertise information submitted through our forms; technical data collected automatically (IP address, browser type, usage data).`,
          },
          {
            title: 'Lawful Basis for Processing',
            content: `We rely on the following lawful bases under UK GDPR Article 6: Legitimate Interests — to operate the marketplace and facilitate introductions; Performance of Contract — when processing submissions in connection with a service requested; Consent — where you have provided explicit consent for specific processing activities.`,
          },
          {
            title: 'Your Rights Under UK GDPR',
            content: `You have the following rights regarding your personal data: Right of Access — to request a copy of the data we hold about you; Right to Rectification — to request correction of inaccurate data; Right to Erasure — to request deletion of your data where there is no lawful basis to retain it; Right to Restrict Processing — to request we limit how we use your data; Right to Data Portability — to receive your data in a structured, machine-readable format; Right to Object — to object to processing based on legitimate interests; Rights related to Automated Decision Making — we do not make decisions about you based solely on automated processing.`,
          },
          {
            title: 'Data Transfers',
            content: `Where we use third-party service providers who may process data outside the UK, we ensure appropriate safeguards are in place in accordance with UK GDPR transfer requirements.`,
          },
          {
            title: 'Data Security',
            content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or disclosure. This includes secure hosting, access controls and regular security reviews.`,
          },
          {
            title: 'Data Retention',
            content: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Submissions and partner profiles are retained while the relationship remains active and for a reasonable period thereafter.`,
          },
          {
            title: 'Complaints',
            content: `If you have concerns about how we process your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) in the UK. ICO website: ico.org.uk. Telephone: 0303 123 1113.`,
          },
          {
            title: 'Contact Us',
            content: `To exercise any of your rights or for any data protection queries, please contact us at: hello@commercialised.co.uk or write to Leadsopedia Limited, 5 Brayford Square, London, E1 0SG. We will respond to all requests within one calendar month.`,
          },
        ].map(section => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold mb-3" style={{ color: 'hsl(215 28% 17%)' }}>{section.title}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 9% 46%)' }}>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
