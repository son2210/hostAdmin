import styled from 'styled-components';

export const BoxChat = styled.div`
  margin-left: 1.5rem;
  border-radius: 5px;
  background-color: var(--white-color);
`;
export const BoxChatHeader = styled.div`
  padding: 1rem;
  .auth-chat {
    font-size: 1.4rem;
  }
`;
export const BoxChatContent = styled.div`
  .chat-send {
    display: flex;
  }
  .chat-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .chat-content {
    border-radius: 5px;
    box-shadow: 0 0 1rem var(--eee-color);
    padding: 1.2rem;
    font-size: 1.4rem;
  }
  .chat-time {
    font-size: 1.1rem;
    display: inline-block;
    margin-top: 1rem;
  }
  .chat-reply {
    justify-content: flex-end;
    margin-top: 2rem;
  }
  .chat-reply > .chat-content {
    background-color: var(--blue3-color);
  }
`;
export const BoxChatBody = styled.div`
  height: 20rem;
  overflow-y: scroll;
  border-top: 1px solid var(--eee-color);
  border-bottom: 1px solid var(--eee-color);
  padding: 2rem 1.5rem;
  margin-right: 2px;
  visibility: hidden;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--eee-color);
    border-radius: 10px;
  }
  .scroll-delayed {
    transition: visibility 0.2s;
  }
  .scroll-delayed:hover {
    transition: visibility 0.2s;
  }
  ${BoxChatContent},
  &:hover,
  &:focus {
    visibility: visible;
  }
`;

export const BoxChatFooter = styled.div`
  padding: 5px 1rem;
  display: flex;
  align-items: center;
  .box-input {
    width: 100%;
    border: none;
    padding: 1.2rem 1.5rem 1.2rem 0;
  }
  .btn-send {
    font-size: 2rem;
    cursor: pointer;
  }
`;
