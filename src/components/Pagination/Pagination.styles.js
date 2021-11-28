import styled from 'styled-components';

export const GroupPagination = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding: 1rem;
  user-select: none;
  .title-pagination {
    padding-right: 1rem;
  }
  .location-pagination {
    margin: 0 2rem 0 1rem;
  }
`;
export const BoxSelect = styled.div`
  position: relative;
  .show-option {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 1rem;
    border-radius: 5px;
  }
  .show-option.active {
    background-color: var(--eee-color);
  }
  .show-option:hover {
    background-color: var(--eee-color);
  }
  .icon-option {
    padding-left: 5px;
  }
  .list-option {
    text-align: center;
    position: absolute;
    top: -180%;
    left: 0;
    right: 0;
    background-color: var(--white-color);
    box-shadow: 0 0 1rem var(--eee-color);
    border-radius: 5px;
  }
  .item-option {
    padding: 8px 1.2rem;
    cursor: pointer;
  }
  .item-option:hover {
    background-color: var(--eee-color);
  }
`;
export const BoxControl = styled.div`
  .icon-prev,
  .icon-next {
    cursor: pointer;
  }
  .icon-next {
    margin-left: 1.5rem;
  }
  .icon-prev.disabled,
  .icon-next.disabled {
    color: var(--ddd-color);
  }
`;
