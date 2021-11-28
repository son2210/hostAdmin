import React, { memo, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { AiOutlineSave } from 'react-icons/ai';
import { useHistory, useParams } from 'react-router-dom';
import _get from 'lodash.get';
import { toast } from 'react-toastify';
import { BsArrowLeftShort } from 'react-icons/bs';

import {
  WrapContent,
  TitleMain,
  BoxControl,
  BoxSearchInput,
} from 'styles/common/common-styles';
import ElementInput from 'components/FormElements/ElementInput/ElementInput';
import { initForm, schema } from '../../helpers/role.helpers';
import ElementCheckbox from 'components/FormElements/ElementCheckbox/ElementCheckbox';
import { Button } from 'components/Button/Button';
import Loading from 'components/Loading/Loading';
import {
  GroupCheckbox,
  GroupButton,
  GroupItem,
  WrapPage,
} from './RoleActionScreen.styles';

import { useDispatch, useSelector } from 'react-redux';
import { getPermissions } from 'features/permissions/redux/permissions.slice';
import { postRole, getRoleDetail, putRole } from '../../redux/role.slice';

const RoleActionScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getRoleDetail(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getPermissions());
  }, [dispatch]);

  const { listPermission, isItemRoleLoading, itemRole } = useSelector(
    (state) => ({
      listPermission: state.permission.listPermission,
      isItemRoleLoading: state.role.isItemRoleLoading,
      itemRole: state.role.itemRole,
    })
  );

  const initFormData = id ? itemRole : initForm;

  if (isItemRoleLoading) {
    return <Loading />;
  }
  return (
    <WrapPage>
      <TitleMain>{id ? 'Sửa' : 'Thêm'} vài trò</TitleMain>
      <Button
        size="small"
        className="btn-go-back"
        icon={<BsArrowLeftShort />}
        onClick={() => history.goBack()}
        color="default"
      >
        Quay lại
      </Button>
      <WrapContent>
        <Formik
          validationSchema={schema}
          initialValues={initFormData}
          onSubmit={async (values) => {
            setIsLoading(true);
            const dispatchAction = id ? putRole : postRole;
            const response = await dispatch(
              dispatchAction({
                roles: values,
              })
            );
            if (dispatchAction.fulfilled.match(response)) {
              toast.success('Thành công !');
              history.push('/role');
            } else {
              toast.error(_get(response.payload, 'name[0]'));
            }
            setIsLoading(false);
          }}
        >
          {() => {
            return (
              <Form>
                <BoxSearchInput>
                  <BoxControl className="box-control">
                    <ElementInput
                      type="text"
                      placeholder="Tên vai trò"
                      name="name"
                      label="Tên vai trò"
                    />
                  </BoxControl>
                </BoxSearchInput>

                <GroupCheckbox>
                  <label className="label-text">Cấp quyền</label>
                  <GroupItem>
                    <ElementCheckbox data={listPermission} name="permissions" />
                  </GroupItem>
                </GroupCheckbox>

                <GroupButton>
                  <Button
                    type="submit"
                    size="medium"
                    color="primary"
                    icon={<AiOutlineSave />}
                    loading={isLoading}
                    disabled={isLoading}
                  >
                    Lưu
                  </Button>
                </GroupButton>
              </Form>
            );
          }}
        </Formik>
      </WrapContent>
    </WrapPage>
  );
};

export default memo(RoleActionScreen);
