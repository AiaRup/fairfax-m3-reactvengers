import React from 'react';
import TitleCollapsible from './TitleCollapsible';
import PropTypes from 'prop-types';

class Collapsible extends React.Component {

  render () {
    const {fieldsetClass, titleInfo, children, legendText, collapsibleObject, changeCollapsible} = this.props
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

Collapsible.propTypes = {
  fieldsetClass: PropTypes.string,
  titleInfo: PropTypes.object,
  children: PropTypes.element,
  legendText: PropTypes.string,
  collapsibleObject: PropTypes.object,
  changeCollapsible: PropTypes.func
}

export default Collapsible;
