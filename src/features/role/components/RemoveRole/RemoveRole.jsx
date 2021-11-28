import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import PopupOverlay from '../../../../components/PopupOverlay/PopupOverlay';
import { MessagePopup } from './RemoveRole.styles';
import { removeRoles } from '../../redux/role.slice';

const RemoveRole = ({ item, open, setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveRole = async () => {
    setIsLoading(true);
    const response = await dispatch(removeRoles(item.id));
    if (removeRoles.fulfilled.match(response)) {
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
        onOk={handleRemoveRole}
        loading={isLoading}
      >
        <MessagePopup>Bạn có thực sư muốn xóa nội dung này !</MessagePopup>
      </PopupOverlay>
    </>
  );
};

export default RemoveRole;
