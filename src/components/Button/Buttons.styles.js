import styled from 'styled-components';

export const ButtonCustom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size, to, href }) => (to || href ? '0' : size.padding)};
  border-radius: 5px;
  background-color: ${({ color, disabled }) => (disabled ? '#eee' : color)};
  color: ${({ disabled, color }) => {
    if (disabled) {
      return '#6666';
    } else if (color === '#fff' || color === '#f7f7f7') {
      return 'var(--text-color)';
    } else {
      return 'var(--white-color)';
    }
  }};
  font-size: ${({ size }) => size.fontSize};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  & + & {
    margin-left: 1rem;
  }
  .text-btn {
    padding-left: 5px;
  }
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.9)};
    background-color: ${({ color }) => {
      switch (color) {
        case '#fff':
          return 'var(--eee-color)';
        case '#f7f7f7':
          return 'var(--eee-color)';
        default:
          break;
      }
    }};
  }

  a {
    color: var(--white-color);
    display: block;
    padding: ${({ size }) => size.padding};
  }
  &:disabled:hover {
    cursor: not-allowed;
  }
  .icon-btn {
    display: inline-block;
    transform: translateY(2px);
  }

  .icon-btn.active {
    margin: 0;
  }

  /* loading css */
  .loader {
    border: 2px solid ${({ color }) => color || 'var(--blue-color'};
    border-top: 2px solid
      ${({ color }) =>
        color !== '#fff' ? 'var(--white-color)' : 'var(--blue-color)'};
    border-right: 2px solid
      ${({ color }) =>
        color !== '#fff' ? 'var(--white-color)' : 'var(--blue-color)'};
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    animation: spin 1s linear infinite;
    display: inline-block;
    margin-right: 5px;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
