import React, { memo } from 'react';

import {
  WrapContent,
  TitleMain,
  TitleControl,
  BoxControl,
  BoxSearchInput,
  InputSearch,
} from 'styles/common/common-styles';
import FeedbackTable from './../../components/FeedbackTable/FeedbackTable';
import { DATA_FAKE } from './../../constants/feedback.constants';

const FeedbackScreen = () => {
  return (
    <>
      <TitleMain>Phản hồi</TitleMain>
      <WrapContent>
        <TitleControl>Tìm kiếm</TitleControl>

        <BoxSearchInput>
          <BoxControl className="box-control">
            <label htmlFor="" className="label-control">
              Tên
            </label>
            <InputSearch
              type="text"
              placeholder="Tìm kiếm"
              className="input-filter input-search"
            />
          </BoxControl>
        </BoxSearchInput>
      </WrapContent>

      {DATA_FAKE && DATA_FAKE.length > 0 ? (
        <FeedbackTable data={DATA_FAKE} />
      ) : (
        <div>Chưa có sản phản hồi nào</div>
      )}
    </>
  );
};

export default memo(FeedbackScreen);
