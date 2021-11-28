import styled from 'styled-components';

export const BoxInputField = styled.div`
  & + & {
    margin-top: 2rem;
  }
  width: 100%;
  .label-field {
    font-size: 1.4rem;
    display: block;
    margin-bottom: 5px;
  }

  .input-field {
    border-radius: 5px;
    padding: 1rem;
    border: none;
    border: 1px solid var(--ddd-color);
    width: 100%;
    height: 4rem;
    background-color: white;
  }
  .err-msg {
    font-size: 1em !important;
  }
  .input-field:hover {
    border: 1px solid
      ${({ disabled }) =>
        disabled ? 'var(--ddd-color)' : 'var(--blue-bold-color)'};
    box-shadow: 0 0 1rem rgba(234 34 234 / 10%);
  }

  .input-field::placeholder {
    color: var(--aaa-color);
  }
`;
