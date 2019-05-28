import React from 'react';
import PreviewCard from './PreviewCard/PreviewCard';
import Form from './Form';
import PropTypes from 'prop-types';

const Main = props => {
  const { user, updateUser, iconsStateArr, selectPalette, resetInfo, imageLoad, clickLoadImage, getImage, isDefaultImage, cardData, fetchNewResponse, isLoading, isError, inputErrorArr } = props;

  return (
    <main className="page__main-card">
      <div className="wrapper">
        <PreviewCard user={user} iconsStateArr={iconsStateArr} resetInfo={resetInfo} />
        <Form updateUser={updateUser} selectPalette={selectPalette} imageLoad={imageLoad} clickLoadImage={clickLoadImage} getImage={getImage} user={user} isDefaultImage={isDefaultImage} cardData={cardData} fetchNewResponse={fetchNewResponse} isLoading={isLoading} isError={isError} inputErrorArr={inputErrorArr}/>
      </div>
    </main>
  );
};

Main.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  iconsStateArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectPalette: PropTypes.func.isRequired,
  isDefaultImage: PropTypes.bool.isRequired,
  imageLoad: PropTypes.object.isRequired,
  clickLoadImage: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
  resetInfo: PropTypes.func.isRequired,
  cardData: PropTypes.string.isRequired,
  fetchNewResponse: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  inputErrorArr: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Main;
