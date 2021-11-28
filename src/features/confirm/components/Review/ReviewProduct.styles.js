import styled from 'styled-components';
export const OverLay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background-color: #6e6c6c36;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;
export const Content = styled.div`
  max-width: 100%;
  overflow: hidden;
  /* position: absolute; */
`;
export const MainReview = styled.div`
  max-width: 100%;
  overflow: hidden;
`;
export const DescriptionReview = styled.div``;

export const ContentReview = styled.div`
  padding-left: 2rem;
  & h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: var(--txt-color);
  }
  & button.btn-item {
    background-color: #e6e6e6;
    padding: 10px 7px;
    margin: 5px;
    color: #11070a;
    border: none;
    border-radius: 5px;
    font-size: 1.3rem;
  }
  & button.btn-item .test {
    display: flex;
    justify-content: flex-end;
  }

  & button.btn-item:disabled {
    /* background-color: #ffffff; */
    color: #66636366;
  }
  & button.btn-item:disabled:hover {
    cursor: not-allowed;
  }
  & button.btn-item .loading {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
    border-top: 2px solid blue;
    animation: spin 1s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const TitleProject = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
  color: var(--txt-color);
`;

export const GroupMember = styled.div`
  margin-top: 2rem;

  .list-member {
    margin: 1.5rem 0 0 2rem;
  }
  .item-member {
    display: block;
    font-size: 1.3rem;
  }
  .item-member + .item-member {
    margin-top: 1rem;
  }
`;

export const LabelProject = styled.div`
  font-size: 1.4rem;
  white-space: nowrap;
  margin-right: 1rem;
  color: var(--red-color);
  font-weight: 500;
  margin-right: 1rem;
`;

export const BoxProject = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

export const GroupDetail = styled.div`
  margin-top: 6rem;
`;

// group detail
export const ImageSlice = styled.div`
  padding-top: 1rem;
  & .slick-dots li {
    width: 70px;
    height: 70px;
  }
  & .slick-dots {
    width: 85%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .slick-list {
    height: 370px;
    overflow: hidden;
  }
  & .slick-list img {
    width: 100%;
    height: 300px;
    image-resolution: center;
    image-rendering: pixelated;
    border-radius: 5px;
  }
  & .slider_galleries {
    font-size: 1.5rem;
    color: #e96969;
  }
`;

export const ListCurrentImg = styled.div`
  width: 150px;
  height: 50px;
  overflow: hidden;
  & + & {
    margin: 2rem;
  }
  img {
    height: 100%;
    width: 100%;
  }
  & .current-slide {
    max-height: 70px;
    width: 70px;
    border-radius: 5px;
    image-rendering: pixelated;
    image-resolution: center;
  }
`;
export const TitleMain = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: var(--txt-color);

  span {
    display: inline-block;
    margin-left: 1rem;
  }
`;
export const Video = styled.div`
  margin-top: 10px;
  border-radius: 10px;
`;

export const GroupBox = styled.div`
  &:not(:first-child) {
    margin-top: 2.5rem;
  }
`;

export const ContentPost = styled.p`
  font-size: 1.3rem;
  color: var(--txt-color);
  line-height: 2.5rem;
  margin-top: 2.5rem;
  text-align: justify;
`;

export const GroupAttach = styled.div`
  margin-top: 2.5rem;
`;

export const ItemAttach = styled.div`

  & + & {
    margin-top: 2rem;
  }
  font-size: 1.2rem;

  .title-attach {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 5px;
    max-width: 100%;
    overflow: hidden;
  }
  & a {
      padding-right: 10px;
  }
`;

export const BoxYoutube = styled.div`
  width: 100%;
  margin-top: 1rem;
  .video-youtube {
    width: 100%;
    height: 25rem;
  }
`;

// comment
