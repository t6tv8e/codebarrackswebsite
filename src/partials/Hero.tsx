import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Welcome to <GradientText>CodeBarracks</GradientText> 👋
        </>
      }
      description={
        <>
          <span>
            Do you want to conquer the dynamic world of full-stack web
            development? 🧑🏼‍💻📈 <br />
            CodeBarracks offers essential{' '}
            <span className="text-cyan-400">courses</span>, insightful{' '}
            <span className="text-cyan-400">ebooks</span>, and hands-on
            <span className="text-cyan-400"> tutorials </span> tailored for
            every aspiring developer. Hone your skills and craft exceptional web
            experiences. Dive in right now, and transform the digital canvas!
          </span>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/developer.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a> */}
          <a href="https://www.youtube.com/@codebarracks">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
