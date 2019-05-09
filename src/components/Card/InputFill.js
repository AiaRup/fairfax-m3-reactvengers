import React from 'react';

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

export default InputFill;
