import React from 'react';
import Layout from 'components/layout';
import ResponsiveColumns from 'containers/responsiveColumns';
import styled from 'styled-components';
import Emoji from 'components/emoji';

const SocialLinks = styled.div`
  display: flex;
  a {
    &:before
      content: "\f099"
  }
`;

const About = () => (
  <Layout>
    <ResponsiveColumns>
      <SocialLinks>
        <a
          href="https://www.linkedin.com/in/anastasiya-flynn/"
          className="linkedin"
          title="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/AnastasiyaFlynn"
          className="twitter"
          title="Twitter"
        >
          Twitter
        </a>
        <a
          href="https://github.com/anastasiya29/"
          className="github"
          title="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://github.com/anastasiya29/"
          className="notist"
          title="Notist"
        >
          Notist
        </a>
        <a
          href="https://github.com/anastasiya29/"
          className="instagram"
          title="Instagram"
        >
          Instagram
        </a>
      </SocialLinks>
      <div>
        <p>
          I am a JavaScript/front-end Evangelist at Sitecore. I spend my days
          working on various developer community programs - a job that I
          absolutely love. My background is full-stack developer - primarily C#
          and JavaScript, but I&apos;m not a stranger to CSS and SQL.
          <Emoji label="nerd face" symbol="🤓" />
        </p>
        <p>
          I started this blog to participate in the amazing Sitecore and
          JavaScript communities, and to have a place where I can explore topics
          that interest me. If I help someone with an error or inspire someone
          to try a new lib, then I&apos;m happy.
          <Emoji label="love face" symbol="🥰" />
        </p>
        <p>
          When not hidden behind a monitor... it&apos;s probably because
          there&apos;s a cat on me. I love animals, gardening, and pretty much
          anything to do with nature.
          <Emoji label="fern" symbol="🌿" />
          <Emoji label="paw prints" symbol="🐾" />
          <Emoji label="sunflower" symbol="🌻" />
        </p>
      </div>
    </ResponsiveColumns>
  </Layout>
);

export default About;
