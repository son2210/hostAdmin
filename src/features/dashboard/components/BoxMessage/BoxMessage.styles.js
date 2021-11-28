import styled from 'styled-components';

export const BoxMessageWait = styled.div`
  background-color: var(--white-color);
  padding: 1.5rem;
  border-radius: 5px;
`;
export const GroupMessageWait = styled.div`
  overflow-y: scroll;
  max-height: 20rem;
  padding: 3.2rem 1rem 2rem 0;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--eee-color);
    border-radius: 10px;
  }
`;
export const MsgItem = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 2rem;
  }

  .msg-content {
    display: flex;
  }

  .msg-img {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    margin-right: 1.5rem;
  }

  .msg-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 500;
    overflow: hidden;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .msg-time {
    color: var(--aaa-color);
  }
`;
export const MsgAction = styled.div`
  position: relative;
  margin-left: 3rem;

  .icon-show {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .list-action {
    position: absolute;
    top: -3rem;
    right: 1rem;
    display: flex;
    align-items: center;
    border: 1px solid var(--gray1-color);
    padding: 6px 5px 4px 5px;
    box-shadow: 0 0 1rem var(--gray1-color);
    background-color: var(--white-color);
    border-radius: 1rem;
  }

  .icon-action {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .icon-action + .icon-action {
    margin-left: 1rem;
  }
`;
