import React from 'react';
import InputFill from './InputFill';
import ImageLoad from './ImageLoad';

const Fill = props => {
  const { updateUser, user, imageLoad, clickLoadImage, getImage } = props;
  return (
    <div className="fill__container-form section__collapse">
      <InputFill labelFor={'name'} labelContent={'nombre completo'} inputId={'name'} inputType={'text'} inputName={'completeName'} inputPlaceholder={'Ej: Sally Jill'} updateUser={updateUser} />
      <InputFill labelFor={'job'} labelContent={'puesto'} inputId={'job'} inputType={'text'} inputName={'job'} inputPlaceholder={'Ej: Front-end unicorn'} updateUser={updateUser} />
      <ImageLoad imageLoad={imageLoad} clickLoadImage={clickLoadImage} getImage={getImage} photo={user.photo} />
      <InputFill labelFor={'email'} labelContent={'email'} inputId={'email'} inputType={'email'} inputName={'email'} inputPlaceholder={'Ej: sally-hill@gmail.com'} dataInfo={'mailto:'} updateUser={updateUser} />
      <InputFill labelFor={'phone'} labelContent={'teléfono'} inputId={'phone'} inputType={'tel'} inputName={'phoneNumber'} inputPlaceholder={'Ej: 555-55-55-55'} dataInfo={'tel:'} updateUser={updateUser} />
      <InputFill labelFor={'linkedin'} labelContent={'linkedin'} inputId={'linkedin'} inputType={'text'} inputName={'linkedin'} inputPlaceholder={'Ej: sally.hill'} dataInfo={'https://www.linkedin.com/in/'} updateUser={updateUser} />
      <InputFill labelFor={'github'} labelContent={'github'} inputId={'github'} inputType={'text'} inputName={'github'} inputPlaceholder={'Ej: sally-hill'} dataInfo={'https://github.com/'} updateUser={updateUser} />
    </div>
  );
};

export default Fill;
