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
    isDefaultImage,
    inputErrorArr
  } = props;
  return (
    <div className="fill__container-form section__collapse">
      <InputFill valueInput={name} labelFor={'name'} labelContent={'nombre completo'} inputId={'name'} inputType={'text'} inputName={'completeName'} inputPlaceholder={'Ej: Sally Jill'} updateUser={updateUser} classError={inputErrorArr.includes('name') ? 'error' : ''} />
      <InputFill valueInput={job} labelFor={'job'} labelContent={'puesto'} inputId={'job'} inputType={'text'} inputName={'job'} inputPlaceholder={'Ej: Front-end unicorn'} updateUser={updateUser} classError={inputErrorArr.includes('job') ? 'error' : ''} />
      <ImageLoad imageLoad={imageLoad} clickLoadImage={clickLoadImage} getImage={getImage} photo={photo} isDefaultImage={isDefaultImage} classError={inputErrorArr.includes('photo') ? 'error' : ''} />
      <InputFill valueInput={email} labelFor={'email'} labelContent={'email'} inputId={'email'} inputType={'email'} inputName={'email'} inputPlaceholder={'Ej: sally-hill@gmail.com'} dataInfo={'mailto:'} updateUser={updateUser} classError={inputErrorArr.includes('email') ? 'error' : ''} />
      <InputFill valueInput={phone} labelFor={'phone'} labelContent={'teléfono'} inputId={'phone'} inputType={'tel'} inputName={'phoneNumber'} inputPlaceholder={'Ej: 555-55-55-55'} dataInfo={'tel:'} updateUser={updateUser} />
      <InputFill
        valueInput={linkedin}
        labelFor={'linkedin'}
        labelContent={'linkedin'}
        inputId={'linkedin'}
        inputType={'text'}
        inputName={'linkedin'}
        inputPlaceholder={'Ej: sally.hill'}
        dataInfo={'https://www.linkedin.com/in/'}
        updateUser={updateUser}
        classError={inputErrorArr.includes('linkedin') ? 'error' : ''}
      />
      <InputFill valueInput={github} labelFor={'github'} labelContent={'github'} inputId={'github'} inputType={'text'} inputName={'github'} inputPlaceholder={'Ej: sally-hill'} dataInfo={'https://github.com/'} updateUser={updateUser} classError={inputErrorArr.includes('github') ? 'error' : ''} />
    </div>
  );
};

Fill.propTypes = {
  updateUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  imageLoad: PropTypes.object.isRequired,
  clickLoadImage: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
  isDefaultImage: PropTypes.bool.isRequired
};

export default Fill;
