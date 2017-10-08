import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.flipToBack = this.flipToBack.bind(this);
    this.flipToFront = this.flipToFront.bind(this);
    this.handleReadMoreButton = this.handleReadMoreButton.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const isFlippedOver = this.state.isFlipped !== nextState.isFlipped;
    return isFlippedOver;
  }

  flipToBack() {
    this.setState({ isFlipped: true });
  }

  flipToFront() {
    this.setState({ isFlipped: false });
  }

  handleReadMoreButton(e) {
    e.stopPropagation();
    this.props.handleClickReadMore(this.props.project);
  }

  render() {
    const { isFlipped } = this.state;
    const { project: {
      name,
      tags,
      thumbnailURL,
      shortDescription,
    } } = this.props;

    const Tags = tags.map(tag => (
      <span key={tag} className="tag is-rounded">{tag}</span>
    ));

    const ReadMoreButton = (
      <button
        tabIndex={0}
        className="button is-outlined is-white is-fixBottom"
        onClick={this.handleReadMoreButton}
      >
        Read More
      </button>
    );

    return (
      <div className="column is-one-third-desktop is-half-tablet">
        <div
          className={cx('card', { isFlipped })}
          onClick={this.flipToBack}
          onMouseLeave={this.flipToFront}
        >
          <img src={thumbnailURL} alt={name} />
          <h2 className="front-title">{name}</h2>
          <div className="is-overlay section content">
            <h2 className="title">{name}</h2>
            <p className="content">{shortDescription}</p>
            <div className="tags">
              {Tags}
            </div>
            {ReadMoreButton}
          </div>
        </div>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    thumbnailURL: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    shortDescription: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    githubURL: PropTypes.string,
    liveDemo: PropTypes.string,
  }).isRequired,
};

ProjectCard.defaultProp = {};

export default ProjectCard;
