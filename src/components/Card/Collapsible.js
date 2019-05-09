import React from 'react';
import PropTypes from 'prop-types';
import TitleCollapsible from './TitleCollapsible';

const Collapsible = ({fieldsetClass, titleInfo, children, legendText}) => {
  return (
    <fieldset className={`form__fieldset ${fieldsetClass} fieldset__active`}>
      <legend className="fieldset__legend">{legendText}</legend>
          <TitleCollapsible titleInfo={titleInfo}/>
          {children}
    </fieldset>
  )
}

Collapsible.propTypes = {
  fieldsetClass: PropTypes.string.isRequired,
  titleInfo: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  legendText: PropTypes.string.isRequired
};

export default Collapsible;