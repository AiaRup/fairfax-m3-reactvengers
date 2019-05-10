import React from 'react';
import PreviewCard from './PreviewCard/PreviewCard';
import Form from './Form';

const Main = props => {
  const { user, updateUser } = props;

  return (
    <main className="page__main-card">
      <div className="wrapper">
        <PreviewCard user={user} />
        <Form updateUser={updateUser} />
      </div>
    </main>
  );
};

export default Main;
