import React from 'react';
import PropTypes from 'prop-types';

export default ({ project: {
  name,
  tags,
  thumbnailURL,
  imagesURL,
  shortDescription,
  longDescription,
  githubURL,
  liveDemoURL },
}) => {
  this.propTypes = {
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      thumbnailURL: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      shortDescription: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
      githubURL: PropTypes.string.isRequired,
      liveDemo: PropTypes.string.isRequired,
    }),
  };

  const Tags = tags.map(tag => (
    <span key={tag} className="tag is-rounded">{tag}</span>
  ));

  return (
    <div className="column is-half-desktop is-half-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={thumbnailURL} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h2 className="title">{name}</h2>
          <p className="content">{shortDescription}</p>
          <div className="tags">
            {Tags}
          </div>
        </div>
      </div>
    </div>
  );
};
