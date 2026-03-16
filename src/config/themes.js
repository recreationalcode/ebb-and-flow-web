const blue = {
  bg: 'bg-blue-600',
  dropReveal: 'blue',
  h1Color: 'text-white',
  bodyText: 'text-gray-100',
  sectionHeading: 'text-white',
};

const purple = {
  bg: 'bg-purple-600',
  dropReveal: 'purple',
  h1Color: 'text-white',
  bodyText: 'text-gray-100',
  sectionHeading: 'text-white',
};

const gray = {
  bg: 'bg-gray-200',
  dropReveal: 'gray',
  h1Color: 'text-purple',
  bodyText: 'text-gray-600',
  sectionHeading: 'text-gray-800',
};

const THEMES = {
  'lymph-mld': { ...blue },
  'lymph-operative': { ...purple },
  'lymph-edema': { ...gray },
  'lymph-fertility': { ...blue },
  'lymph-pregnancy': { ...purple },
  oncology: { ...gray },
  craniosacral: { ...blue },
};

export default THEMES;
