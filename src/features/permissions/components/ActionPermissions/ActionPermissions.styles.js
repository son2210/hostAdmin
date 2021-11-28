import styled from 'styled-components';

export const ContentForm = styled.div`
  & .from-group {
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .from-group + .from-group {
    margin-top: 1.5rem;
  }
  .form-checkbox {
    align-items: center;
  }
  & .from-group > label:nth-child(1) {
    line-height: 3rem;
    font-size: 15px;
    color: gray;
    white-space: nowrap;
    width: 40%;
  }
`;
export const GroupAction = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
`;
