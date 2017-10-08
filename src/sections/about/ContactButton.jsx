import React from 'react';
import PropType from 'prop-types';
import Fa from 'react-fontawesome';

export default ({ href, iconClass, isOpenNewPage, title }) => {
  this.propTypes = {
    title: PropType.string.isRequired,
    href: PropType.string.isRequired,
    iconClass: PropType.string.isRequired,
    isOpenNewPage: PropType.bool.isRequired,
  };

  const aTarget = isOpenNewPage ? '_blank' : '';

  return (
    <a
      style={{ marginRight: '5px' }}
      className="button is-light"
      href={href}
      target={aTarget}
    >
      <span className="icon">
        <Fa name={iconClass} stack="1x" />
      </span>
      <span>{title}</span>
    </a>
  );
};

