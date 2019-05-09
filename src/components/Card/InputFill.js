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

TitleCollapsible.propTypes = {
  labelFor: PropTypes.string,
  labelContent: PropTypes.string,
  inputId: PropTypes.string,
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  dataInfo: PropTypes.string
}

export default InputFill;
