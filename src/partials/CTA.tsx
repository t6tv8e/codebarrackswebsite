import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to CodeBarracks <GradientText>newsletter</GradientText>
        </>
      }
      description="Subscribe to our newsletter and stay ahead of the curve with the latest web development trends, tips, and exclusive content."
    />
  </Section>
);

export { CTA };
