import React from 'react';
import Plx from 'react-plx';
import Fa from 'react-fontawesome';

export default () => (
  <Plx
    className="content is-large"
    animateWhenNotInViewport
    parallaxData={[
      {
        start: '#home',
        duration: 'height',
        name: 'first',
        properties: [
          { startValue: 100, endValue: 0, unit: 'px', property: 'translateY' },
          { startValue: 0, endValue: 1, property: 'opacity' },
        ],
      },
      {
        start: '#about',
        duration: 'height',
        name: 'second',
        properties: [
          { startValue: 0, endValue: -100, unit: 'px', property: 'translateY' },
          { startValue: 1, endValue: 0, property: 'opacity' },
        ],
      },
    ]}
  >
    <a
      href="https://linkedin.com/in/linuk"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="fa-stack fa-lg">
        <Fa className="has-text-grey" name="circle" stack="2x" />
        <Fa name="linkedin" inverse stack="1x" />
      </span>
    </a>
    <a
      href="https://github.com/linuk"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="fa-stack fa-lg">
        <Fa className="has-text-grey" name="circle" stack="2x" />
        <Fa name="github-alt" inverse stack="1x" />
      </span>
    </a>
    <span className="fa-stack fa-lg">
      <Fa className="has-text-grey" name="circle" stack="2x" />
      <Fa name="envelope" inverse stack="1x" />
    </span>
    <span className="fa-stack fa-lg">
      <Fa className="has-text-grey" name="circle" stack="2x" />
      <Fa name="phone" inverse stack="1x" />
    </span>
  </Plx>
);
