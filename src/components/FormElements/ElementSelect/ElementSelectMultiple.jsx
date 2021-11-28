import React, { memo } from 'react';
import Select from 'react-select';
import { useFormikContext } from 'formik';

import { BoxSelect } from './ElementSelect.styles';

const ElementSelectMultiple = ({
  label,
  options,
  placeholder,
  name,
  ...props
}) => {
  const { setFieldValue } = useFormikContext(props);
  const handleSelect = (selected) => {
    const listDataSelect = selected.map((item) => item.value);
    setFieldValue(name, listDataSelect);
  };
  return (
    <BoxSelect>
      {label && (
        <label htmlFor="" className="label-field">
          {label}
        </label>
      )}
      <Select
        {...props}
        className="select-option"
        options={options}
        placeholder={placeholder}
        onChange={handleSelect}
        isMulti
        defaultValue={3}
      />

      {/* <ErrorMessage name={field.name} component="span" className="err-msg" /> */}
    </BoxSelect>
  );
};

export default memo(ElementSelectMultiple);
