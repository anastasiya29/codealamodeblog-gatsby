import React from 'react';
import { Box } from 'rebass';
import Layout from 'components/layout';
import ResponsiveColumns from 'containers/responsiveColumns';
import TutorialCard from 'containers/card/tutorialCard';
import Emoji from 'components/emoji';
import BannerImage from '../../content/images/banners/jssBanner.png';

const About = () => (
  <Layout bannerImage={BannerImage}>
    <ResponsiveColumns>
      <Box>
        <p>
          I am a Sitecore and JavaScript developer who is currently learning the
          Sitecore JavaScript Services (JSS) SDK. My goal is to build a small
          sandbox site where I can explore JSS features and try out the API. I
          want to take typical challenges that developers encounter on projects
          and explore how they are handled in the JSS world.
        </p>
        <p>
          A log of my progress and what&quot;s coming up ahead is outlined here.
        </p>
      </Box>
      <TutorialCard>
        <div className="step active">
          <h2 data-step-id="1">Quick Start</h2>
          <p>
            My plan was to start out in <code>disconnected</code> mode, and then
            switch over to <code>connected</code> mode once I had the data
            modeling and presentation figured out, since I think this is the
            most likely workflow for JavaScript developers. So, I started by
            creating a new JSS React app by following the steps in the&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jss.sitecore.com/docs/getting-started/quick-start"
            >
              Quick Start | Sitecore JSS Documentation
            </a>
            &nbsp;guide.
          </p>
        </div>
        <div className="step active">
          <h2 data-step-id="2">Customizing scaffolding of components</h2>
          <p>
            I continued forward in the documentation, and&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jss.sitecore.com/docs/getting-started/first-component"
            >
              Build your first JSS component | Sitecore JSS Documentation
            </a>
            &nbsp;taught me to use the <code>jss scaffold</code> command to
            generate new components. I was interested in learning how this
            command worked so that I could customize the component template to
            my style. This customization was straightforward to achieve, see the
            following post for details.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Sitecore/JavaScript-Services/jss-customizing-scaffolding-components/"
            >
              JSS - Customizing Scaffolding of Components
            </a>
          </p>
        </div>
        <div className="step active">
          <h2 data-step-id="3">Mastering the manifest API</h2>
          <p>
            Building a Sitecore site requires designing components, routes, and
            custom route types based on the site’s content and UX requirements.
            In a traditional MVC implementation, this data modeling is done by
            creating items in the Sitecore tree. But in a JSS implementation,
            when using a <code>disconnected</code>, <code>code-first</code>
            workflow, this data modeling is done by passing data to JavaScript
            functions via the manifest API. The following post is a deep dive
            into understanding the <code>manifest API</code>.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Sitecore/JavaScript-Services/jss-manifest-demystified/"
            >
              JSS - Manifest API Demystified
            </a>
          </p>
        </div>
        <div className="step active">
          <h2 data-step-id="4">
            Creating page types and displaying page-level fields
          </h2>
          <p>
            This post shows how I used the manifest API to create a custom route
            type, and how I built a component for rendering and editing
            route-level content.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Sitecore/JavaScript-Services/jss-creating-custom-routes/"
            >
              JSS - Creating Custom Routes and Displaying Route-Level Fields in
              Components
            </a>
          </p>
        </div>
        <div className="step active">
          <h2 data-step-id="5">Going connected</h2>
          <p>
            Similar to disconnected mode, connected development mode also runs
            your JSS app on a local server. The difference is that in
            disconnected mode the app is hydrated with content from yaml/json
            files, but in connected mode the app is hydrated with content from
            Sitecore.
          </p>
          <p>
            To run connected mode, I needed to deploy my app to Sitecore, which
            did not go smoothly. This post covers the errors I experienced and
            how I solved them.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Sitecore/JavaScript-Services/jss-troubleshooting-connecting-to-sitecore/"
            >
              JSS - Troubleshooting Errors of Going Connected
            </a>
          </p>
        </div>
        <div className="step active">
          <h2 data-step-id="6">
            Externalizing reusable JSS components into a library
          </h2>
          <p>
            Component reuse is an important subject for developers. As I was
            building structural grid components for my JSS app, I thought,
            &quot;all projects need grid components, so is it possible to
            package these up for reuse?&quot; So I set out to create a POC of
            the idea. This post shares how I published JSS components as an npm
            package that can be imported into other JSS projects.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Sitecore/JavaScript-Services/jss-publish-jss-component-library/"
            >
              JSS - How to Publish JSS Components as NPM Packages
            </a>
          </p>
        </div>
        <div className="step">
          <h2 data-step-id="7">
            Yassss, the fun stuff is next&nbsp;
            <Emoji label="confetti" symbol="🎉" />
          </h2>
          <p>
            <ul>
              <li>Trying out GraphQL</li>
              <li>Component/animation libraries</li>
              <li>Adding a theme</li>
            </ul>
          </p>
        </div>
        <div className="step">
          <h2 data-step-id="...">More coming soon!</h2>
        </div>
      </TutorialCard>
    </ResponsiveColumns>
  </Layout>
);

export default About;
