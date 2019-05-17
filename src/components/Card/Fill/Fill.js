import React from 'react';
import InputFill from './InputFill';
import ImageLoad from './ImageLoad';
import PropTypes from 'prop-types';

const Fill = props => {
  const {
    updateUser,
    user: { name, job, email, phone, linkedin, github, photo },
    imageLoad,
    clickLoadImage,
    getImage,
    isDefaultImage
  } = props;
  return (
    <div className="fill__container-form section__collapse">
      <InputFill valueInput={name} labelFor={'name'} labelContent={'nombre completo'} inputId={'name'} inputType={'text'} inputName={'completeName'} inputPlaceholder={'Ej: Sally Jill'} updateUser={updateUser} />
      <InputFill valueInput={job} labelFor={'job'} labelContent={'puesto'} inputId={'job'} inputType={'text'} inputName={'job'} inputPlaceholder={'Ej: Front-end unicorn'} updateUser={updateUser} />
      <ImageLoad imageLoad={imageLoad} clickLoadImage={clickLoadImage} getImage={getImage} photo={photo} isDefaultImage={isDefaultImage} />
      <InputFill valueInput={email} labelFor={'email'} labelContent={'email'} inputId={'email'} inputType={'email'} inputName={'email'} inputPlaceholder={'Ej: sally-hill@gmail.com'} dataInfo={'mailto:'} updateUser={updateUser} />
      <InputFill valueInput={phone} labelFor={'phone'} labelContent={'teléfono'} inputId={'phone'} inputType={'tel'} inputName={'phoneNumber'} inputPlaceholder={'Ej: 555-55-55-55'} dataInfo={'tel:'} updateUser={updateUser} />
      <InputFill valueInput={linkedin} labelFor={'linkedin'} labelContent={'linkedin'} inputId={'linkedin'} inputType={'text'} inputName={'linkedin'} inputPlaceholder={'Ej: sally.hill'} dataInfo={'https://www.linkedin.com/in/'} updateUser={updateUser} />
      <InputFill valueInput={github} labelFor={'github'} labelContent={'github'} inputId={'github'} inputType={'text'} inputName={'github'} inputPlaceholder={'Ej: sally-hill'} dataInfo={'https://github.com/'} updateUser={updateUser} />
    </div>
  );
};

Fill.propTypes = {
  updateUser: PropTypes.func,
  user: PropTypes.object
};

export default Fill;
