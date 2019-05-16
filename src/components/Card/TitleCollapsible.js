import React from 'react';
import PropTypes from 'prop-types';

const TitleCollapsible = ({ titleInfo: { wrapperClass, containerClass, iconClass, titleClass, title, id, arrowClass }, changeCollapsible }) => {
  return (
    <div className={`${wrapperClass} collapse__title`} id={id} onClick={changeCollapsible}>
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
  titleInfo: PropTypes.object.isRequired,
  changeCollapsible: PropTypes.func.isRequired
};

export default TitleCollapsible;
