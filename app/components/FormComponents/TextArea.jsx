import React from 'react';

const TextArea = ({
  className,
  name,
  label,
  isLableRequired,
  isRequired,
  type,
  handleChange,
  value
}) => (
  <React.Fragment>
    <div>
      {isLableRequired &&
      <div className="input-field">
        <label htmlFor={label} className="field-label">{label}</label>
        {isRequired && (<span className="mandatory-marker">&nbsp;*</span>)}
      </div>
    }
      <textarea
        name={name}
        className={className}
        type={type}
        onChange={handleChange}
        value={value}
        maxLength="255"
      />
    </div>
  </React.Fragment>
);

export default TextArea;
