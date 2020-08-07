import React from 'react';
import Select from 'react-select';

const SelectField = ({
  className,
  name,
  label,
  placeholder,
  handleChange,
  isLableRequired,
  isRequired,
  options,
  value,
  isMulti,
  labelKey,
  valueKey,
  disabled,
  error,
  simpleValue
}) => (
  <React.Fragment>
    <div className="m-t-20">
      {isLableRequired &&
      <div className="input-field">
        <label htmlFor={label} className="field-label">{label}</label>
        {isRequired && (<span className="mandatory-marker">&nbsp;*</span>)}
      </div>
    }
      <Select
        name={name}
        className={className}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        value={value}
        clearable={false}
        multi={isMulti}
        disabled={disabled}
        labelKey={labelKey}
        valueKey={valueKey}
        simpleValue={simpleValue}
      />
      {
        error && <div className="error-message">{label} {error}</div>
      }
    </div>
  </React.Fragment>
);

export default SelectField;
