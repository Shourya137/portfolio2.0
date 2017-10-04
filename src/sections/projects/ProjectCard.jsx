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
    <div className="column is-half">
      <div className="card ProjectCard">
        <div className="card-image">
          <figure className="image">
            <img src={thumbnailURL} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h2 className="is-bold">{name}</h2>
          <p className="">{shortDescription}</p>
          {Tags}
        </div>
      </div>
    </div>
  );
};
