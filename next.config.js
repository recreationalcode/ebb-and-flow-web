/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/lymphatic-massage',
        destination: '/services/lymphatic/manual-lymphatic-drainage',
        permanent: true,
      },
      {
        source: '/services/lymphatic/manual-drainage',
        destination: '/services/lymphatic/manual-lymphatic-drainage',
        permanent: true,
      },
      {
        source: '/services/lymphatic/pre-post-operative',
        destination: '/services/lymphatic/pre-post-op-lymphatic-massage',
        permanent: true,
      },
      {
        source: '/services/lymphatic/fertility-pregnancy',
        destination: '/services/lymphatic/pregnancy-postpartum-lymphatic-massage',
        permanent: true,
      },
      {
        source: '/services/lymphatic/lymphedema-lipedema',
        destination: '/services/lymphatic/lymphedema-lipedema-management',
        permanent: true,
      },
      {
        source: '/oncology-massage',
        destination: '/services/oncology-massage',
        permanent: true,
      },
      {
        source: '/craniosacral-massage',
        destination: '/services/craniosacral-therapy',
        permanent: true,
      },
      {
        source: '/services/craniosacral-massage',
        destination: '/services/craniosacral-therapy',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
