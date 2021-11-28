import styled from 'styled-components';

export const GroupTale = styled.div`
  overflow-x: auto;
`;
export const Table = styled.table`

  border-collapse: collapse;
  width: 100%;
  background-color: var(--white-color);
  font-size: 1.4rem;
  text-align: left;
  .result {
    margin: 2rem 0rem;
    text-align: center;
  }
  .resultLoader{
    width: 18px;
    height: 18px;
    padding:10px;
    margin: 10px;
    border-radius: 50%;
    border-top: 2px solid blue;
    animation: loader 2s infinite linear ;
  }
  @keyframes loader {
        0%{
          transform :  rotate(0deg);
        }
        100%{
          transform :  rotate(360deg);
        }
    }

`;

export const TableTr = styled.tr`
  border-bottom: 1px solid var(--eee-color);
  display: table-row;

  th {
    font-weight: 500;
    padding: 1rem;
    white-space: nowrap;
    text-align: ${({ alignText }) => alignText};
  }

  .fix-sort {
    min-width: 15rem;
  }

  td {
    padding: 1.2rem;
  }
  li {
    list-style: none;
    padding: 2px 0px;
  }
`;

export const TableTh = styled.th`
  position: relative;
  text-align: ${({ alignText }) => alignText};
  & .label-th {
    padding-right: 2.5rem;
  }
  .sort {
    position: absolute;
    cursor: pointer;
  }
  & .sort::after {
    content: '\\2191';
    opacity: 0.7;
  }

  & .sort::before {
    content: '\\2193';
    opacity: 0.7;
  }
`;
