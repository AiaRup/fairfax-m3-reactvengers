import React from 'react';
import TitleCollapsible from './TitleCollapsible';

class Collapsible extends React.Component {
  render () {
    const {fieldsetClass, titleInfo, children, legendText} = this.props
    return (
      <fieldset className={`form__fieldset ${fieldsetClass} fieldset__active`}>
      <legend className="fieldset__legend">{legendText}</legend>
          <TitleCollapsible titleInfo={titleInfo}/>
          {children}
    </fieldset>
    )
  }
}

export default Collapsible;
