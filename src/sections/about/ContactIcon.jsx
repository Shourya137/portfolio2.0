import React from 'react';
import PropType from 'prop-types';
import Fa from 'react-fontawesome';

export default ({ href, iconClass, isOpenNewPage }) => {
  this.propTypes = {
    href: PropType.string.isRequired,
    iconClass: PropType.string.isRequired,
    isOpenNewPage: PropType.bool.isRequired,
  };

  const aTarget = isOpenNewPage ? '_blank' : '';

  return (
    <a href={href} target={aTarget}>
      <span className="icon is-large has-text-grey">
        <span className="fa-stack fa-lg">
          <Fa name="circle" stack="2x" />
          <Fa name={iconClass} inverse stack="1x" />
        </span>
      </span>
    </a>
  );
};

