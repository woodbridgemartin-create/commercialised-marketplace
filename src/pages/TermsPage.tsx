export function TermsPage() {
  return (
    <div className="bg-background">
      <div style={{ background: 'hsl(215 28% 17%)' }} className="py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif", color: 'hsl(0 0% 98%)' }}>
          Terms & Conditions
        </h1>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Last updated: March 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        {[
          {
            title: '1. Acceptance of Terms',
            content: `By accessing or using the Commercialised platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the platform. These terms apply to all visitors, users, businesses and partners.`,
          },
          {
            title: '2. Platform Overview',
            content: `Commercialised is a marketplace platform operated by Leadsopedia Limited that connects businesses wishing to commercialise products, technology or services with commercialisation partners. We facilitate introductions and do not act as an agent, advisor or guarantor for any transaction between parties.`,
          },
          {
            title: '3. Submissions',
            content: `By submitting an opportunity or partner application, you confirm that: all information provided is accurate and truthful; you have authority to submit the information on behalf of your company; you consent to your details being shared with relevant parties on the platform as described in our Privacy Policy.`,
          },
          {
            title: '4. No Commercial Guarantee',
            content: `Commercialised facilitates introductions only. We do not guarantee any commercial outcome, partnership, contract or revenue as a result of using the platform. All commercial arrangements entered into between businesses and partners are independent of Commercialised.`,
          },
          {
            title: '5. Intellectual Property',
            content: `All content on the Commercialised platform, including design, text, logos and branding, is the intellectual property of Leadsopedia Limited and may not be reproduced without prior written consent.`,
          },
          {
            title: '6. Prohibited Use',
            content: `You agree not to: submit false or misleading information; use the platform for any unlawful purpose; attempt to gain unauthorised access to any part of the platform; use the platform to distribute spam or unsolicited communications.`,
          },
          {
            title: '7. Limitation of Liability',
            content: `To the maximum extent permitted by law, Leadsopedia Limited shall not be liable for any indirect, incidental, special or consequential damages arising from your use of the platform, including but not limited to loss of profits, data or goodwill.`,
          },
          {
            title: '8. Changes to Terms',
            content: `We reserve the right to update these Terms at any time. Continued use of the platform after changes are posted constitutes acceptance of the new terms.`,
          },
          {
            title: '9. Governing Law',
            content: `These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
          },
          {
            title: '10. Contact',
            content: `For any questions regarding these Terms, contact us at hello@commercialised.co.uk or write to Leadsopedia Limited, 5 Brayford Square, London, E1 0SG.`,
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
