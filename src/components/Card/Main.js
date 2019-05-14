import React from 'react';
import PreviewCard from './PreviewCard/PreviewCard';
import Form from './Form';
import PropTypes from 'prop-types';

const Main = props => {
  const { user, updateUser, iconsStateArr, selectPalette } = props;

  return (
    <main className="page__main-card">
      <div className="wrapper">
        <PreviewCard user={user} iconsStateArr={iconsStateArr} />
        <Form updateUser={updateUser} selectPalette={selectPalette} />
      </div>
    </main>
  );
};

Main.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  iconsStateArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectPalette: PropTypes.func.isRequired
}

export default Main;
