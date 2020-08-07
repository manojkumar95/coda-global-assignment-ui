import React from 'react';

const InputField = ({
  className,
  name,
  label,
  placeholder,
  autocomplete,
  handleChange,
  isLableRequired,
  isRequired,
  type,
  error,
  value,
  readOnly
}) => (
  <React.Fragment>
    <div>
      {isLableRequired &&
      <div className="input-field">
        <label htmlFor={label} className="field-label">{label}</label>
        {isRequired && (<span className="mandatory-marker">&nbsp;*</span>)}
      </div>
    }
      <input
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete={autocomplete}
        type={type}
        value={value}
        readOnly={readOnly}
        maxLength="100"
      />
      {
        error && <div className="error-message">{label} {error}</div>
      }
    </div>
  </React.Fragment>
);

export default InputField;
