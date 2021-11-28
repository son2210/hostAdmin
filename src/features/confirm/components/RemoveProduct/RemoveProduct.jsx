import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import PopupOverlay from 'components/PopupOverlay/PopupOverlay';
import { MessagePopup } from './RemoveProduct.styles';
import { removeProduct } from 'features/confirm/redux/product.slice';

const RemoveProduct = ({ item, open, setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveProduct = async () => {
    setIsLoading(true);
    const response = await dispatch(removeProduct(item?.id));
    if (removeProduct.fulfilled.match(response)) {
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
      isAction
      onOk={handleRemoveProduct}
      textOk="Đồng ý"
      loading={isLoading}
    >
      <MessagePopup>Bạn có thực sư muốn xóa nội dung này !</MessagePopup>
    </PopupOverlay>
  );
};

export default RemoveProduct;
