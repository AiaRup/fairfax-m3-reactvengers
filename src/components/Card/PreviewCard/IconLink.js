import React from 'react';
import PropTypes from 'prop-types';

const IconLink = ({ liClass, linkClass, iconClass, iconsData, hrefDefault, isVisible }) => {
  const content = isVisible ? (
    <li className={`card__link-sm ${liClass}`}>
      <a className={`${linkClass} social__link`} href={`${hrefDefault}${iconsData}`} target="_blank" rel="noopener noreferrer">
        <i className={iconClass} />
      </a>
    </li>
  ) : null;
  return content;
};

IconLink.propTypes = {
  liClass: PropTypes.string.isRequired,
  linkClass: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  hrefDefault: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default IconLink;
