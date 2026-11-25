// Your details in one place. Edit these and every page updates.
export const site = {
  name: 'Your Name',
  role: 'Developer & designer',
  tagline: 'I build thoughtful, fast websites and apps.',
  email: 'hello@example.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/tientienc' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};

// Prefix an internal path with the site's base path (e.g. "/portfolio/").
// Use this for every internal link so it works on GitHub Pages.
export const url = (path = '/') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
