import React from 'react';
import PropTypes from 'prop-types';

const InputFill = ({ labelFor, labelContent, inputId, inputType, inputName, inputPlaceholder, dataInfo, updateUser, valueInput}) => {

    const getValue = (event) => {
      const value = event.currentTarget.value;
      updateUser(value, inputId);
    }

  return (
    <div className="fill__field-container">
      <label htmlFor={labelFor} className="fill__label">{labelContent}</label>
      <input
        id={inputId}
        className="fill__field"
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        data-info={dataInfo}
        onChange={getValue}
        value={valueInput}
      />
    </div>
  )
}

InputFill.propTypes = {
  labelFor: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  dataInfo: PropTypes.string,
  valueInput: PropTypes.string
}

export default InputFill;
