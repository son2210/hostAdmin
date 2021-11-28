import React, { memo, useState } from 'react';
import { BsThreeDotsVertical, BsTrash } from 'react-icons/bs';
import { RiChat3Line } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';

import { BoxTitleDashboard } from 'styles/common/common-styles';
import {
  BoxMessageWait,
  MsgItem,
  MsgAction,
  GroupMessageWait,
} from './BoxMessage.styles';

const FAKE_AWAIT_MESSAGE = [
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2015/06/01/00/20/man-792821__480.jpg',
    title: 'Popular Images: nature, wallpaper, halloween, background,',
    time: '09/18/2021',
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2021/09/26/14/37/milky-way-6657951__480.jpg',
    title: 'Stunning free images & royalty free stock',
    time: '09/18/2021',
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2020/11/29/04/02/hand-5786371__480.jpg',
    title: 'Over 2.4 million+ high quality',
    time: '09/18/2021',
  },
];

const BoxMessage = () => {
  const [isIndexActionMsg, setIsIndexActionMsg] = useState(null);

  return (
    <BoxMessageWait>
      <BoxTitleDashboard>Tin nhắn chờ</BoxTitleDashboard>

      <GroupMessageWait>
        {FAKE_AWAIT_MESSAGE.map((item, index) => (
          <MsgItem key={item.id}>
            <div className="msg-content">
              <img src={item.img} alt="" className="msg-img" />
              <div className="msg-box">
                <h4 className="msg-title">{item.title}</h4>
                <span className="msg-time">{item.time}</span>
              </div>
            </div>

            <MsgAction>
              <div
                className="icon-show"
                onClick={() => setIsIndexActionMsg(index)}
              >
                <BsThreeDotsVertical />
              </div>

              {index === isIndexActionMsg && (
                <OutsideClickHandler
                  onOutsideClick={() => setIsIndexActionMsg(false)}
                >
                  <div className="list-action">
                    <div className="icon-action">
                      <RiChat3Line />
                    </div>
                    <div className="icon-action">
                      <BsTrash />
                    </div>
                  </div>
                </OutsideClickHandler>
              )}
            </MsgAction>
          </MsgItem>
        ))}
      </GroupMessageWait>
    </BoxMessageWait>
  );
};

export default memo(BoxMessage);
