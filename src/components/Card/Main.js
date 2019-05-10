import React from 'react';
import PreviewCard from './PreviewCard/PreviewCard';
import Form from './Form';

const Main = props => {
  const { user, updateUser, iconsStateArr } = props;

  return (
    <main className="page__main-card">
      <div className="wrapper">
        <PreviewCard user={user} iconsStateArr={iconsStateArr}/>
        <Form updateUser={updateUser} />
      </div>
    </main>
  );
};

export default Main;
