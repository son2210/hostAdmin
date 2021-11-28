import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import PopupOverlay from 'components/PopupOverlay/PopupOverlay';
import { MessagePopup } from './RemoveMajors.styles';
import { removeMajors } from './../../redux/majors.slice';

const RemoveMajors = ({ item, open, setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveMajors = async () => {
    setIsLoading(true);
    const response = await dispatch(removeMajors(item?.id));
    if (removeMajors.fulfilled.match(response)) {
      toast.success('Xóa thành công !');
    } else {
      toast.error(_get(response.payload, 'name[0]'));
    }
    setOpen(false);
    setIsLoading(false);
  };

  return (
    <>
      <PopupOverlay
        open={open}
        setOpen={setOpen}
        isAction
        textOk="Đồng ý"
        onOk={handleRemoveMajors}
        loading={isLoading}
      >
        <MessagePopup>Bạn có thực sư muốn xóa nội dung này !</MessagePopup>
      </PopupOverlay>
    </>
  );
};

export default RemoveMajors;
