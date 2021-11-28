import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import PopupOverlay from '../../../../components/PopupOverlay/PopupOverlay';
import { MessagePopup } from './RemovePermissions.styles';
import { removePermissions } from 'features/permissions/redux/permissions.slice';

const RemovePermissions = ({ item, open, setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemovePermissions = async () => {
    setIsLoading(true);
    const response = await dispatch(removePermissions(item.id));
    if (removePermissions.fulfilled.match(response)) {
      toast.success('Xóa thành công !');
    } else {
      toast.error(_get(response.payload, 'name[0]'));
    }
    setIsLoading(false);
    setOpen(false);
  };

  return (
    <>
      <PopupOverlay
        open={open}
        setOpen={setOpen}
        isAction
        textOk="Đồng ý"
        onOk={handleRemovePermissions}
        loading={isLoading}
      >
        <MessagePopup>Bạn có thực sư muốn xóa nội dung này !</MessagePopup>
      </PopupOverlay>
    </>
  );
};

export default RemovePermissions;
