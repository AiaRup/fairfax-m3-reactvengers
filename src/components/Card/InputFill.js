import React from 'react';
import PropTypes from 'prop-types';

const InputFill = ({ labelFor, labelContent, inputId, inputType, inputName, inputPlaceholder, dataInfo}) => {
  return (
    <div className="fill__field-container">
      <label for={labelFor} className="fill__label">{labelContent}</label>
      <input
        id={inputId}
        className="fill__field"
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        data-info={dataInfo}
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
  dataInfo: PropTypes.string.isRequired
}

export default InputFill;
