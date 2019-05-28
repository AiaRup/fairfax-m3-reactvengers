import React from 'react';
import Collapsible from './Collapsible';
import Share from './Share/Share';
import Fill from './Fill/Fill';
import Design from './Design/Design';
import PropTypes from 'prop-types';
import { titlesArr } from '../../data/appData.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsibleArr: [{ id: 'design', isVisible: true }, { id: 'fill', isVisible: false }, { id: 'share', isVisible: false }]
    };
    this.changeCollapsible = this.changeCollapsible.bind(this);
  }

  changeCollapsible(event) {
    const newCollapsibleArr = this.state.collapsibleArr.map(item => {
      if (event.currentTarget.id === item.id) {
        item.isVisible = !item.isVisible;
      } else {
        item.isVisible = false;
      }
      return item;
    });
    this.setState({ collapsibleArr: newCollapsibleArr });
  }

    openFillOnError() {
      const newArr = this.state.collapsibleArr.map(collapsible => {
        if (collapsible.id === 'fill') {
          collapsible.isVisible = true;
        } else {
          collapsible.isVisible = false;
        }
        return collapsible;
      })
      this.setState({ collapsibleArr: newArr})
    }

componentWillReceiveProps(nextProps) {
      if (nextProps.isError) {
        this.openFillOnError();
      }
    }

  render() {
    const { updateUser, selectPalette, imageLoad, clickLoadImage, getImage, user, isDefaultImage, cardData, fetchNewResponse, isLoading, isError, inputErrorArr } = this.props;

    return (
      <form className="main__settings" action="" method="POST">
        <Collapsible titleInfo={titlesArr[0]} collapsibleObject={this.state.collapsibleArr[0]} fieldsetClass="design__main" legendText="diseña" changeCollapsible={this.changeCollapsible}>
          <Design selectPalette={selectPalette} userPalette={user.palette} />
        </Collapsible>
        <Collapsible titleInfo={titlesArr[1]} collapsibleObject={this.state.collapsibleArr[1]} fieldsetClass="fill__container" legendText="rellena" changeCollapsible={this.changeCollapsible} isError={isError}>
          <Fill updateUser={updateUser} imageLoad={imageLoad} clickLoadImage={clickLoadImage} getImage={getImage} user={user} isDefaultImage={isDefaultImage} inputErrorArr={inputErrorArr} />
        </Collapsible>
        <Collapsible titleInfo={titlesArr[2]} collapsibleObject={this.state.collapsibleArr[2]} fieldsetClass="share__main" legendText="comparte" changeCollapsible={this.changeCollapsible}>
          <Share cardData={cardData} fetchNewResponse={fetchNewResponse} isLoading={isLoading} isError={isError}/>
        </Collapsible>
      </form>
    );
  }
}

Form.propTypes = {
  updateUser: PropTypes.func.isRequired,
  selectPalette: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isDefaultImage: PropTypes.bool.isRequired,
  imageLoad: PropTypes.object.isRequired,
  clickLoadImage: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired
};
export default Form;
