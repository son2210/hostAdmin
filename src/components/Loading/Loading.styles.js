import styled from 'styled-components';

export const WrapLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 200;

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loader {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    animation: rotate 3.2s linear infinite;
  }

  @keyframes rotate {
    30% {
      transform: rotate(220deg);
    }
    40% {
      transform: rotate(450deg);
    }
    75% {
      transform: rotate(720deg);
      opacity: 1;
    }
    76% {
      opacity: 0;
    }
    100% {
      transform: rotate(0deg);
      opacity: 0;
    }
  }

  .loader:nth-child(1) {
    animation-delay: 0.15s;
  }
  .loader:nth-child(2) {
    animation-delay: 0.3s;
  }
  .loader:nth-child(3) {
    animation-delay: 0.45s;
  }
  .loader:nth-child(4) {
    animation-delay: 0.6s;
  }
  .loader:nth-child(5) {
    animation-delay: 0.75s;
  }
  .loader:nth-child(6) {
    animation-delay: 0.9s;
  }

  .element {
    height: 4.5px;
    width: 4.5px;
    background-color: var(--blue-color);
    border-radius: 50%;
    position: relative;
  }
`;
