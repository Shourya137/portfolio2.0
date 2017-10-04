import React from 'react';
import PropType from 'prop-types';
import Fa from 'react-fontawesome';

export default ({ href, iconClass }) => {
  this.propTypes = {
    href: PropType.string.isRequired,
    iconClass: PropType.string.isRequired,
  };

  return (
    <a href={href}>
      <span className="icon is-large has-text-grey">
        <span className="fa-stack fa-lg">
          <Fa name="circle" stack="2x" />
          <Fa name={iconClass} inverse stack="1x" />
        </span>
      </span>
    </a>
  );
};

