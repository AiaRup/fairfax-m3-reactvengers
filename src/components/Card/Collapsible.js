import React from 'react';
import TitleCollapsible from './TitleCollapsible';
import PropTypes from 'prop-types';

const Collapsible = props => {
  let { fieldsetClass, titleInfo, children, legendText, collapsibleObject, changeCollapsible } = props;
  fieldsetClass = collapsibleObject.isVisible ? `${fieldsetClass} fieldset__active` : fieldsetClass;
  return (
    <fieldset className={`form__fieldset ${fieldsetClass}`}>
      <legend className="fieldset__legend">{legendText}</legend>
      <TitleCollapsible titleInfo={titleInfo} changeCollapsible={changeCollapsible} />
      {collapsibleObject.isVisible && children}
    </fieldset>
  );
};

Collapsible.propTypes = {
  fieldsetClass: PropTypes.string.isRequired,
  titleInfo: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  legendText: PropTypes.string.isRequired,
  collapsibleObject: PropTypes.object.isRequired,
  changeCollapsible: PropTypes.func.isRequired
};

export default Collapsible;
