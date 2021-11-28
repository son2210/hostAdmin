import React from 'react';
import { useField } from 'formik';

import { BoxElementRadio, GroupRadio } from './ElementRadioGroup.styles';

export const ElementRadioGroup = ({ title, error, touched, children }) => {
  return (
    <GroupRadio>
      <div className="title-group">{title}</div>
      <div className="children-group">{children}</div>
      {touched && <div>{error}</div>}
    </GroupRadio>
  );
};

export const ElementRadio = ({ label, id, ...rest }) => {
  const [field] = useField(rest);
  return (
    <BoxElementRadio>
      <label htmlFor={id} className="label-field">
        {label}
      </label>
      <input type="radio" className="radio-field" id={id} {...field} />
      <div className="radio-fake"></div>
    </BoxElementRadio>
  );
};
