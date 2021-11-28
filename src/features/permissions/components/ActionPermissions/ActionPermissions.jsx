import React, { useState } from 'react';
import { Formik } from 'formik';
import { AiOutlineSave } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _get from 'lodash.get';

import { ContentForm, GroupAction } from './ActionPermissions.styles';

import { schema } from '../../helpers/permissions.helpers';
import ElementInput from '../../../../components/FormElements/ElementInput/ElementInput';
import { Button } from '../../../../components/Button/Button';
import { postPermissions, putPermissions } from '../../redux/permissions.slice';
import CheckboxFormSingle from 'components/FormElements/ElementCheckbox/CheckboxFormSingle';

const ActionPermissions = ({ item, setOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const itemPermission = item?.name
    ? {
        id: item.id,
        name: item?.name,
        type: item?.type,
        title: item?.view_permission[0]?.title,
        url: item?.view_permission[0]?.url,
        icon: item?.view_permission[0]?.icon,
      }
    : item;

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={itemPermission}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          setIsLoading(true);
          const newObj = {
            id: item.id,
            name: values.name,
            type: values.type,
            status: 0,
            view_permissions: [
              { title: values.title, url: values.url, icon: values.icon },
            ],
          };
          const dispatchAction = item?.name ? putPermissions : postPermissions;

          const response = await dispatch(dispatchAction(newObj));
          if (dispatchAction.fulfilled.match(response)) {
            toast.success('Thành công !');
          } else {
            toast.error(_get(response.payload, 'name[0]'));
          }
          setOpen(false);
          setIsLoading(false);
          resetForm();
        }}
      >
        {({ handleSubmit }) => {
          return (
            <ContentForm>
              <div className="from-group">
                <label htmlFor="">Tên quyền</label>
                <ElementInput type="text" placeholder="Tên quyền" name="name" />
              </div>

              <div className="from-group">
                <label htmlFor="">Tiêu đề trang</label>
                <ElementInput
                  type="text"
                  placeholder="Tiêu đề trang"
                  name="title"
                />
              </div>

              <div className="from-group">
                <label htmlFor="">Đường dẫn</label>
                <ElementInput type="text" placeholder="Đường dẫn" name="url" />
              </div>

              <div className="from-group">
                <label htmlFor="">Icon</label>
                <ElementInput type="text" placeholder="Icon" name="icon" />
              </div>

              <div className="from-group form-checkbox">
                <label htmlFor="">Loại</label>
                <CheckboxFormSingle name="type" checked={item.type} />
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

export default ActionPermissions;
