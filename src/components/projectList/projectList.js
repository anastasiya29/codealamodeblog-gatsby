import React from 'react';
import { Link } from 'gatsby';

const ProjectList = () => (
  <>
    <p>
      <Link to="/jss-sandbox">Sitecore JavaScript Services Sandbox</Link>
    </p>
    <p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/anastasiya29/yeoman-sitecore-generator"
      >
        Sitecore Project Generator (Yeoman)
      </a>
    </p>
    <p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://marketplace.sitecore.net/en/Modules/S/Shared_Placeholders.aspx"
      >
        Sitecore Module: Shared Placeholders
      </a>
    </p>
    <p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/anastasiya29/coveo-components"
      >
        Coveo
      </a>
    </p>
  </>
);

export default ProjectList;
