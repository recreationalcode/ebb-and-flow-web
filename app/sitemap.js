export default function sitemap() {
  const base = 'https://www.ebbandflowmassagestudio.com';

  const pages = [
    { path: '/', lastModified: '2026-04-23' },
    { path: '/about', lastModified: '2026-04-23' },
    { path: '/services', lastModified: '2026-04-23' },
    { path: '/services/lymphatic', lastModified: '2026-04-23' },
    { path: '/services/lymphatic/manual-lymphatic-drainage', lastModified: '2026-04-01' },
    { path: '/services/lymphatic/pre-post-op-lymphatic-massage', lastModified: '2026-04-01' },
    { path: '/services/lymphatic/lymphedema-lipedema-management', lastModified: '2026-04-01' },
    { path: '/services/lymphatic/fertility-ivf-support-massage', lastModified: '2026-04-01' },
    { path: '/services/lymphatic/pregnancy-postpartum-lymphatic-massage', lastModified: '2026-04-01' },
    { path: '/services/oncology-massage', lastModified: '2026-04-01' },
    { path: '/services/craniosacral-therapy', lastModified: '2026-04-01' },
    { path: '/contact', lastModified: '2026-04-01' },
    { path: '/faq', lastModified: '2026-04-23' },
    { path: '/privacy-policy', lastModified: '2026-03-20' },
    { path: '/terms-and-conditions', lastModified: '2026-03-20' },
  ];

  return pages.map(({ path, lastModified }) => ({
    url: `${base}${path}`,
    lastModified: new Date(lastModified),
  }));
}
