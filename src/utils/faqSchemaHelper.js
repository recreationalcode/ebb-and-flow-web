function extractText(node) {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (typeof node === 'object' && node.props) {
    // Skip interactive components (ScheduleButton, etc.)
    if (typeof node.type === 'function' || typeof node.type === 'object') return '';
    return extractText(node.props.children);
  }
  return '';
}

export function generateFaqSchema(faqData) {
  const questions = faqData.flatMap((section) =>
    section.questions.map(({ q, a }) => {
      const text = extractText(a).replace(/\s+/g, ' ').trim();
      return {
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
          '@type': 'Answer',
          text,
        },
      };
    }),
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions,
  };
}
