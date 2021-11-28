import React, { memo, useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

import {
  BoxChat,
  BoxChatHeader,
  BoxChatBody,
  BoxChatContent,
  BoxChatFooter,
} from './BoxChatFeedback.styles';

const BoxChatFeedback = () => {
  const [valueMessage, setValueMessage] = useState({ user: '', value: '' });
  const handleInputChat = (e) => {
    const { value, name } = e.target;
    setValueMessage({ ...valueMessage, [name]: value });
  };

  return (
    <BoxChat>
      <BoxChatHeader>
        <span className="auth-chat">Lê Quang Sơn</span>
      </BoxChatHeader>
      <BoxChatBody className="scroll-delayed">
        <BoxChatContent>
          <div className="chat-send">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/07/10/47/night-1080547__480.jpg"
              alt=""
              className="chat-img"
            />
            <span className="chat-content">
              <p className="chat-txt">Chào cậu !</p>
              <span className="chat-time">2:31/10/10/2021</span>
            </span>
          </div>

          <div className="chat-send chat-reply">
            <span className="chat-content">
              <p className="chat-txt">Chào cậu !</p>
              <span className="chat-time">2:31/10/10/2021</span>
            </span>
          </div>
          <div className="chat-send chat-reply">
            <span className="chat-content">
              <p className="chat-txt">Chào cậu !</p>
              <span className="chat-time">2:31/10/10/2021</span>
            </span>
          </div>
        </BoxChatContent>
      </BoxChatBody>
      <BoxChatFooter>
        <input
          type="text"
          placeholder="Nhắn tin với"
          value={valueMessage.value}
          name="user_reply"
          className="box-input"
          onChange={handleInputChat}
        />
        <span className="btn-send">
          <FaTelegramPlane />
        </span>
      </BoxChatFooter>
    </BoxChat>
  );
};

export default memo(BoxChatFeedback);
