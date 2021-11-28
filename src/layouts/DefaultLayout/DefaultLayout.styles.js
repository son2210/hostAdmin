import styled from 'styled-components';

export const WrapApp = styled.div`
  display: flex;
  overflow: hidden;

  .wrap-main {
    width: calc(100% - 28rem);
    margin-left: 28rem;
    background-color: var(--bg-admin);
  }

  .wrap-content {
    padding: 3rem 3.5rem;
    min-height: 90vh;
  }
`;
