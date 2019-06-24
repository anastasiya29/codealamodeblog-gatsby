import styled from 'styled-components';
import Card from './card';
import { softTeal, accentTeal } from 'constants/theme';

const TutorialCard = styled(Card)`
  .step {
    padding: 10px 10px 0 2em;
    margin: 0 0 10px 1em;
    border-left: 4px solid ${softTeal};
    position: relative;
    h2 {
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
      border: 1px solid ${softTeal};
      margin: 0;
      text-indent: 1em;
      color: ${softTeal};
      font-weight: normal;
      font-size: 1.3em;
      margin-left: -1em;
      padding: 5px;
      &::before {
        content: attr(data-step-id);
        border-radius: 2em;
        background-color: ${accentTeal};
        width: 2em;
        height: 2em;
        display: inline-block;
        position: absolute;
        left: -1.1em;
        top: 0;
        text-align: center;
        line-height: 2em;
        font-size: 1.2em;
        font-weight: normal;
        color: #eee;
        text-indent: 0;
      }
    }
  }
  .step.active h2 {
    background-color: ${softTeal};
    color: #fff;
  }
  .step.active h2::before {
    border-right: 3px solid #fff;
  }
  .step::before {
    content: '';
    border: 0.8em solid transparent;
    border-top-color: ${softTeal};
    border-top-width: 1.5em;
    position: absolute;
    left: -0.95em;
    bottom: -1.1em;
  }
  [class*='step']:last-of-type {
    border-color: transparent
    &::before {
      content: none;
    }
  }
`;

export default TutorialCard;
