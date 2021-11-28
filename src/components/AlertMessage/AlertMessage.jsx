import React, { memo } from 'react';
import { ToastContainer } from 'react-toastify';

import { GroupAlert } from './AlertMessage.styles';

const AlertMessage = () => {
  return (
    <GroupAlert>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        toastClassName="alert-main"
      />
    </GroupAlert>
  );
};

export default memo(AlertMessage);
