export const newsPosts = [
  {
    slug: 'official-statement-education-enterprise-community',
    title: 'Official Statement',
    excerpt: 'CHIEF restates commitment to education, enterprise, and community development.',
    image: 'press',
    category: 'Official Update',
    date: 'July 8, 2026',
    body: [
      'CHIEF Alex Achebe has restated his commitment to a leadership model that connects education, enterprise, and community development into practical public service.',
      'In his statement, he emphasized that sustainable progress requires more than speeches. It requires structures that help young people learn, families recover dignity, and communities build lasting opportunity.',
      'The Achebe Hope Foundation will continue to focus on education support, youth empowerment, community welfare, and partnerships that make impact visible and measurable.',
    ],
  },
  {
    slug: 'community-outreach-update-foundation-volunteers',
    title: 'Community Outreach Update',
    excerpt: 'Foundation volunteers support families through a local outreach programme.',
    image: 'volunteer',
    category: 'Community Update',
    date: 'July 8, 2026',
    body: [
      'Foundation volunteers recently supported families and community members through a local outreach programme focused on practical assistance and direct engagement.',
      'The outreach created space for listening, identifying needs, and connecting residents with available support through the foundation network.',
      'CHIEF’s team described the programme as part of a wider commitment to consistent grassroots presence, not one-off public appearances.',
    ],
  },
  {
    slug: 'business-forum-enterprise-development',
    title: 'Business Forum',
    excerpt: 'Stakeholders discuss jobs, entrepreneurship, and sustainable development.',
    image: 'business-forum',
    category: 'Leadership',
    date: 'July 8, 2026',
    body: [
      'Business leaders, entrepreneurs, and community stakeholders gathered to discuss practical pathways for jobs, enterprise growth, and sustainable development.',
      'The discussion focused on mentorship, access to opportunity, digital skills, property management, hospitality, and the role of private enterprise in strengthening communities.',
      'CHIEF Alex Achebe noted that business leadership must create value beyond profit by developing people and supporting long-term local capacity.',
    ],
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
