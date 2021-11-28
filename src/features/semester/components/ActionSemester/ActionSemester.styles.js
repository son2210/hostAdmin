import styled from 'styled-components';

export const ContentForm = styled.div`
  & .from-group {
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  }
  & .from-group label {
    width: 40%;
    white-space: nowrap;
    margin-right: 2rem;
    line-height: 3rem;
    font-size: 15px;
    color: gray;
  }
  & .from-group > input {
    width: 25rem;
    border-radius: 5px;
    font-size: 14px;
    padding-left: 1rem;
    outline: none;
    border: 1px solid #c1bcbc;
    height: 3.8rem;
    font-weight: 200;
    :focus {
      border: 2px solid #165bf3;
    }
  }
`;
export const GroupAction = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
`;
