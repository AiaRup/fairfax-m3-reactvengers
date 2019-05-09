import React from 'react';

const TitleCollapsible = ({ titleInfo: { wrapperClass, containerClass, iconClass, titleClass, title, arrowClass } }) => {
  return (
    <div className={`${wrapperClass} collapse__title`}>
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

export default TitleCollapsible;
