import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonCustom } from './Buttons.styles';
export const Button = ({
  children,
  color,
  href,
  onClick,
  disabled,
  size,
  icon,
  type,
  loading = false,
  to,
  className,
  target = '_blank',
}) => {
  let colorButton = '';
  switch (color) {
    case 'warning':
      colorButton = '#FBB837';
      break;
    case 'danger':
      colorButton = '#E54B3C';
      break;
    case 'info':
      colorButton = '#17a2b8';
      break;
    case 'success':
      colorButton = '#04aa6d';
      break;
    case 'primary':
      colorButton = '#3498DB';
      break;
    case 'default':
      colorButton = '#f7f7f7';
      break;
    default:
      colorButton = '#fff';
  }

  let sizeButton = { fontSize: '', padding: '' };
  switch (size) {
    case 'small':
      sizeButton = { fontSize: '1.4rem', padding: '8px 10px' };
      break;
    case 'large':
      sizeButton = { fontSize: '1.6rem', padding: '12px 14px' };
      break;
    default:
      sizeButton = { fontSize: '1.5rem', padding: '10px 12px' };
  }

  let componentButton = null;
  if (href) {
    componentButton = (
      <ButtonCustom
        href={href}
        color={colorButton}
        size={sizeButton}
        className={className}
      >
        <a href={href} target={target} rel="noreferrer">
          <span className="icon-btn">{icon}</span>
          <span className={`${children && 'text-btn'}`}>{children}</span>
        </a>
      </ButtonCustom>
    );
  } else if (to) {
    componentButton = (
      <ButtonCustom
        color={colorButton}
        size={sizeButton}
        className={className}
        to={to}
      >
        <Link to={to}>
          <span className="icon-btn">{icon}</span>
          <span className={`${children && 'text-btn'}`}>{children}</span>
        </Link>
      </ButtonCustom>
    );
  } else {
    componentButton = (
      <ButtonCustom
        color={colorButton}
        onClick={!disabled ? onClick : () => {}}
        size={sizeButton}
        disabled={disabled}
        type={type}
        className={className}
      >
        {!loading && (
          <span className={`icon-btn ${children ? '' : 'active'}`}>{icon}</span>
        )}

        {loading && (
          <span
            className={`icon-btn loader ${children ? '' : 'active'}`}
          ></span>
        )}

        {children && <span className="text-btn">{children}</span>}
      </ButtonCustom>
    );
  }
  return componentButton;
};
