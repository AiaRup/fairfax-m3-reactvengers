import React from 'react';
import TitleCollapsible from './TitleCollapsible';

class Collapsible extends React.Component {

  render () {
    const {fieldsetClass, titleInfo, children, legendText, collapsibleObject,changeCollapsible} = this.props
    // const contentChildren = collapsibleObject.isVisible ? {children} : '';
    return (
      <fieldset className={`form__fieldset ${fieldsetClass} fieldset__active`}>
      <legend className="fieldset__legend">{legendText}</legend>
          <TitleCollapsible titleInfo={titleInfo} changeCollapsible={changeCollapsible} />
          {collapsibleObject.isVisible && children}
    </fieldset>
    )
  }
}

export default Collapsible;
