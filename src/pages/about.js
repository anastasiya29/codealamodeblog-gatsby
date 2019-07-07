import React from 'react';
import Layout from 'components/layout';
import ResponsiveColumns from 'containers/responsiveColumns';
import styled from 'styled-components';
import Emoji from 'components/emoji';
import { SocialIcon } from 'react-social-icons';
import MEDIA from 'helpers/mediaTemplates';

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${MEDIA.MIN_DESKTOP`
    flex-direction: column;
  `};
  a {
    margin-bottom: 10px;
  }
`;

const About = () => (
  <Layout pageTitle="About Anastasiya Flynn" pageDescription=" ">
    <ResponsiveColumns>
      <SocialLinks>
        <SocialIcon url="https://www.linkedin.com/in/anastasiya-flynn/" />
        <SocialIcon url="https://twitter.com/AnastasiyaFlynn" />
        <SocialIcon url="https://github.com/anastasiya29/" />
        <SocialIcon url="https://instagram.com/anastasiyar29" />
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
