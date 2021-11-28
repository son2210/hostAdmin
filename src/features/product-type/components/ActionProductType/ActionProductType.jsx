import React, { useState } from 'react';
import { Formik } from 'formik';
import { AiOutlineSave } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import { ContentForm, GroupAction } from './ActionProductType.styles';
import { schema } from '../../helpers/product-type.helpers';
import ElementInput from 'components/FormElements/ElementInput/ElementInput';
import { Button } from 'components/Button/Button';
import {
  postProductType,
  putProductType,
} from './../../redux/product-type.slice';

const ActionProductType = ({ item, setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={item}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          setIsLoading(true);
          const dispatchAction = item?.name ? putProductType : postProductType;
          const response = await dispatch(dispatchAction(values));
          if (dispatchAction.fulfilled.match(response)) {
            toast.success('Thành công !');
          } else {
            toast.error(_get(response.payload, 'name[0]'));
          }
          resetForm();
          setOpen(false);
          setIsLoading(false);
        }}
      >
        {({ handleSubmit }) => {
          return (
            <ContentForm>
              <div className="from-group">
                <label htmlFor="">Danh mục</label>
                <ElementInput
                  type="text"
                  placeholder="Tên danh mục"
                  name="name"
                />
              </div>

              <GroupAction>
                <Button
                  size="medium"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Hủy
                </Button>
                <Button
                  size="medium"
                  color="primary"
                  icon={<AiOutlineSave />}
                  type="submit"
                  onClick={() => handleSubmit()}
                  loading={isLoading}
                  disabled={isLoading}
                >
                  Lưu
                </Button>
              </GroupAction>
            </ContentForm>
          );
        }}
      </Formik>
    </>
  );
};

export default ActionProductType;
