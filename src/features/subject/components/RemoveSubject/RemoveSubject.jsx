import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import { removeSubject } from '../../redux/subject.slice';
import PopupOverlay from 'components/PopupOverlay/PopupOverlay';
import { MessagePopup } from './RemoveSubject.styles';

const RemoveSubject = ({ item, open, setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemove = async () => {
    setIsLoading(true);
    const response = await dispatch(removeSubject(item?.id));
    if (removeSubject.fulfilled.match(response)) {
      toast.success('Xóa thành công !');
    } else {
      toast.error(_get(response.payload, 'name[0]'));
    }
    setIsLoading(false);
    setOpen(false);
  };

  return (
    <PopupOverlay
      open={open}
      setOpen={setOpen}
      onOk={handleRemove}
      isAction
      textOk="Đồng ý"
      loading={isLoading}
    >
      <MessagePopup>Bạn có thực sư muốn xóa nội dung này !</MessagePopup>
    </PopupOverlay>
  );
};

export default RemoveSubject;
