import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      &copy; Copyright 2023 by CodeBarracks. Bringing you ☀️ and 🌈 with{' '}
      <span className="text-cyan-400">Astro </span>
      &amp; <span className="text-cyan-400"> Netlify</span>.
    </div>
  </Section>
);

export { Footer };
