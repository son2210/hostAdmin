import React, { memo } from 'react';
import { useFormikContext } from 'formik';

import { BoxCheckbox } from './ElementCheckbox.styles';

const ElementCheckbox = ({ id, data, name, ...props }) => {
  const { setFieldValue, values } = useFormikContext(props);

  const handleChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setFieldValue(name, Array.from(new Set([...values[name], value])));
    } else {
      setFieldValue(
        name,
        values[name].filter((item) =>
          item?.name ? item.name !== value : item !== value
        )
      );
    }
  };

  let mixArray = [];
  if (values !== null && values) {
    mixArray = Array.from(
      new Set(values[name].map((item) => (item?.name ? item.name : item)))
    );
  }
  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <BoxCheckbox key={item.id}>
              <label htmlFor={item.id} className="label-filed label-checkbox">
                {item.name}
              </label>
              <input
                type="checkbox"
                className="checkbox-field"
                id={item.id}
                name={name}
                value={item.name}
                checked={mixArray.includes(item.name)}
                onChange={handleChange}
              />
            </BoxCheckbox>
          );
        })}
    </>
  );
};

export default memo(ElementCheckbox);
