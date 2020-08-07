import React, { Fragment } from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

Moment.locale('en');
momentLocalizer();

const DatePicker = ({
  minDate, maxDate, name, isLableRequired,
  label, dateFormat, value, handleChange
}) => (
  <Fragment>
    {isLableRequired &&
      <div className="input-field">
        <label htmlFor={label}>{label}</label>
      </div>
    }
    <DateTimePicker
      label={label}
      name={name}
      value={!value ? null : new Date(value)}
      format={dateFormat}
      onChange={handleChange}
      min={minDate}
      max={maxDate}
      time={false}
    />
  </Fragment>
);

export default DatePicker;
