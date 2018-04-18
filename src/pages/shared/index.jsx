import React from 'react';
import LinkedIn from 'src/images/iconLinkedIn.png';
import Instagram from 'src/images/iconInstagram.png';
import { Contact, Social } from './styles';

/* eslint-disable import/prefer-default-export */
export const ContactMe = () => (
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
    </Social>
  </Contact>
);
