import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 6L4 12l4 6"></path>

              <path d="M11 5l4 14"></path>

              <path d="M18 6l4 6l-4 6"></path>
            </svg>
          }
          name="CodeBarracks"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blog</NavMenuItem>
        <NavMenuItem href="https://www.youtube.com/@codebarracks">
          YouTube
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
