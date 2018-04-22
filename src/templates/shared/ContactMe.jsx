import React from 'react';
import styled from 'styled-components';
import LinkedIn from 'src/images/icons/LinkedIn.png';
import Instagram from 'src/images/icons/Instagram.png';
import Github from 'src/images/icons/Github.svg';
import { transitionEase, grayMedium, nearWhite } from 'src/styles';

const Contact = styled.div`
  width: 100%;
  text-align: center;
  padding: 3.5rem 0;
  color: ${grayMedium};

  h4 {
    color: ${grayMedium};
  }

  a {
    ${transitionEase};
    &:hover {
      color: ${nearWhite};
    }
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;

  img {
    filter: invert(0.9);
    width: 1rem;
    height: 1rem;
    margin: 0 0.25rem;
    opacity: 0.65;
    ${transitionEase};

    &: hover {
      filter: invert(1);
      opacity: 1;
    }
  }
`;

export default () => (
  <Contact>
    <h4>I{"'"}d &hearts; to hear from you</h4>
    <p>
      <a href="mailto:mongkuen.sun@gmail.com">mongkuen.sun@gmail.com</a>
    </p>
    <Social>
      <a
        href="https://www.linkedin.com/in/mongkuensun/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedIn} alt="Linked In" />
      </a>
      <a
        href="https://www.instagram.com/mongkuen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Instagram} alt="Instagram" />
      </a>
      <a
        href="https://github.com/mongkuen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Github} alt="Github" />
      </a>
    </Social>
  </Contact>
);
