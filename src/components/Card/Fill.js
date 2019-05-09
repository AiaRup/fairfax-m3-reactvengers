import React from 'react';
import InputFill from './InputFill';
import ImageLoad from './ImageLoad';

const Fill = () => {
  return (

  <div class="fill__container-form section__collapse">

    <InputFill labelFor={'name'} labelContent={'nombre completo'} inputId={'name'} inputType={'text'} inputName={'completeName'} inputPlaceholder={'Ej: Sally Jill'}/>
    <ImageLoad />
    <InputFill labelFor={'job'} labelContent={'puesto'} inputId={'job'} inputType={'text'} inputName={'job'} inputPlaceholder={'Ej: Front-end unicorn'}/>
    <InputFill labelFor={'email'} labelContent={'email'} inputId={'email'} inputType={'email'} inputName={'email'} inputPlaceholder={'Ej: sally-hill@gmail.com'} dataInfo={'mailto:'}/>
    <InputFill labelFor={'phone'} labelContent={'teléfono'} inputId={'phone'} inputType={'tel'} inputName={'phoneNumber'} inputPlaceholder={'Ej: 555-55-55-55'} dataInfo={'tel:'}/>
    <InputFill labelFor={'linkedin'} labelContent={'linkedin'} inputId={'linkedin'} inputType={'text'} inputName={'linkedin'} inputPlaceholder={'Ej: sally.hill'} dataInfo={'https://www.linkedin.com/in/'}/>
    <InputFill labelFor={'github'} labelContent={'github'} inputId={'github'} inputType={'text'} inputName={'github'} inputPlaceholder={'Ej: sally-hill'} dataInfo={'https://github.com/'}/>

  </div>
  )
}

export default Fill;
