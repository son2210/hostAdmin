import styled from 'styled-components';
export const WrapFrom = styled.div`
  overflow-x: hidden;
  position: relative;
  & textarea {
    display: block;
    width: 100%;
    min-height: 15rem;
    border-radius: 5px;
    border: none;
    background-color: var(--bg-tr-table);
    padding: 1rem;
  }
  & label {
    font-size: 1.4rem;
    padding: 1rem;
    margin-right: 0.6rem;
  }
  & label:hover {
    background-color: var(--ddd-color);
    border-radius: 5px;
  }
  & .error-message {
    font-size: 1.3rem;
    color: var(--red-color);
    bottom: 2.5rem;
    position: absolute;
  }
`;
export const GroupButton = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: right;
  align-items: center;
`;
