import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useFormikContext } from 'formik';
import { CheckboxSingleStyles } from './ElementCheckbox.styles';

const CheckboxFormSingle = ({ name, ...props }) => {
  const { setFieldValue, values } = useFormikContext(props);
  const handleChangeCheckbox = (e) => {
    const { checked, name } = e.target;
    setFieldValue(name, checked);
  };
  return (
    <CheckboxSingleStyles>
      <input
        className="checkbox-single"
        type="checkbox"
        checked={values[name]}
        name={name}
        onChange={handleChangeCheckbox}
      />
      <span className="fake-checkbox">
        <span className="icon-checkbox">
          <FaCheck />
        </span>
      </span>
    </CheckboxSingleStyles>
  );
};

export default CheckboxFormSingle;
