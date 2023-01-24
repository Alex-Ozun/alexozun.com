import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Alex Ozun`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 500 }}>
          Advanced Swift | Functional Programming | Software Design 
          Written by{' '}
          <a href="https://github.com/Alex-Ozun">Alex Ozun</a>
        </p>
      </div>
    );
  }
}

export default Bio;
