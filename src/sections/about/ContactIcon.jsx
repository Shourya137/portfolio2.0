import React from 'react';
import Plx from 'react-plx';
import PropType from 'prop-types';
import Fa from 'react-fontawesome';

export default ({ href, iconClass, movingUnit, index, direction }) => {
  this.propTypes = {
    href: PropType.string.isRequired,
    iconClass: PropType.string.isRequired,
    // Unit for moving
    movingUnit: PropType.number.isRequired,
    /**
     *  index split from middle, if there are four contact icons, from left to
     *  right is 2, 1, 1, 2
     */
    index: PropType.string.isRequired,
    // right uses positive sign
    direction: PropType.oneOf(['left', 'right']).isRequired,
  };

  let sign = 1;
  if (direction === 'left') sign = -1;
  const startPos = sign * index * movingUnit;
  return (
    <a href={href}>
      <Plx
        className="fa-stack fa-lg"
        animateWhenNotInViewport
        parallaxData={[
          {
            start: '#home',
            duration: 'height',
            name: 'first',
            properties: [
              {
                startValue: startPos,
                endValue: 0,
                unit: 'px',
                property: 'translateX',
              },
              {
                startValue: 0,
                endValue: 1,
                property: 'opacity',
              },
            ],
          },
          {
            start: '#about',
            duration: 'height',
            name: 'second',
            properties: [
              {
                startValue: 0,
                endValue: -100,
                unit: 'px',
                property: 'translateY',
              },
            ],
          },
        ]}
      >
        <Fa className="has-text-grey" name="circle" stack="2x" />
        <Fa name={iconClass} inverse stack="1x" />
      </Plx>
    </a>

  );
};

