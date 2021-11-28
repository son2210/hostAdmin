import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { CheckboxSingleStyles } from './ElementCheckbox.styles';

const CheckboxSingle = ({ checked, onChange }) => {
  return (
    <CheckboxSingleStyles>
      <input
        className="checkbox-single"
        type="checkbox"
        checked={checked}
        onChange={onChange ? onChange : () => {}}
      />
      <span className="fake-checkbox">
        <span className="icon-checkbox">
          <FaCheck />
        </span>
      </span>
    </CheckboxSingleStyles>
  );
};

export default CheckboxSingle;
