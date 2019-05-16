import React from 'react';
import Collapsible from './Collapsible';
import Share from './Share/Share';
import Fill from './Fill/Fill';
import Design from './Design/Design';
import PropTypes from 'prop-types';

const ARRAYTITLE = [
  {
    wrapperClass: 'design__title-wrapper',
    containerClass: 'design__title',
    iconClass: 'far fa-object-ungroup design-icon',
    titleClass: 'design__title-text',
    title: 'diseña',
    id: 'design',
    arrowClass: 'design__button'
  },
  {
    wrapperClass: 'fill__container-title',
    containerClass: 'title__fill-container',
    iconClass: 'far fa-keyboard fill__icon',
    titleClass: 'title__fill',
    title: 'rellena',
    id:'fill',
    arrowClass: 'button__fill'
  },
  {
    wrapperClass: 'share__title-wrapper',
    containerClass: 'share__title',
    iconClass: 'fas fa-share-alt share-icon',
    titleClass: 'share__title-text',
    title: 'comparte',
    id: 'share',
    arrowClass: 'share__button-arrow'
  }
];

class Form extends React.Component {
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
    const newCollapsibleArr = this.state.collapsibleArr.map((item) => {
      if(event.currentTarget.id === item.id) {
        item.isVisible = !item.isVisible;
      } else {
        item.isVisible = false;
      }
      return item;
    })
      this.setState ({collapsibleArr: newCollapsibleArr})
  }

  render () {
    const { updateUser, selectPalette, imageLoad, clickLoadImage, getImage, user } = this.props;

      return (
        <form className="main__settings" action="" method="POST">
          <Collapsible titleInfo={ARRAYTITLE[0]} collapsibleObject={this.state.collapsibleArr[0]} fieldsetClass="design__main" legendText="diseña" changeCollapsible = {this.changeCollapsible}>
            <Design selectPalette={selectPalette} />
          </Collapsible>
          <Collapsible titleInfo={ARRAYTITLE[1]} collapsibleObject={this.state.collapsibleArr[1]} fieldsetClass="fill__container" legendText="rellena" changeCollapsible = {this.changeCollapsible}>
            <Fill updateUser={updateUser} imageLoad={imageLoad} clickLoadImage={clickLoadImage} getImage={getImage} user={user}/>
          </Collapsible>
          <Collapsible titleInfo={ARRAYTITLE[2]} collapsibleObject={this.state.collapsibleArr[2]} fieldsetClass="share__main" legendText="comparte" changeCollapsible = {this.changeCollapsible}>
            <Share />
          </Collapsible>
        </form>
      );
    };
  }

Form.propTypes = {
  updateUser: PropTypes.func.isRequired,
  selectPalette: PropTypes.func.isRequired
}
export default Form;
