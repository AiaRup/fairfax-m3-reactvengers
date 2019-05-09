import React from 'react';
import TitleCollapsible from './TitleCollapsible';

// destructuring props in the () of the function
const Collapsible = ({ fieldsetClass, titleInfo, children, legendText }) => {
  return (
    <fieldset className={`form__fieldset ${fieldsetClass} fieldset__active`}>
      <legend className="fieldset__legend">{legendText}</legend>
      <TitleCollapsible titleInfo={titleInfo} />
      {children}
    </fieldset>
  );
};

export default Collapsible;
