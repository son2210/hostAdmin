import React, { memo } from 'react';
import { useField, ErrorMessage } from 'formik';
import { BoxInputField } from './ElementInput.styles';
const ElementInput = ({
  label,
  id,
  type = 'text',
  placeholder,
  disabled,
  ...props
}) => {
  const [field, meta] = useField(props);
  const classError = meta.touched && meta.error;
  return (
    <BoxInputField
      disabled={disabled}
      className={`${classError ? 'error-group' : ''}`}
    >
      {label && (
        <label htmlFor={id} className="label-field">
          {label}
        </label>
      )}

      <input
        {...field}
        {...props}
        value={field.value || ''}
        type={type}
        placeholder={placeholder}
        className="input-field form-field"
        disabled={disabled}
      />
      <ErrorMessage component="div" name={field.name} className="err-msg" />
    </BoxInputField>
  );
};

export default memo(ElementInput);
