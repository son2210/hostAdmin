import styled from 'styled-components';

export const WrapPage = styled.div`
  .btn-go-back {
    margin-bottom: 1.5rem;
  }
`;
export const GroupProfile = styled.div`
  display: flex;
  justify-content: space-between;
  .title-profile {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;
export const BoxAvatar = styled.div`
  width: 20%;
  text-align: center;
  .user-avatar {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .footer-avatar {
    position: relative;
    margin-top: 2rem;
    border-top: 1px solid var(--txt-sidebar);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    cursor: pointer;
    user-select: none;
    .icon-camera {
      margin-top: 4px;
      position: absolute;
      right: 0;
    }
  }
  #avatar {
    display: none;
  }
  .user-des {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 1rem;
  }
`;

export const GroupContent = styled.div`
  width: 70%;
`;
export const BoxContent = styled.div`
  margin-bottom: 3rem;
`;
export const BoxNote = styled.div`
  .group-role {
    margin-top: -2rem;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const FormButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;
