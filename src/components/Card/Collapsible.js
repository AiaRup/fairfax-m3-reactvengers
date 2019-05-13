import React from 'react';
import TitleCollapsible from './TitleCollapsible';

class Collapsible extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

        collapsibleArr: [
          { id: 'design', isVisible: true },
          { id: 'fill', isVisible: false },
          { id: 'share', isVisible: false }
        ]
      }
      this.changeCollapsible = this.changeCollapsible.bind(this);
    }

  changeCollapsible (event) {
    console.log(event.currentTarget);
  }
  render () {
    const {fieldsetClass, titleInfo, children, legendText} = this.props
    return (
      <fieldset className={`form__fieldset ${fieldsetClass} fieldset__active`}>
      <legend className="fieldset__legend">{legendText}</legend>
          <TitleCollapsible titleInfo={titleInfo} changeCollapsible={this.changeCollapsible}/>
          {children}
    </fieldset>
    )
  }
}

export default Collapsible;
