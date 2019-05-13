import React from 'react';
import PreviewCard from './PreviewCard/PreviewCard';
import Form from './Form';

const Main = props => {
  const { user, updateUser, iconsStateArr, resetInfo } = props;

  return (
    <main className="page__main-card">
      <div className="wrapper">
        <PreviewCard user={user} iconsStateArr={iconsStateArr}  resetInfo={resetInfo}/>
        <Form updateUser={updateUser} />
      </div>
    </main>
  );
};

export default Main;
