export default function sitemap() {
  const base = 'https://ebbandflowmassagestudio.com';

  const pages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/lymphatic/manual-lymphatic-drainage', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/lymphatic/pre-post-op-lymphatic-massage', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/lymphatic/lymphedema-lipedema-management', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/lymphatic/fertility-ivf-support-massage', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/lymphatic/pregnancy-postpartum-lymphatic-massage', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/oncology-massage', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/craniosacral-therapy', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
