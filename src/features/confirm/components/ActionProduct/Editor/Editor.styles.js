import styled from 'styled-components';
export const WarEditor = styled.div`
  & h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: gray;
    font-weight: 550;
  }
  & .ql-container {
    height: 55rem;
    border-radius: 0.5em;
    border: 1px solid #ccc;
  }
  & .ql-editor {
    border: 1px solid #ccc;
    font-size: 1.5rem;
  }
  & .ql-toolbar {
    border-radius: 0.5em;
    padding: 1rem 0rem;
    & ::-webkit-scrollbar {
      width: 4px;
      background: gray;
    }
  }
  & .ql-size {
    width: 10px;
  }
`;
