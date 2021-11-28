import React, { memo } from 'react';
import { useFormikContext } from 'formik';

const ElementInputFile = ({ className, name, value, id, ...props }) => {
  const { setFieldValue, setTouched } = useFormikContext();

  const handleFile = (e) => {
    setFieldValue(name, e.target.files[0]);
  };

  return (
    <>
      <input
        type="file"
        className={className}
        id={id}
        onChange={handleFile}
        {...props}
        value={value}
        onBlur={() => setTouched(true)}
      />
    </>
  );
};

export default memo(ElementInputFile);
