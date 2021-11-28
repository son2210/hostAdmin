import styled from 'styled-components';

export const TextStyle = styled.span`
  display: inline-block;
  background-color: ${({ color }) => color};
  padding: 5px;
  border-radius: 5px;
`;
