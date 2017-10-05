import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


// TODO: Make Carousel
const Modal = ({ isActive, title, content, buttons = [], closeModal, images = [] }) => {
  this.PropTypes = {
    isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    button: PropTypes.arrayOf(PropTypes.shape({
      iconClass: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })),
    closeModal: PropTypes.func.isRequired,
  };

  const Buttons = buttons.map(({ iconClass, href, label }) => (
    <a key={label} className="button" href={href} target="_blank">
      <span className="icon">
        <i className={`fa fa-${iconClass}`} />
      </span>
      <span className="is-uppercase">{label}</span>
    </a>
  ));

  return (
    <div className={cx('modal', { 'is-active': isActive })}>
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <section className="modal-card-body is-paddingless">
          <img src={images[0]} alt="" />
          <div className="content section">
            <h1 className="title">{title}</h1>
            <p className="text">{content}</p>
            <p className="field">
              {Buttons}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

Modal.propTypes = {};
Modal.defaultProps = {};

export default Modal;
