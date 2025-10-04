export const servicesStatic = {
  title: 'Services Page',
  hero: {
    heading: 'What are you looking to accomplish?',
    description: "Everything we do starts with you, so peruse the offerings below to see what feels like the best fit. Once you're done, let's talk about it - use the buttons below to start your journey. All of the links are designed to be completed in 15 minutes or less, but if you want to take more time to provide additional detail, you're welcome to.",
  },
  ctaButtons: [
    {
      text: 'Schedule Meeting',
      link: '/contact',
      style: 'primary',
    },
    {
      text: 'Start a Plan',
      link: '/contact',
      style: 'primary',
    },
    {
      text: 'Tax Questionnaire',
      link: '/contact',
      style: 'secondary',
    },
  ],
  serviceOfferings: [
    {
      title: 'One-Time\nPlanning',
      tagline: 'Best for DIYers who want a professional review of their situation.',
      description: 'Holistic plans start at $5,000, and a la carte reviews start at $500 per topic.\n\nInvestment management NOT included but may be added as an additional service.\n\nAll prices may increase with complexity.',
      ctaText: 'More Information',
      ctaLink: '/contact',
      accentColor: '#62708A',
    },
    {
      title: 'Ongoing Planning',
      badge: '***Most Popular***',
      tagline: 'Best for individuals and families who want a professional to answer questions and provide valuable, proactive advice about all areas of their finances.',
      description: 'Includes everything listed in One-Time Planning PLUS Investment Management at no additional cost.\n\nAnnual fee is 0.50% of net worth, payable monthly, with a minimum of $150/month.',
      ctaText: 'More Information',
      ctaLink: '/contact',
      accentColor: '#95997D',
    },
    {
      title: 'Just\nInvestments',
      tagline: 'Best for individuals and families who don\'t see value in Ongoing Planning, but want to delegate asset management.',
      description: 'Data-driven investment management for annual fees of 1.50% on first $250k, 1.00% on the next $750k and 0.50% thereafter.\n\nIf you\'re an employer considering implementing a retirement plan, please reach out via the Contact Page for more information.',
      ctaText: 'More Information',
      ctaLink: '/contact',
      accentColor: '#A1B5B8',
    },
  ],
  additionalServices: [
    {
      title: 'Accounting Services',
      description: 'Yes, accounting too! Tax preparation and advisory, bookkeeping, payroll - we\'ve got you covered!\n\nPreece Accounting Services LLC can help with:\n\n• Personal Returns\n• Rental Properties\n• Partnerships, S Corps, and more!\n\nTax preparation and bookkeeping offered through Preece Accounting Services LLC. Check out our site to get started!',
      ctaText: 'View Site',
      ctaLink: 'https://www.preeceaccounting.com',
      backgroundColor: 'bg-gray-50',
      features: [
        { item: 'Personal Returns' },
        { item: 'Rental Properties' },
        { item: 'Partnerships, S Corps, and more!' },
      ],
    },
  ],
  showTestimonials: false,
  disclaimer: {
    showDisclaimer: true,
    disclaimerText: 'Preece Financial Planning is a DBA of Wealth Planning Advisors LLC, a Registered Investment Adviser (RIA). Financial planning and investment advice are offered by Wealth Planning Advisors LLC. Advice is only provided to clients of Wealth Planning Advisors LLC who have a signed and active agreement on file.',
  },
}
