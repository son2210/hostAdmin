import React from 'react';

import { TextStyle } from './HightLightText.styles';

const HightLightText = ({ children, value }) => {
  let bgColor = null;
  switch (value) {
    case 'superadmin':
      bgColor = '#b8daff';
      break;
    case 'faculty_chairman':
      bgColor = '#f5c6cb';
      break;
    case 'teacher':
      bgColor = '#c3e6cb';
      break;
    case 'ministry':
      bgColor = '#ffeeba';
      break;
    case 5:
      bgColor = '#bee5eb';
      break;
    default:
      bgColor = null;
  }
  return <TextStyle color={bgColor}>{children}</TextStyle>;
};

export default HightLightText;
