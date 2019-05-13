import React from 'react';
import PropTypes from 'prop-types';

const TitleCollapsible = ({ titleInfo: { wrapperClass, containerClass, iconClass, titleClass, title, arrowClass }, changeCollapsible }) => {
  return (
    <div className={`${wrapperClass} collapse__title`} onClick={changeCollapsible}>
      <div className={containerClass}>
        <i className={iconClass} />
        <h3 className={titleClass}>{title}</h3>
      </div>
      <div className={arrowClass}>
        <i className="fas fa-chevron-down arrow" />
      </div>
    </div>
  );
};

TitleCollapsible.propTypes = {
  titleInfo: PropTypes.object.isRequired
};

export default TitleCollapsible;
